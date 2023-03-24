

const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();
const users = require('../controllers/user.controller.js');

router.post('/users/login', users.login);
router.post('/users/register', users.register);
router.get('/users', auth, users.getAll);
router.get('/users/:_id', auth, users.get);
router.post('/users', auth, users.create);
router.put('/users/:_id', auth, users.uptade);
router.delete('/users/:_id', auth, users.delete);

module.exports = router;