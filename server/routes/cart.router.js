const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {addCart, getCarts, deleteCart} = require('../controller/CartController');

router.post('/addCart/:id',auth,  addCart);
router.get('/getAllCart', auth, getCarts);
router.delete('/deleteCart/:id', auth, deleteCart)

module.exports = router;
