const { users, bookings } = require("@models");
const { messages } = require("@utils");

const userInfo = async (req, res) => {
  const { userId } = req.body;
  const booking = await bookings.find({ userId: userId });
  const user = await users.findOne({ _id: userId });

  const userData = {
    userId: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    role: user.role,
    bookings: booking,
  };

  return res.status(200).json({
    message: messages.requestSuccessful,
    payload: {
      user: userData,
    },
  });
};

module.exports = userInfo;
