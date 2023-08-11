import { arrayUnion, arrayRemove, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { createContext, useState } from "react";
import { app } from "../index";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const db = getFirestore(app);
    const [cart, setCart] = useState({ buyer: { name: "", lastname:"", phone: "", email: "", adress: "" }, items: [], total: 0 })

    const addCteInfo = (cteInfo) =>{
        setCart((prev) => ({
            ...prev,
            buyer: cteInfo,
        }));
    }

    const removeItemCart = (product) => {
        const userId = "Loen1Eaa0lEUhtccT7mo";
        const cartRef = doc(db, "cart", userId);

        updateDoc(cartRef, {
            items: arrayRemove(product),
            total: cart.total - product.price
        }).then(() => {
            setCart((prevCart) => ({
                ...prevCart,
                items: prevCart.items.filter((item) =>item.id !== product.id),
                total: prevCart.total - product.price,
            }));
        }).catch((error) =>{
            console.error(error);
        });
    }


    const addCart = (product) => {
        const userId = "Loen1Eaa0lEUhtccT7mo";

        const cartRef = doc(db, "cart", userId);
        getDoc(cartRef).then((doc) => {
            if (doc.exists()) {
                updateDoc(cartRef, {
                    items: arrayUnion(product),
                    total: cart.total + product.price
                }).then(() =>{
                    setCart((prev) => ({
                        ...prev,
                        items: [...prev.items, product],
                        total: prev.total + product.price
                    }))
                })
                .catch((error) =>{
                    console.error("Error, producto no agregado al carrito", error)
                })
            }else{
                setDoc(cartRef,{
                    buyer: {
                        name: "Homero",
                        lastname:"Simpson",
                        phone: 7777766666,
                        email: "homero@simpson.com",
                        adress: "Av Siempre Viva 742, Springfield"
                    },
                    items: [product],
                    total: product.price
                }).then(() =>{
                    console.log("carrito ok");
                    setCart({
                        buyer: {
                            name: "Homero",
                            lastname: "Simpson",
                            phone: 7777766666,
                            email: "homero@simpson.com",
                            adress: "Av Siempre Viva 742, Springfield"
                        },
                        items: [product],
                        total: product.price
                    })
                }).catch((error) =>{console.error( error)})
            }
        })
    }


    return <CartContext.Provider value={{ cart, addCart, removeItemCart, addCteInfo }}>
        {children}
    </CartContext.Provider>
}