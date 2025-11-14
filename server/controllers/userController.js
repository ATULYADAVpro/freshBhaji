import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
// register user
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({ success: false, message: "Missing Details." })
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: 'User already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ name, password: hashedPassword, email })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

        res.cookie('token', token, {
            httpOnly: true,  // -> Prevent Javascript to access cookie
            secure: process.env.NODE_ENV, // Use secure cookies in production
            sameSite: process.env.NODE_ENV ? 'none' : 'strict', // CSRF protection
            maxAge: 7 * 24 * 60 * 60 * 1000 // cookie expiration time
        })

        return res.json({ success: true, user: { email: user.email, name: user.name } })

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// login 
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ success: false, message: "Missing Details." })
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.json({ success: false, message: 'Invalid email and password' })
        }

        const isMatch = await bcrypt.compare(password, existingUser.password)
        if (!isMatch) {
            return res.json({ success: false, message: 'Invalid email and password' })
        }

         const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

        res.cookie('token', token, {
            httpOnly: true,  // -> Prevent Javascript to access cookie
            secure: process.env.NODE_ENV, // Use secure cookies in production
            sameSite: process.env.NODE_ENV ? 'none' : 'strict', // CSRF protection
            maxAge: 7 * 24 * 60 * 60 * 1000 // cookie expiration time
        })

        return res.json({ success: true, user: { email: existingUser.email, name: existingUser.name } })


    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}