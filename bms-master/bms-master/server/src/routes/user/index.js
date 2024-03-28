const router = require("express").Router();
const { verifyjwt, formValidate } = require("@middleware");
const { userInfo } = require("@controllers/user");
const { userInfoSchema } = require("@yupschemas");

const { errorHOC } = require("@utils");

router.post(
  "/user-info",
  verifyjwt,
  formValidate(userInfoSchema),
  errorHOC(userInfo)
);

router.post("/user-update", verifyjwt, errorHOC(userInfo));

module.exports = router;
