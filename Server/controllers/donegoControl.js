const DonegoModel = require('../models/DonegoModel')

function calcDistance(lat1, lon1, lat2, lon2) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;
        return dist;
    }
}

function timeConvert(n) {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    if (rhours > 0) {
        return rhours + " hr " + rminutes + " mins"
    }
    else {
        return rminutes + " mins"
    }
}

const getDonegoitems = (req, res) => {

    let lat = req.headers.lat
    let lang = req.headers.lang
    // let curr = req.headers.curr

    //console.log(lat, lang);

    DonegoModel.find()
        .then((donego) => {
            let resturantData = [...donego]
            // console.log(resturantData);
            // Here We Calculate Distance Based on Latitude and Longitude
            for (let i = 0; i < resturantData.length; i++) {
                resturantData[i]["distance"] = calcDistance(parseFloat(lat), parseFloat(lang), parseFloat(resturantData[i].latitude), parseFloat(resturantData[i].longitude)).toFixed(1);

                // Here We Check if distance Less than 12 KM and takes random Expected Delivery Time
                if (parseInt(resturantData[i]["distance"]) < 12) {
                    resturantData[i]["deliveryTime"] = timeConvert(Math.floor(Math.random() * (50 - 25 + 1)) + 25);  // Max : 50 Mins, Min: 25 Mins 
                }
                else {
                    resturantData[i]["deliveryTime"] = timeConvert(Math.floor(Math.random() * (120 - 50 + 1)) + 50);  // Max : 2 Hrs, Min: 50 Mins 
                }
            }
            // console.log(resturantData);
            // Here We Set Grid Based on Distance
            let gridDistance = 5  // 50 KM
            let filterdRes = resturantData.filter(item => parseInt(item.distance) <= gridDistance).sort((a, b) => (parseInt(a.distance) - parseInt(b.distance)))
            // filterdRes = filterdRes.filter(item => item.place == curr)
            res.json(filterdRes)

        })
        .catch((err) => res.status(400).json("Error: " + err));
}

const getRestaurent = (req, res) => {
    DonegoModel.find({ place: req.body.place })
        .then((donego) => res.json(donego))
        .catch((err) => res.status(400).json("Error: " + err));
}

module.exports = { getDonegoitems, getRestaurent }