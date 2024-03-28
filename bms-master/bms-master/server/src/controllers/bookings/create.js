const { bookings } = require("@models");
const { messages } = require("@utils");

// Function to check for overlapping bookings
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

// Controller function to create a booking
const createBooking = async (req, res) => {
  const { userId, roomName, date, startTime, endTime, participants, zoomLink } =
    req.body;
  //check if date is in the past
  if (new Date(date) < new Date()) {
    return res.status(400).json({ message: "Date cannot be in the past" });
  }
  //check if start time is in the past
  if (new Date(date + " " + startTime) < new Date()) {
    return res
      .status(400)
      .json({ message: "Start time cannot be in the past" });
  }
  //check if end time is less than start time
  if (new Date(date + " " + endTime) < new Date(date + " " + startTime)) {
    return res
      .status(400)
      .json({ message: "End time cannot be less than start time" });
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
    return res
      .status(400)
      .json({ message: "Booking already exists during this time" });
  }
  const emailRegex = /^\S+@\S+\.\S+$/;

  const participantsArray = participants
    .split(",")
    //validate email
    .map((email) => {
      if (!emailRegex.test(email)) {
        return res.status(400).send("Invalid email");
      }
      return email.trim();
    });

  // No overlap, proceed to create the booking
  const booking = new bookings({
    userId,
    roomName,
    date: new Date(date),
    startTime: new Date(starttime),
    endTime: new Date(endtime),
    participants: participantsArray,
    zoomLink,
  });

  await booking.save();
  return res.status(200).json({ message: messages.bookingCreated });
};

module.exports = { createBooking };
