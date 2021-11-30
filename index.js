const express = require("express");
const app = express();
app.use(express.static("public"));
app.listen(3400,"0.0.0.0",() => console.log("listening on port 3400"));