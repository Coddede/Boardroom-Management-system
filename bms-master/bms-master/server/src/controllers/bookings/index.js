const { createBooking } = require("./create");
const { deleteBooking } = require("./delete");
const { updateBooking } = require("./update");

module.exports = {
  createBooking,
  updateBooking,
  deleteBooking,
};
