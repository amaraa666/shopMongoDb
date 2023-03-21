

const express = require('express');


const router = express.Router();
const users = require('../controllers/user.controller.js');

router.get('/users', users.getAll);
router.get('/users/:_id', users.get);
router.post('/users', users.create);
router.post('/users/login', users.login);
router.put('/users/:_id', users.uptade);
router.delete('/users/:_id', users.delete);


module.exports = router;