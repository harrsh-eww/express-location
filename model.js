const mongoose = require("mongoose");

const { Schema } = mongoose;

const locationSchema = new Schema({
  latitude: {
    type: "String",
    require: false,
  },
  longitude: {
    type: "String",
    require: false,
  },
  data: {
    type: "String",
    require: false,
  },
});

const location = mongoose.model("Location", locationSchema);

module.exports = location;
