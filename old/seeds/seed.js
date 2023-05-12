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

  await sequelize.query("INSERT INTO umn_edx_orm_e_commerce_back_end_db.product_tags (product_id, tag_id, created_at, updated_at) VALUES (1,1, '2023-05-11 03:21:48', '2023-05-11 03:21:48');");
  await sequelize.query("INSERT INTO umn_edx_orm_e_commerce_back_end_db.product_tags (product_id, tag_id, created_at, updated_at) VALUES (1,2, '2023-05-11 03:21:48', '2023-05-11 03:21:48');");
  // await ProductTag.create({
  //   product_id: 1,
  //   tag_id: 1
  // });
  // await ProductTag.create({product_id: "1", tag_id: "2"})

  process.exit(0);
};

seedDatabase();
