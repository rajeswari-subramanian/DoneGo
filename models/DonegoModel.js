const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donegoSchema = new Schema({
    id: Number,
    type: String,
    cardName: String,
        cardItems: [
            {
                restaurentName: String,
                foodItems: [
                    {
                        itemName: String,
                        itemPrice: Number,
                        itemWeight: String
                    },
                    {
                        itemName: String,
                        itemPrice: Number,
                        itemWeight: String
                    }
                ]
            }
        ]
});

module.exports = mongoose.model("DonegoModel", donegoSchema);