const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init(
  {
    tag_name: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'Tag'
  }
);

module.exports = Tag;
