const mongoose = require('mongoose');
const Comments = mongoose.model('comments');

const createComment = (req, res) => {

    let ratingNum = parseInt(req.body.rating.toString());
    var comments = new Comments({
        restaurant: req.body.restaurant.toString(),
        comment: req.body.newCommentText.toString(),
        author: req.body.author.toString(),
        rating: ratingNum,
        date: Date.now()
    });

    comments.save(function (error) {
        if(!comments)
            return res.status(404).json({
                "error": "Comment not found!"
            });
        else if (error)
            return res.status(500).json(error);
        else
            res.status(200);
    });

    res.redirect("/commentPage/" + comments.restaurant._id);

};

const updateComment = (req, res) => {

    var id = req.body.komentarID.toString();
    var ObjectId = (mongoose.Types.ObjectId);

    Comments.updateOne({"_id": ObjectId(id)}, {$set:
            { "comment": req.body.newCommentText.toString(),
              "date": Date.now()
            }
    }, function(err, result) {
        if (err)
            console.log(err);
        else {
            res.redirect(req.body.returnADR.toString());
        }
    });
};

const readComments = (req, res) => {
    Comments.find()
        .populate('author')
        .populate('restaurant')
        .exec(
            (error, comments) => {
                if (!comments) {
                    return res.status(404).json({
                        "error": "Comments not found"
                    });
                } else if (error) {
                    return res.status(500).json(error);
                } else {
                    console.log("Rezultat: " + comments);
                    res.status(200).json(comments);
                }
            }
        );
};



const deleteComment = (req, res) => {

    var id = req.body.komentarID.toString();
    var ObjectID = mongoose.Types.ObjectId;

    Comments.deleteOne(
        {"_id": ObjectID(id)}, function(error, result){
                if (error) return console.log(error);
                else res.redirect(req.body.returnADR.toString());
            }
    );
};

const getCommentById = (req, res) => {
    Comments.findById(req.params.id).exec((error, comment) => {
        if(!comment)
            return res.status(404).json({
                "error": "Comment not found"
            });
        else if (error)
            return res.status(500).json(error);
        else
            res.status(200).json(comment);
    })
};

const getCommentsByRestaurantId = (req, res) => {
    var restaurantID = req.params.id;
    Comments.find({restaurant: restaurantID})
        .populate('author')
        .exec(
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

const getCommentsByUser = (req, res) => {
    var userID = req.params.authorID;

    var ObjectId = (mongoose.Types.ObjectId);

    Comments.find({author: userID})
        .populate('restaurant')
        .exec(
            (error, comments) => {
                if(!comments)
                    return res.status(404).json({
                        "error": "Comments not found"
                    });
                else if (error)
                    return res.status(500).json(error);
                else {
                    return res.status(200).json(comments);
                }
            }
        );
};


module.exports = {
    createComment,
    updateComment,
    readComments,
    deleteComment,
    getCommentById,
    getCommentsByRestaurantId,
    getCommentsByUser
};