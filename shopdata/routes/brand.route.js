

const express = require('express');

const route = express.Router();
const brands = require('../controllers/Brand.controller.js');

route.get('/brands' , brands.getAll);
route.get('/brands/:_id' , brands.get);
route.post('/brands' , brands.create);
route.put('/category/:_id' , brands.uptade);
route.delete('/brands/:_id' , brands.delete);

module.exports = route;