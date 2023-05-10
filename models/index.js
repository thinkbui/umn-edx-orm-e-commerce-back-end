const Category = require("./Category");
const Product = require("./Product");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'driver_id'
});

Product.belongsToMany(Tag, {
  through: ProductTag
});

Tag.belongsToMany(Product, {
  through: ProductTag
});

module.exports = { Category, Product, Tag, ProductTag }