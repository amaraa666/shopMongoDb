

const express = require('express');

const route = express.Router();
const brands = require('../controllers/Brand.controller.js');

route.get('/brands', brands.getAll);
route.get('/brands/:_id', brands.get);
route.post('/brands', brands.create);
route.put('/brands/:_id', brands.update);
route.delete('/brands/:_id', brands.delete);

module.exports = route;