const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

module.exports = Book = mongoose.model("Book", userSchema);
