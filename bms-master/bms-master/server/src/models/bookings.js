const mongoose = require("mongoose");
//mongoose.schema properties

const bookings = mongoose.Schema(
  {
    userId: { type: String, required: true },
    roomName: { type: String, required: true },
    status: {
      type: String,
      default: "upcoming",
      enum: ["in progress", "ended", "cancelled", "upcoming"],
    },
    date: { type: Date, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    participants: [
      {
        type: String,
        required: true,
      },
    ],
    zoomLink: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("bookings", bookings);
