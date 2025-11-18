# Fresh Bhaji – MERN Stack Grocery Store (Practice Project)

**Fresh Bhaji** is a practice MERN stack e-commerce web application inspired by the GreatStack YouTube tutorial.  
The project helps in learning full-stack development using **MongoDB, Express.js, React, and Node.js** while implementing real-world features like authentication, product listing, cart management, and API integration.

---

## 🚀 Tech Stack

### **Frontend**
- React.js  
- React Hooks: `useState`, `useEffect`, `useMemo`  
- Axios for API communication  
- Context API / Props  
- TailwindCSS / CSS (if used)  
- Environment Variables (`.env`)

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JSON Web Token (JWT)  
- `cookie-parser`  
- Authentication Middleware  
- Backend Environment Variables (`.env`)

---

## 📦 Features

- 🛒 Browse fresh vegetables, fruits, and grocery items  
- 🔍 Dynamic product listing from MongoDB  
- 🔐 User authentication using JWT  
- 🍪 Login session stored using cookies  
- 🛍️ Add to cart functionality  
- 💳 Checkout page  
- 📱 Fully responsive UI  
- 🗂️ Clean folder structure (Frontend + Backend)

---

## 🎯 Learning Goals

This project is created for MERN practice. It helped me understand:

- How to create a complete MERN application  
- Using React Hooks effectively  
- Making API requests using Axios  
- Handling JWT Authentication in MERN  
- Using cookies and middlewares  
- Managing frontend & backend `.env`  
- Connecting MongoDB with Express  
- Component reusability and state management  

---

## 🔧 Installation & Setup

### **1. Clone the Repository**
```bash
git clone <your-repo-url>
cd fresh-bhaji
```
2. Backend Setup
```bash
   cd backend
npm install
npm start
```

Create a .env file:
```base
PORT=4001
DB_URL=
JWT_SECRET = '123456'
NODE_ENV = true

# admin configure
SELLER_EMAIL = 'admin@example.com'
SELLER_PASSWORD = '1234'

# Cloudinary 
CLOUDINARY_CLOUD_NAME = ''
CLOUDINARY_API_KEY = ''
CLOUDINARY_API_SECRET = ''

# STRIPE
STRIPE_PUBLISHABLE_KEY = ''
STRIPE_SECRET_KEY = ''

STRIPE_WEBHOOK_SECRET = ''
```

3. Frontend Setup
```base
cd frontend
npm install
npm run dev
```

Create .env:
```base
VITE_APP_CURRENCY = "₹"
VITE_APP_BACKEND_URL = 'http://localhost:4001'
```

Credits
This project is inspired by GreatStack YouTube Tutorial.
I recreated it for practice and to improve my MERN stack knowledge.
