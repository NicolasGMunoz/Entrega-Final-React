import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addCart = (product) =>{
        setCart((prevCart)=> (Array.isArray(prevCart) ? [...prevCart, product] : [product]))
    }


    return <CartContext.Provider value={{ cart, addCart }}>
        {children}
    </CartContext.Provider>
}