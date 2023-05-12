const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include:[{model: Product}]})
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {
    include: [{ model: Product }],
  })
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    req.body,
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then( resp => res.json({ status: "success", payload: resp }))
    .catch( err => res.json({ msg: err.message }))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then( resp => res.json({ status: "success", payload: resp }))
  .catch( err => res.json({ msg: err.message }))
});

module.exports = router;
