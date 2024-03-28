const yup = require("yup");
const { messages } = require("@utils");

const passwordRegexp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
const phoneRegexp = /^(2547|2541)\d{8}$/;

const regSchema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(passwordRegexp, messages.passwordRegex)
    .required(),
});

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const userInfoSchema = yup.object().shape({
  userId: yup.string().required(),
});

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
});

const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .matches(passwordRegexp, messages.passwordRegex)
    .required(),
});

const updatePasswordSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .matches(passwordRegexp, `Old ${messages.passwordRegex}`)
    .required(),
  newPassword: yup
    .string()
    .matches(passwordRegexp, `New ${messages.passwordRegex}`)
    .required(),
});

const createBookingSchema = yup.object().shape({
  userId: yup.string().required(),
  roomName: yup.string().required(),
  date: yup.date().required(),
  startTime: yup.string().required(),
  endTime: yup.string().required(),
  participants: yup.string().required(),
  zoomLink: yup.string(),
});

const createRoomSchema = yup.object().shape({
  name: yup.string().required(),
  capacity: yup.number().required(),
  location: yup.string().required(),
  equipment: yup.string(),
});

module.exports = {
  regSchema,
  loginSchema,
  userInfoSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  updatePasswordSchema,
  createBookingSchema,
  createRoomSchema,
};
