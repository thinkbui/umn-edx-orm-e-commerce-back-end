const sequelize = require('../config/connection');
const { Category, Product, Tag, ProductTag } = require('../models');

const categoryData = require('./categoryData.json');
const productData = require('./productData.json');
const tagData = require('./tagData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const categories = await Category.bulkCreate(categoryData);

  for (const product of productData) {
    await Product.create({
      ...product,
      category_id: categories[Math.floor(Math.random() * categories.length)].id,
    });
  }

  for (const tag of tagData) {
    await Tag.create(tag);
  }

  // await ProductTag.create({
  //   product_id: 1,
  //   tag_id: 1
  // });
  // await ProductTag.create({product_id: "1", tag_id: "2"})

  process.exit(0);
};

seedDatabase();
