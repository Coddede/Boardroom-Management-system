const { createRoom } = require("./create");
const { getRooms } = require("./get");
const { deleteRoom } = require("./delete");
const { updateRoom } = require("./update");

module.exports = {
  createRoom,
  getRooms,
  deleteRoom,
  updateRoom,
};
