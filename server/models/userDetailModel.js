const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donegoSchema = new Schema({
    type: String,
    name: String,
    mobile: Number,
    email: String,
    address: [
        {
            street: String,
            landmark: String,
            longitude: Number,
            latitude: Number ,
            contactPerson: String,
            contactDetail: Number,
            addressType: String
        }
    ],
    orderDetails: [
        {
            orderId: Number,
            userId: Number,
            dateOfOrder: String,
            restaurentName:String,
            place: String,
            itemName: String,
            itemPrice: Number,
            totalAmount: Number
        }
    ]
});

module.exports = mongoose.model("DonegoUserModel", donegoSchema);