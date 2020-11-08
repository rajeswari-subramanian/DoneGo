const express = require('express')
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors')


let donego = require('./donegoitems.json')
let users = require('./userDetail.json')

dotenv.config();
const donegoRoute = require("./routes/DonegoRoutes")
const donegoModel = require("./models/DonegoModel");
const userModel = require("./models/userDetailModel")

const app = express();
app.use(cors())
app.use(express.json());

mongoose.connect(
    process.env.ATLAS_URI,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err) => {
        if (err) throw err;

        if (donegoModel.collection.countDocuments(function (err, count) {
            if (!err && count === 0) {
                donegoModel.insertMany(donego).then(() => {
                    console.log("Data inserted")
                }).catch((error) => {
                    console.log(error)
                });
            }
        }));
        if (userModel.collection.countDocuments(function (err, count) {
            if (!err && count === 0) {
                userModel.insertMany(users).then(() => {
                    console.log("Data inserted")
                }).catch((error) => {
                    console.log(error)
                });
            }
        }));
    })


app.use('/api', donegoRoute)

const userRoute = require("./routes/DonegoUserRoutes");

app.use("/user", userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`The server is up and running ${port}`);
});
