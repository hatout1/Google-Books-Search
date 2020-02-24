const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.get("/", (req, res) => {
    res.send("<h1>Welcome</h1>");
});

router.get("/all", (req, res) => {
    Book.find()
        .then(book => res.send(book))
        .catch(err => console.error(err));
});

router.post("/new", (req, res) => {
    Book.create({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
    })
        .then(book => res.send(book))
        .catch(err => console.error(err));
});

router.get("/find/:id", (req, res) => {
    Book.findById({
        _id: req.params.id
    })
        .then(singleRecord => {
            res.send(singleRecord);
        })
        .catch(err => console.error(err));
});

module.exports = router;
