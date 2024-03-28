const router = require("express").Router();
const { verifyjwt, formValidate } = require("@middleware");

const {
  createBooking,
  deleteBooking,
  updateBooking,
} = require("@controllers/bookings");
const { createBookingSchema } = require("@yupschemas");

const { errorHOC } = require("@utils");

router.post(
  "/create",
  verifyjwt,
  formValidate(createBookingSchema),
  errorHOC(createBooking)
);

router.post(
  "/update",
  verifyjwt,
  // formValidate(updateBookingSchema),
  errorHOC(updateBooking)
);
router.post(
  "/delete",
  // verifyjwt,
  // formValidate(deleteBookingSchema),
  errorHOC(deleteBooking)
);

module.exports = router;
