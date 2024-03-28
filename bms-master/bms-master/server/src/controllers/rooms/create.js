const { rooms } = require("@models");
const createRoom = async (req, res) => {
  const { name, capacity, location, equipment, status } = req.body;

  const findRoom = await rooms.findOne({ name });
  if (findRoom) {
    return res.status(400).json({ message: "Room already exists" });
  }

  const imageName = req.file ? req.file.filename : null;
  if (!imageName) {
    return res.status(400).send({ message: "Image file is required." });
  }

  const newRoom = new rooms({
    name,
    image: imageName,
    capacity,
    location,
    equipment: equipment,
    status,
  });

  const savedRoom = await newRoom.save();
  res.status(200).json({
    message: "Room created successfully",
  });
};

module.exports = { createRoom };
