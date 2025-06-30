const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../models/authSchema');

class authController {
    static async register(req, res) {
        const {name, email, password, confirmPassword} = req.body;
        console.log(11111, name, email, password, confirmPassword);

        if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            return res.status(400).json({
                success: false,
                message: 'Fill in all fields!',
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match!',
            });
        }

        const userExist = await User.findOne({email});
        if (userExist) {
            return res.status(400).json({
                success: false,
                message: 'User already exists!',
            });
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 12);

            const newUser = new User({
                name,
                email,
                password: hashedPassword,
            });

            await newUser.save();

            res.status(200).json({
                success: true,
                message: 'User created successfully!',
                user: newUser,
            });
        } catch (err) {
            console.error('Register error:', err);
            res.status(500).json({
                success: false,
                message: 'Server error',
            });
        }
    }

    static async login(req, res) {
        const { email, password } = req.body;

        if (!email.trim() || !password.trim()) {
            return res.status(400).json({ success: false, message: 'Fill in all fields!' });
        }

        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ success: false, message: 'Incorrect email or password!' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ success: false, message: 'Incorrect email or password!' });
            }

            const token = jwt.sign(
                { id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '7d' }
            );

            res.status(200).json({
                success: true,
                message: 'Login success!',
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                },
                token
            });
        } catch (error) {
            console.log('Login error:', error);
            res.status(500).json({
                success: false,
                message: 'Server error',
            });
        }
    }

}

module.exports = authController;
