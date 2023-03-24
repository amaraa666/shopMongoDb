

const express = require('express');
const route = express.Router();

const Order = require('../controllers/order.controller.js');

route.get("/orders", Order.getAll);
route.get("/orders", Order.get);
route.put("/orders", Order.update);
route.post("/orders", Order.create);
route.delete("/orders", Order.delete);


module.exports = route;