const express = require('express');
const router = express.Router();
const {addProduct, getProducts} = require('../controller/ProductController');
const auth = require('../middleware/authMiddleware');

router.post('/addProduct', addProduct);
router.get('/getProducts', getProducts);

module.exports = router;
