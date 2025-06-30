const User = require('../models/authSchema');

class CartController {
    static async addCart(req, res) {
        const id = req.userId;
        const prod = req.body;

        try {
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({
                    message: 'User not found',
                    success: false,
                });
            }

            if (!user.cart) {
                user.cart = [];
            }

            user.cart.push(prod);

            await user.save();

            return res.status(200).json({
                message: 'Product added to cart',
                success: true,
                cart: user.cart,
            });
        } catch (err) {
            console.error('Error adding to cart:', err);
            return res.status(500).json({
                message: 'Server error',
                success: false,
            });
        }
    }

    static async getCarts(req, res) {
        try {
            const id = req.userId;

            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }

            res.status(200).json({
                success: true,
                cart: user.cart || [],
            });

        } catch (error) {
            console.error("Error fetching cart:", error);
            res.status(500).json({
                success: false,
                message: "Server error while fetching cart",
            });
        }
    }

    static async deleteCart(req, res) {
        const userId = req.userId;
        const id = req.body;
        console.log(id);
    }

}

module.exports = CartController;
