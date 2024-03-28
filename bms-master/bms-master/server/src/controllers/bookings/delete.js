const { bookings } = require("@models");

const deleteBooking = async (req, res) => {
  const { bookingId } = req.body;

  await bookings.deleteOne({ _id: bookingId });

  return res.status(200).json({ message: "record deleted successfully" });
};

module.exports = { deleteBooking };
