const router = require("express").Router()
const categoryRoutes = require("./categoryRoutes");
// const userRoutes = require("./userRoutes");


router.use("/category", categoryRoutes);
// router.use("/user", userRoutes);


module.exports = router;