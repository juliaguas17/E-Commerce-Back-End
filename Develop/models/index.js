// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})
// Products belongToMany Tags (through ProductTag)
// Allow products to have multiple tags
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'productTag_tag',
  foreignKey: 'product_id'
})
// Tags belongToMany Products (through ProductTag)
// Allow tags to have many products
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'productTag_product',
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
