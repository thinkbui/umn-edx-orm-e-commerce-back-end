const router = require("express").Router();
const Product = require("../../models/Product");


router.get("/", (req, res) => {
  Product.findAll()
    .then( resp => res.status(200).json({ status: "success", payload: resp }))
    .catch( err => res.status(200).json({ msg: err.message }))
})


router.get("/:id", (req, res) => {
  Product.findByPk(req.params.id)
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})


router.post("/", (req, res) => {
  Product.create(req.body)
    .then( resp => res.status(200).json({ status: "success", payload: resp }))
    .catch( err => res.status(200).json({ msg: err.message }))
})

router.put("/:id", (req, res) => {
  Product.update(
    req.body,
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then( resp => res.status(200).json({ status: "success", payload: resp }))
    .catch( err => res.status(200).json({ msg: err.message }))
})

router.delete("/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
  .then( resp => res.status(200).json({ status: "success", payload: resp }))
  .catch( err => res.status(200).json({ msg: err.message }))
})

module.exports = router
