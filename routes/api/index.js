const router = require("express").Router()
const categoryRoutes = require("./categoryRoutes");
const productRoutes = require("./productRoutes");


router.use("/category", categoryRoutes);
router.use("/product", productRoutes);


module.exports = router;
