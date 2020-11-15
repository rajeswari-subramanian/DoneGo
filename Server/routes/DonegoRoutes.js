const express = require("express");
const router = express.Router();

const { getDonegoitems, getRestaurent } = require('../controllers/donegoControl')

router.get('/donegoItems', getDonegoitems)
//router.get('/donegoRestaurant', getRestaurent)

module.exports = router