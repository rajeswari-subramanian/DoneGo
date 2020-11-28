const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();

//RAZORPAY
const path = require("path");
const shortid = require("shortid");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const razorpay = new Razorpay({
    key_id: `${process.env.key_id}`,
    key_secret: `${process.env.key_secret}`,
});
app.post("/verification", (req, res) => {
    const secret = "12345678";
    const crypto = require("crypto");
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");
    //console.log(digest, req.headers['x-razorpay-signature'])
    if (digest === req.headers["x-razorpay-signature"]) {
        //console.log('request is legit')
        // process it
        require("fs").writeFileSync(
            "payment1.json",
            JSON.stringify(req.body, null, 4)
        );
    } else {
        // pass it
    }
    res.json({ status: "ok" });
});

app.post("/razorpay", async (req, res) => {
    const payment_capture = 1;
    const amount = req.body.amount;
    const currency = "INR";
    const options = {
        amount: amount * 100,
        currency,
        receipt: shortid.generate(),
        payment_capture,
    };
    try {
        const response = await razorpay.orders.create(options);
        //console.log("rrrresponae", response);
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount,
        });
    } catch (error) {
        console.log(error);
    }
});
//RAZORPAY

const donegoRoute = require("./routes/DonegoRoutes");

app.use(cors());
app.use(express.json());

mongoose.connect(
    process.env.ATLAS_URI,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err) => {
        if (err) console.log("The database is not connected");
        else console.log("The database is connected");
    }
);

app.use("/api/donego", donegoRoute);

const userRoute = require("./routes/DonegoUserRoutes");

app.use("/user", userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`The server is up and running ${port}`);
});