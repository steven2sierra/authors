
const { Author } = require('../models/author.model');

// '/' -> index
module.exports.allAuthors = (req, res) => {
    Author.find({})
        .then(all => res.json(all))
        .catch(err => res.json({message: "Something went wrong...", error: err}))
}

// /new -> create a new author
module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name
    })
        .then(name => res.json(name))
        .catch(err => res.status(400).json(err));
}

// /authors/:_id get an author
module.exports.getAuthor = (req,res) => {
    Author.findOne({_id: req.params._id})
        .then(author => res.json(author))
        .catch(err => res.json(err));
}

// /edit/:_id -> update author by id
module.exports.updateAuthor = (req,res) => {
    // const { name } = req.body;
    Author.findOneAndUpdate({_id: req.params._id }, req.body, {runValidators:true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json(err));
}

// /delete/:_id -> delete author by id
module.exports.deleteAuthor = (req,res) => {
    Author.deleteOne({_id: req.params._id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}