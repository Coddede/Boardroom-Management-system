const { rooms } = require("@models");

const deleteRoom = async (req, res) => {
  const { name } = req.body;
  await rooms.deleteOne({ name });

  return res.status(200).json({ message: "Room deleted successfully" });
};

module.exports = { deleteRoom };
