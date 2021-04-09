const express = require("express");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.use(require("./routes/items"))


const port = 4000;
app.listen(port, () => {
  console.log("Listening to the port");
});