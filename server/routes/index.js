const express = require('express');
const router = express.Router();
const authRouter = require('./auth.router');
const productRouter = require('./product.router');
const cartRouter = require('./cart.router');

router.use('/api', authRouter);
router.use('/product', productRouter);
router.use('/cart', cartRouter);

module.exports = router;
