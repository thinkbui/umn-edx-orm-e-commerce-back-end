// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unigue: false,
  },
  foreignKey: 'product_id',
  as: 'product_tags',
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: 'tag_id',
  as: 'tag_products',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
