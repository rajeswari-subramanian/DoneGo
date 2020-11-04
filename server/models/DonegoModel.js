const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donegoSchema = new Schema({
    type: String,
    restaurentName: String,
    longitude: Number,
    latitude: Number ,
    avatar: String,
    foodType: String,
    distance: String,
    place: String,
    deliveryTime: String,
    foodCategory: String,
    foodItems: [
        {
            itemName: String,
            itemPrice: Number
        },
        {
            itemName: String,
            itemPrice: Number
        }
    ]
});

module.exports = mongoose.model("DonegoModel", donegoSchema);