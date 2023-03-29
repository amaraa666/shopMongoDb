


const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();
const products = require('../controllers/product.controller.js');

router.get('/products', products.getAll);
router.get('/products/:_id', products.get);
router.post('/products', auth, products.create);
router.put('/products/:_id', auth, products.uptade);
router.delete('/products/:_id', auth, products.delete);

module.exports = router;
