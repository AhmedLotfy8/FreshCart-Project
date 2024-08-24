import axios from "axios";
import { createContext, useState } from "react";

export const CartContext = createContext();

const token = localStorage.getItem('token')

const headers = {
    token
}

async function getUserCart() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
        headers
    })
        .then(data => data)
        .catch(err => err)
}

async function addItemToCart(pId) {
    return axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
        productId: pId
    }, {
        headers
    })
        .then(data => data)
        .catch(err => err)
}

export default function CartContextProvider({ children }) {
    const [cartItemsNumber, setCartItemsNumber] = useState(0)
    return <CartContext.Provider value={{ cartItemsNumber, setCartItemsNumber, getUserCart , addItemToCart }}>
        {children}
    </CartContext.Provider>
}