
const express = require('express');
const route = express.Router();
const orderDet = require('../controllers/orderDetail.controller.js');
const auth = require('../middleware/auth');

route.get('/orderDet', auth, orderDet.getAll);
route.get('/orderDet/:_id', auth, orderDet.get);
route.post('/orderDet', auth, orderDet.create);
route.put('/orderDet/:_id', auth, orderDet.update);
route.delete('/orderDet/:_id', auth, orderDet.delete);

module.exports = route;


