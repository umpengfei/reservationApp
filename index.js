const express = require("express");
const app = express();
const checker = require("./checker");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());

require("./routes")(app);

// the api of this app
module.exports = app;

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Listening on port ${port}"));
