require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users } = require("@models");
const { messages } = require("@utils");
const { setCookies, generateTokens } = require("@utils");

const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await users.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: messages.invalidCredentials });
  }
  const compare = await bcrypt.compare(password, user.password);
  if (!compare) {
    return res.status(400).json({ message: messages.invalidCredentials });
  }
  const tokens = generateTokens(user);
  const userUpdate = await users.updateOne(
    { email },
    { $set: { refreshToken: tokens.refreshToken } }
  );
  if (userUpdate.nModified === 0) {
    return res.status(400).json({ message: messages.adminLoginFailed });
  }
  setCookies(res, tokens);
  return res.status(200).json({
    message: messages.adminLoginSuccess,
    payload: {
      userId: user._id,
      role: user.role,
      status: user.status,
    },
  });
};

module.exports = { adminLogin };
