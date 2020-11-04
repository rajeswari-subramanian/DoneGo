const DonegoModel = require('../models/DonegoModel')

const getDonegoitems = (req, res) => {
    DonegoModel.find()
    .then((donego) => res.json(donego))
    .catch((err) => res.status(400).json("Error: " + err));
}

const getRestaurent = (req, res) => {
    DonegoModel.find()
    .then((donego) => res.json(donego[0].cardItems))
    .catch((err) => res.status(400).json("Error: " + err));
}


module.exports = {getDonegoitems, getRestaurent}