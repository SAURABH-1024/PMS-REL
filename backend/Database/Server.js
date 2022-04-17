const mongoose = require("mongoose");
// const DB = "mongodb+srv://saurabh:atlas@pms.6ntze.mongodb.net/patientDB1?retryWrites=true&w=majority"
const DB = "mongodb+srv://saurabh:atlas@pms.6ntze.mongodb.net/random?retryWrites=true&w=majority"
//const DB = "mongodb://localhost:27017/PMSDB"


//const DB = "mongodb://localhost:27017/PMSDB"


mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
try {
  console.log("db created successfully");
} catch (error) {
  console.log("error");
}