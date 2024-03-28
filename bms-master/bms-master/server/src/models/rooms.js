const mongoose = require("mongoose");

const rooms = mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    capacity: { type: Number, required: true },
    location: { type: String, required: true },
    status: {
      type: String,
      default: "Vacant",
      enum: ["Vacant", "Occupied", "Reserved"],
    },
    equipment: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("rooms", rooms);
