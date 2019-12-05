const mongoose = require('mongoose');
var url = require('url');

const User = mongoose.model('uporabniki');
const Comment = mongoose.model('comment');
// const Restaurant = mongoose.model('restaurant');

const updateComment = (req, res) => {

    console.log(req.body.commentID.toString());
    console.log("tukaj");

    var id = req.body.commentID.toString();
    var ObjectId = (mongoose.Types.ObjectId);

    console.log("Urejanje komentarja: " + id);

    Comment.updateOne({"_id": ObjectId(id)}, {$set:
            { "comment": req.body.newCommentText.toString() }
    }, function(err, result) {
        if (err)
            console.log(err);
        else {
            console.log(result);
            res.redirect(req.body.returnADR.toString());
        }
    });
};

const getComments = (req, res) => {
    Comment.find().exec(
        (error, comments) => {
            if (!comments) {
                return res.status(404).json({
                   "error": "Comments not found"
                });
            } else if (error) {
                return res.status(500).json(error);
            } else
                res.status(200).json(comments);
        }
    );
};

const postComment = (req, res) => {
    var comment = new Comment({
        comment: req.body.newCommentText.toString(),
        author: "5ddf2795be59539a039167f2",
        date: Date.now()
    });

    comment.save(function (error) {
        if(error) return console.log(error);
        else
            console.log("Shranjeno");
    });

    res.redirect("/commentPage");

};



module.exports = {
    getComments,
    updateComment,
    postComment
};