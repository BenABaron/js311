const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(require("./routes/users"))

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('app is listening on:', port)
})