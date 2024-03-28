const { rooms, bookings } = require("@models");

const getRooms = async (req, res) => {
  const allRooms = await rooms.find().lean();
  const allBookings = await bookings.find();

  allRooms.forEach((room) => {
    room.bookings = allBookings.filter(
      (booking) => booking.roomName == room.name
    );
  });
  res.status(200).json({
    message: "Rooms fetched successfully",
    payload: allRooms,
  });
};
module.exports = { getRooms };
