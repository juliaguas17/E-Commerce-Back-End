const { Category } = require('../models');

const categoryData = [
  {
    id: 1,
    category_name: 'Shirts',
  },
  {
    id: 2,
    category_name: 'Shorts',
  },
  {
    id: 3,
    category_name: 'Music',
  },
  {
    id: 4,
    category_name: 'Hats',
  },
  {
    id: 5,
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
