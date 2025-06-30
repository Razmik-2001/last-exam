const Product = require('../models/productsSchema');
const User = require('../models/authSchema');

class ProductController {
    static async addProduct(req, res) {
        const { product, avatar, price } = req.body;

        try {
            const newProduct = new Product({
                product,
                avatar,
                price: Number(price),
            });

            await newProduct.save();

            res.status(200).send({
                success: true,
                message: 'Product Added',
                product: newProduct,
            });

        } catch (err) {
            console.log('error adding product', err);
            res.status(500).send({ success: false, message: 'Error adding product' });
        }
    }

    static async getProducts(req, res) {
        try{
            const products = await Product.find({});
            res.status(200).json({
                success: true,
                allProducts: products,
                message: 'Successfully retrieved products',
            })
        }catch(err){
            console.log('error getProducts', err);
            res.status(500).send({ success: false, message: 'Error getProducts' });
        }
    }
}

module.exports = ProductController;
