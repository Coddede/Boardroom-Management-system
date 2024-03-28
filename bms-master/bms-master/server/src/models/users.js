const mongoose = require("mongoose");

const { roles } = require("@config");

const users = mongoose.Schema(
  {
    role: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String, required: true, unique: true },
    refreshToken: { type: String },
    passwordResetToken: { type: String },
    password: { type: String, required: true },
    photoURL: { type: String },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("users", users);

module.exports = model;
