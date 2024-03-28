const { forgotPassword } = require("./forgotPassword");
const { resetPassword } = require("./resetPassword");
const { updatePassword } = require("./updatePassword");
const { login } = require("./login");
const { register } = require("./register");
const { logout } = require("./logout");
const { refreshToken } = require("./refreshjwt");

module.exports = {
  forgotPassword,
  resetPassword,
  updatePassword,
  login,
  register,
  logout,
  refreshToken,
};
