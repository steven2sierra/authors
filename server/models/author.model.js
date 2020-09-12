const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Author's name must be three characters or longer"]
}
}, {timestamps: true});

module.exports.Author = mongoose.model('Author', AuthorSchema);