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
            actualMapAddress: String,
            longitude: Number,
            latitude: Number,
            contactPerson: String,
            contactDetail: Number,
            addressType: String
        }
    ],
    orderDetails: [
        {
            dateOfOrder: String,
            transactionId: String,
            restaurentName: String,
            restaurentAddress: String,
            userAddress: String,
            userAddressType: String,
            userMobileNumber: Number,
            items: [
                {
                    itemName: String,
                    itemPrice: Number,
                    itemQuantity: Number
                },
                {
                    itemName: String,
                    itemPrice: Number,
                    itemQuantity: Number
                }
            ],
            totalAmount: Number,
            status: String
        },
    ]
});

module.exports = mongoose.model("DonegoUserModel", donegoSchema);