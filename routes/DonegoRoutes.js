const express = require("express");
const router = express.Router();

const { getDonegoitems, getRestaurent} = require('../controllers/donegoControl')

router.get('/donegoitems', getDonegoitems)
router.get('/donegresturant', getRestaurent)

module.exports = router