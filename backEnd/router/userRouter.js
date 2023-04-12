const router = require("express").Router();
const { userControllers } = require("../controllers");


router.get("/list", userControllers.getAllUser);



module.exports = router;