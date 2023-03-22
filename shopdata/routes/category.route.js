

const express = require('express');

const route = express.Router();
const categories = require('../controllers/category.controller.js');

route.get('/categories' , categories.getAll);
route.get('/categories/:_id' , categories.get);
route.post('/categories' , categories.create);
route.put('/category/:_id' , categories.uptade);
route.delete('/categories/:_id' , categories.delete);

module.exports = route;