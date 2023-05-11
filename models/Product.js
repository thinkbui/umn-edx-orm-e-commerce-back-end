const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      isDecimal: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      isNull: false,
      defaultValue: 10,
      isNumeric: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: false,
    underscored: true,
    modelName: 'Product'
  }
);

module.exports = Product;
