const express = require("express");
const app = express();

// 앱 세팅
app.set("views", ".src/views");
app.set("view engine", "ejs");

const server = app.listen(3000, () => {
    console.log("Start Server : localhost:3000");
});

app.get("/", (req, res) => {

})