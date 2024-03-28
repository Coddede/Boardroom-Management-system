const Messages = {
  serverError: "An Error Occurred",
  invalidRequest: "Invalid Request",
  forbidden: "Forbidden",

  requestSuccessful: "Request successful",
  requestFailed: "Request failed! Try again",
  updateSuccess: "Update successful",
  updateFailed: "Update failed! Try again",

  invalidToken: "Invalid Token",
  invalidRefreshToken: "Invalid Refresh Token",
  tokenRefreshed: "Token Refreshed",
  tokenRefreshFailed: "Token Refresh Failed",
  tokenExpired: "Token Expired",
  refreshTokenExpired: "Refresh Token Expired",

  invalidEmail: "Invalid email",
  emailExists: "Email already exists",
  invalidPassword: "Invalid password",
  incorrectPassword: "Incorrect password",
  passwordRegex:
    "Password must be at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, and can contain special characters",
  invalidCredentials: "Invalid credentials",
  userCreatedSuccessfully: "User created successfully",
  errorCreatingUser: "Error creating user! Try again",
  loginSuccess: "Login successful",
  loginFailed: "Login failed",
  logOutSuccess: "Logged out successfully",
  logOutFailed: "Logout failed",

  userNotFound: "User Not Found",
  passwordResetEmail: "Psasword reset email sent",
  passwordResetFailed: "Password reset failed",
  passwordResetSuccess: "Password reset successful",

  bookingCreated: "Booking created successfully",
  bookingUpdated: "Booking updated successfully",
  bookingDeleted: "Booking deleted successfully",
};

module.exports = Messages;
