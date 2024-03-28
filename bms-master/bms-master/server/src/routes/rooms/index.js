const router = require("express").Router();
const { verifyjwt, formValidate, fileUpload } = require("@middleware");
const { errorHOC } = require("@utils");

const { createRoomSchema } = require("@yupschemas");
const {
  createRoom,
  getRooms,
  deleteRoom,
  updateRoom,
} = require("@controllers/rooms");

router.get("/get-rooms", verifyjwt, errorHOC(getRooms));

router.post(
  "/create",
  verifyjwt,
  fileUpload.single("image"), // Include multer middleware here for handling image uploads
  formValidate(createRoomSchema),
  errorHOC(createRoom)
);

router.post(
  "/update",
  verifyjwt,
  fileUpload.single("image"), // Include multer middleware here for handling image uploads
  formValidate(createRoomSchema),
  errorHOC(updateRoom)
);

router.post("/delete", verifyjwt, errorHOC(deleteRoom));
module.exports = router;
