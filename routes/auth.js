const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
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

module.exports = router;