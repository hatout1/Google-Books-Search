const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003;
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
    .connect(process.env.mongodb_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log("Error: ", err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes/api-routes"));

app.listen(PORT, () => {
    console.log("listening at http://localhost:" + PORT);
});
