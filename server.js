const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003;
const mongoose = require("mongoose");
require("dotenv").config();

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

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

app.use("/api", require("./routes/api-routes"));

app.listen(PORT, () => {
    console.log("listening at http://localhost:" + PORT);
});
