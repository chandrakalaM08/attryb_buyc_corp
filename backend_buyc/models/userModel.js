const mongoose = require("mongoose");

const userModelSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
});

const UserModel = mongoose.model("user", userModelSchema);

module.exports = { UserModel };
