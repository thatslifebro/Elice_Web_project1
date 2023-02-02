const Users = require('../schemas/user-schema');
const Categorys = require('../schemas/category-schema');
const Products = require('../schemas/product-schema');
const Orders = require('../schemas/order-schema');

const mongoose = require('mongoose');

exports.User = mongoose.model('User', Users);
exports.Category = mongoose.model('Category', Categorys);
exports.Product = mongoose.model('Product', Products);
exports.Order = mongoose.model('Order', Orders);
exports.OrderItem = mongoose.model('OrderItem', OrderItems);
