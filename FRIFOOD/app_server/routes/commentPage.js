var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET users listing. */

router.get('/', ctrlMain.commentPage);

router.post('/newComment', function (req, res) {

    if(req.body.newCommentText != undefined)
    {
        var commentsJSON = require('../models/coments');

        commentsJSON.komentarji.push({
            "value": req.body.newCommentText.toString(),
            "naslov": "Empty",
        });

        res.redirect("/commentPage");
    }
    else
        res.status(401).send("No text entered");
});

module.exports = router;
