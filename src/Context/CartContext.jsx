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

async function updateItemCount(id, count) {
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/` + id, {
        count
    }, {
        headers
    })
        .then(data => data)
        .catch(err => err)
}

async function deleteItem(id) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/` + id, {
        headers
    })
        .then(data => data)
        .catch(err => err)
}

async function clearUserCart() {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers
    })
        .then(data => data)
        .catch(err => err)
}

async function checkoutSession(cartId, shippingAddress) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`, {

        "shippingAddress": shippingAddress,
    },

        {
            headers
        })

        .then(data => data)
        .catch(err => err)
}

export default function CartContextProvider({ children }) {
    const [cartItemsNumber, setCartItemsNumber] = useState(0)
    return <CartContext.Provider value={{ cartItemsNumber, setCartItemsNumber, getUserCart, addItemToCart, updateItemCount, deleteItem, clearUserCart, checkoutSession }}>
        {children}
    </CartContext.Provider>
}