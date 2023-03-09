const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://harrsh:harrsh2124@harrsh.dfqlakn.mongodb.net/?retryWrites=true&w=majority"
  );

  console.log("Connected to MongoDB!!");
};

module.exports = connectDB;
