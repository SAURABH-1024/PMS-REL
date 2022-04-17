const express = require("express");
const app = express();
const PORT =  8080;
const bodyParser = require("body-parser");




//specifying the system to convert output into json
app.use(express.json());

//linking the router files to make routes
// app.use(require("./Controllers/CalendarController"))

app.use('/api/calendar', require('./Controllers/CalendarController'));

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`req handled successfully at ${PORT}`);
});
