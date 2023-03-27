

const express = require('express');
const route = express.Router();

const auth = require('../middleware/auth');

const order = require('../controllers/order.controller.js');

route.get("/orders", auth,  order.getAll);
route.get("/orders/:_id",auth , order.get);
route.put("/orders/:_id",auth ,  order.update);
route.post("/orders",auth ,  order.create);
route.delete("/orders/:_id",auth , order.delete);


module.exports = route;