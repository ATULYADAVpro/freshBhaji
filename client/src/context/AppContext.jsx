import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";


// --------- 1.create context ------
export const AppContext = createContext();

// ------------- 2.create a provider Component -----
export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_APP_CURRENCY;

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [seller, setSeller] = useState(false)
    const [showUserLogin, setshowUserLogin] = useState(false)
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState({})


    //Fetch All Product
    const fetchProducts = async () => {
        setProducts(dummyProducts)
    }

    //Add Product to Carts
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1
        }

        setCartItems(cartData);
        toast.success("Added to Cart")
    }

    //Update Cart Item Quantity
    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("Cart Updated")
    }

    // Remove Product from Cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0) {
                delete cartData[itemId]
            }
        }

        setCartItems(cartData);
        toast.success("Removed from cart")
    }


    useEffect(() => {
        fetchProducts()
    }, [])


    const value = {
        navigate, user, setUser, seller, setSeller, showUserLogin, setshowUserLogin, currency, products, addToCart, updateCartItem
        , removeFromCart, cartItems, setCartItems
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

// -------- 3.Create a custom hook for convenience ------
export const useAppContext = () => {
    return useContext(AppContext)
}