


const express = require('express');


const router = express.Router();
const products = require('../controllers/product.controller.js');

router.get('/products', products.getAll);
router.get('/products/:_id', products.get);
router.post('/products', products.create);
router.put('/products/:_id', products.uptade);
router.delete('/products/:_id', products.delete);

module.exports = router;
