//auth controllers
const {
  updatePassword,
  login,
  register,
  resetPassword,
  forgotPassword,
  refreshToken,
  logout,
} = require("../auth");
const userInfo = require("./userInfo");

module.exports = {
  updatePassword,
  login,
  register,
  resetPassword,
  forgotPassword,
  refreshToken,
  logout,
  userInfo,
};
