const { rooms } = require("@models");

const updateRoom = async (req, res) => {
  const { oldName, name, capacity, location, equipment } = req.body;

  const imageName = req.file ? req.file.filename : null;

  const findRoom = await rooms.findOne({ name: oldName });
  if (!findRoom) {
    return res.status(400).json({ message: "Room does not exist" });
  }

  const update = {
    name,
    image: imageName || findRoom.image,
    capacity,
    location,
    equipment,
  };

  await rooms.updateOne(
    { name: oldName },
    {
      $set: update,
    }
  );

  return res.status(200).json({ message: "Update successful" });
};

module.exports = { updateRoom };
