const mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/FRIFOOD';


const dropDatabase = (req, res) => {
    console.log("Trying to delete database");
    if (req.body.validation === 'THIS_IS_VALIDATION_KEY') {
        console.log("Got valid key: " + req.body.validation);
        if (process.env.NODE_ENV === 'production') {
            dbURI = process.env.MONGODB_CLOUD_URI;
        }
        mongoose.connection.db.dropDatabase()
        console.log();
        res.status(203);
    } else {
        return res.status(400).json({
            "error": "Not a valid request"
        });
    }

};

module.exports = {
    dropDatabase
};