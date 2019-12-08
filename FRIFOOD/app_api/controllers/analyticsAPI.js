const mongoose = require('mongoose');
const Analytics = mongoose.model('analytics');

const returnAnalyticsByName = (req, res) => {
    console.log('request');
    Analytics
        .find()
        .exec((error, analytics) => {
            if (!analytics) {
                return res.status(404).json({
                    "error": "Analytics were not found"
                });
            } else if (error) {
                return res.status(500).json(error);
            }
            res.status(200).json(analytics);
        });
};


const updateAnalyticsByName = (req, res) => {
    var name = req.body.name;
    var ObjectId = (mongoose.Types.ObjectId);

    Analytics.findOneAndUpdate({ name: name },
        { $inc: {'numAPICalls': 1 } },
        {new: true },
        function (error, result) {
        if (error)
            return res.status(500).json(error);
        else {
            res.status(200).json(result);
        }
    });
};

module.exports = {
    returnAnalyticsByName,
    updateAnalyticsByName
};