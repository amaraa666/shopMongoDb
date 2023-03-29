

const express = require('express');
const route = express.Router();

const auth = require('../middleware/auth');

const Order = require('../controllers/order.controller.js');

route.get("/orders", auth, Order.getAll);
route.get("/orders:_id", auth, Order.get);
route.put("/orders/:_id", auth, Order.update);
route.post("/orders", auth, Order.create);
route.delete("/orders/:_id", auth, Order.delete);


module.exports = route;