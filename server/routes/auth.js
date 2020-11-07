const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const DonegoUserModel = require('../models/userDetailModel')

const config = require("../config")
const client = require('twilio')(config.accountSID, config.authToken)

const { registerValidation, loginValidation } = require("../validation");

const User = require("../models/Users");


router.post("/register", async (req, res, next) => {
    const { error } = registerValidation(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }

    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) {
        return res.status(400).send("Email already exists in the database");
    }

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    );
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/login", async (req, res, next) => {
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send("Email or password is wrong");
    }

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid password");
    const userToken = { id: user._id, name: user.name, email: user.email }
    const accessToken = jwt.sign(userToken, "HELLO", { expiresIn: '1000s' });
    res.json({ accessToken: accessToken });
});


router.get("/loginOtp", (req, res) => {
    client
        .verify
        .services(config.serviceID)
        .verifications
        .create({
            to: `+91${req.query.mobile}`,
            channel: "sms"
        })
        .then(data => {
            res.status(200).send(data)
        })
});

router.get('/verify', (req, res) => {
    client
        .verify
        .services(config.serviceID)
        .verificationChecks
        .create({
            to: `+91${req.query.mobile}`,
            code: req.query.code
        })
        .then(data => {
            if((data.status === 'approved') && data.valid){
                DonegoUserModel.find({mobile: req.query.mobile})
                .then(user=>{
                    console.log(user)
                    if(user.length > 0){
                        const userToken = { id: user._id, mobile: user.mobile }
                        const accessToken = jwt.sign(userToken, "DONEGO", { expiresIn: '3600s' });
                        res.status(200).json({ accessToken: accessToken, message: "Login Successful"});
                    }
                    else{
                        DonegoUserModel.insertMany( { "mobile": req.query.mobile })
                        .then(newUser => {
                            console.log(newUser[0])
                            const userToken = { id: newUser[0]._id, mobile: newUser[0].mobile }
                            const accessToken = jwt.sign(userToken, "DONEGO", { expiresIn: '3600s' });
                            res.status(200).json({ accessToken: accessToken, message: "Login Successful"});
                        })
                    }
                })       
            }
           else{
            res.status(200).json({ message: "Wrong OTP, Please try again"});
           }
        })
})

router.get('/userDetails', (req, res) => {
    DonegoUserModel.find()
    .then((donego) => res.json(donego))
    .catch((err) => res.status(400).json("Error: " + err));
})

router.post('/userDetails', (req, res) => {

    // const userExist = DonegoUserModel.filter(item => item.mobile === req.body.mobile)
    // if(userExist){

    // }
    DonegoUserModel.find()
    .then((donego) => res.json(donego))
    .catch((err) => res.status(400).json("Error: " + err));
})

module.exports = router;