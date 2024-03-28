const DBConn = require("./dbConn");

const allowedOrigins = ["http://localhost:3000", "https://bms-tau.vercel.app"];

const roles = {
  admin: "a048f5",
  user: "03e4ab",
};

module.exports = {
  DBConn,
  allowedOrigins,
  roles,
};
