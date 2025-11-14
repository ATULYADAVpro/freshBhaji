import jwt from 'jsonwebtoken'

export const sellerLogin = async (req, res) => {
    const { email, password } = req.body;
    if (password === process.env.SELLER_PASSWORD && email === process.env.SELLER_EMAIL) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' })

        res.cookie('sellerToken', token, {
            httpOnly: true,  // -> Prevent Javascript to access cookie
            secure: process.env.NODE_ENV, // Use secure cookies in production
            sameSite: process.env.NODE_ENV ? 'none' : 'strict', // CSRF protection
            maxAge: 7 * 24 * 60 * 60 * 1000 // cookie expiration time
        })

        return res.json({ success: true, message: 'Logged In' })
    } else {
        return res.json({ success: false, message: 'Invalid Credentials' })
    }
}

// check auth
export const isAuth = async (req, res) => {
    try {
        return res.json({ success: true });
    } catch (error) {
        console.error('Auth check error:', error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};

// seller logout 
export const logout = async (req, res) => {
    try {
        res.clearCookie('sellerToken', {
            httpOnly: true,  // -> Prevent Javascript to access cookie
            secure: process.env.NODE_ENV, // Use secure cookies in production
            sameSite: process.env.NODE_ENV ? 'none' : 'strict', // CSRF protection
        })

        return res.json({ success: true, message: 'Logged Out' })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}