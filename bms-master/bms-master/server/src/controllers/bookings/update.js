const mongoose = require("mongoose");
const { bookings } = require("@models");

const isBookingOverlap = async (roomName, startTime, endTime) => {
  const overlapBooking = await bookings.findOne({
    roomName,
    $or: [
      { startTime: { $lte: endTime }, endTime: { $gte: startTime } }, // overlaps
    ],
  });
  return !!overlapBooking;
};

const createDateObject = (date, time) => {
  const [hours, minutes] = time.split(":").map(Number);
  const dateTime = new Date(date);
  dateTime.setHours(hours, minutes);
  return dateTime;
};

const updateBooking = async (req, res) => {
  const {
    bookingId,
    roomName,
    date,
    startTime,
    endTime,
    participants,
    zoomLink,
  } = req.body;
  const booking = await bookings.findOne({ _id: bookingId });
  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }

  const starttime = createDateObject(date, startTime);
  let endtime = createDateObject(date, endTime);

  // Now use the adjusted startTime and endTime for your booking logic

  const overlap = await isBookingOverlap(
    roomName,
    new Date(starttime),
    new Date(endtime)
  );

  if (overlap) {
    return res.status(400).send("Booking times overlap with another booking.");
  }

  const participantsArray = participants
    .split(",")
    .map((email) => email.trim());

  const updatedBooking = await bookings.findOneAndUpdate(
    { _id: bookingId },
    {
      roomName,
      date,
      startTime: starttime,
      endTime: endtime,
      participants: participantsArray,
      zoomLink,
    },
    { new: true }
  );
  res
    .status(200)
    .json({ message: "Booking updated successfully", updatedBooking });
};

module.exports = { updateBooking };
