const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes/api-routes"));

app.listen(PORT, () => {
    console.log("listening at http://localhost:" + PORT);
});
