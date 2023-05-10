const sequelize = require('../config/connection');
const { Category, Product } = require('../models');

const categoryData = require('./categoryData.json');
const productData = require('./productData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const categories = await Category.bulkCreate(categoryData);

  for (const product of productData) {
    await Product.create({
      ...product,
      category_id: categories[Math.floor(Math.random() * categories.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
