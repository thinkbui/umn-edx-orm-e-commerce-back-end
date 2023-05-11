const router = require("express").Router();
const Category = require("../../models/Category");


router.get("/", (req, res) => {
  Category.findAll()
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})


router.get("/:id", (req, res) => {
  Category.findByPk(req.params.id)
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})


router.post("/", (req, res) => {
  Category.create(req.body)
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
})

// router.put("/:id", (req, res) => {
//   Other.update(
//     req.body,
//     {
//       where: {
//         id: req.params.id
//       }
//     }
//   )
//     .then( resp => res.json({ status: "success", payload: resp }))
//     .catch( err => res.json({ msg: err.message }))
// })

// router.delete("/:id", (req, res) => {
//   Other.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then( resp => res.json({ status: "success", payload: resp }))
//   .catch( err => res.json({ msg: err.message }))
// })

module.exports = router