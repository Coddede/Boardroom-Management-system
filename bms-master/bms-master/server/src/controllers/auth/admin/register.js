const { users } = require("@models");
const bcrypt = require("bcrypt");
const { messages } = require("@utils");
const { roles } = require("@config");

const adminRegister = async (req, res) => {
  const { firstname, lastname, email, password: plainPassword } = req.body;

  const getUser = await users.findOne({ email });
  if (getUser) {
    return res.status(400).json({ message: messages.emailExists });
  }
  const password = await bcrypt.hash(plainPassword, 10);
  await users.create({
    role: "admin",
    firstname,
    lastname,
    email,
    password,
  });
  return res.status(200).json({ message: messages.userCreatedSuccessfully });
};

module.exports = { adminRegister };
