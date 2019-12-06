const mongoose = require('mongoose');
var url = require('url');

const User = mongoose.model('uporabniki');
const Comment = mongoose.model('comment');
// const Restaurant = mongoose.model('restaurant');

const createComment = (req, res) => {
    var comment = new Comment({
        comment: req.body.newCommentText.toString(),
        author: req.body.author.toString(),
        date: Date.now()
    });

    comment.save(function (error) {
        if(error) return console.log(error);
        else
            console.log("Shranjeno");
    });

    res.redirect("/commentPage");

};

const updateComment = (req, res) => {

    var id = req.body.komentarID.toString();
    var ObjectId = (mongoose.Types.ObjectId);

    Comment.updateOne({"_id": ObjectId(id)}, {$set:
            { "comment": req.body.newCommentText.toString(),
              "date": Date.now()
            }
    }, function(err, result) {
        if (err)
            console.log(err);
        else {
            console.log(result);
            res.redirect(req.body.returnADR.toString());
        }
    });
};

const readComments = (req, res) => {
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



const deleteComment = (req, res) => {
    var id = req.body.komentarID.toString();
    var ObjectID = mongoose.Types.ObjectId;

    Comment.deleteOne(
        {"_id": ObjectID(id)}, function(error, result){
                if (error) return console.log(error);
                else res.redirect(req.body.returnADR.toString());
            }
    );
};

const getCommentById = (req, res) => {
    Comment.findById(req.params.id).exec((error, comment) => {
        if(!comment)
            return res.status(404).json({
                "error": "Restaurants not found"
            });
        else if (error)
            return res.status(500).json(error);
        else
            res.status(200).json(comment);
    })
};


module.exports = {
    createComment,
    updateComment,
    readComments,
    deleteComment,
    getCommentById
};