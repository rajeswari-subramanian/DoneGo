const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const DonegoUserModel = require('../models/userDetailModel')

const config = require("../config")
const client = require('twilio')(config.accountSID, config.authToken)

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
            //console.log(data)
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
            if ((data.status === 'approved') && data.valid) {
                DonegoUserModel.find({ mobile: req.query.mobile })
                    .then(user => {
                        //console.log(user)
                        if (user.length > 0) {
                            const userToken = { id: user[0]._id, mobile: user[0].mobile }
                            const accessToken = jwt.sign(userToken, "DONEGO", { expiresIn: '3600s' });
                            res.status(200).json({ accessToken: accessToken, userToken: userToken, message: "Login Successful" });
                        }
                        else {
                            DonegoUserModel.insertMany({ "mobile": req.query.mobile })
                                .then(newUser => {
                                    //console.log(newUser[0])
                                    const userToken = { id: newUser[0]._id, mobile: newUser[0].mobile }
                                    const accessToken = jwt.sign(userToken, "DONEGO", { expiresIn: '3600s' });
                                    res.status(200).json({ accessToken: accessToken, userToken: userToken, message: "Login Successful" });
                                })
                        }
                    })
            }
            else {
                res.status(200).json({ message: "Wrong OTP, Please try again" });
            }
        })
})

router.get('/userDetails', (req, res) => {
    DonegoUserModel.find({ _id: req.headers.id })
        .then((donego) => {
            res.status(200).json(donego)
        })
        .catch((err) => res.status(400).json("Error: " + err));
})


router.put('/updateProfile', (req, res) => {
    DonegoUserModel.update({ _id: req.body.id }, {
        $set: {
            name: req.body.name,
            email: req.body.email
        }
    })
        .then((donego) => {
            res.status(200).json(donego)
        })
        .catch((err) => res.status(400).json("Error: " + err));
})

router.put('/addAddress', (req, res) => {
    DonegoUserModel.update({ _id: req.body.id }, {
        $push: {
            address: {
                street: req.body.street,
                landmark: req.body.landmark,
                actualMapAddress: req.body.actualMapAddress,
                longitude: req.body.longitude,
                latitude: req.body.latitude,
                contactPerson: req.body.contactPerson,
                contactDetail: req.body.contactDetail,
                addressType: req.body.addressType
            }
        }
    })
        .then((donego) => {
            res.status(200).json({ message: "Address Added" })
        })
        .catch((err) => res.status(400).json("Error: " + err));
})

router.put('/placeOrder', (req, res) => {
    DonegoUserModel.update({ _id: req.body.id }, {
        $push: {
            orderDetails: {
                dateOfOrder: req.body.dateOfOrder,
                restaurentName: req.body.restaurentName,
                restaurentAddress: req.body.restaurentAddress,
                userAddress: req.body.userAddress,
                userAddressType: req.body.userAddressType,
                userMobileNumber: req.body.userMobileNumber,
                items: req.body.items,
                totalAmount: req.body.totalAmount,
                status: req.body.status
            }
        }
    })
        .then((donego) => {
            res.status(200).json({ message: "Order Placed" })
        })
        .catch((err) => res.status(400).json("Error: " + err));
})


module.exports = router;