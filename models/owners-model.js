const mongoose = require("mongoose");


const ownerSchema = mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    minLength: 3,
  },
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  picture: String,
  gstin: Number,
});

module.exports = mongoose.model("owner", ownerSchema);
