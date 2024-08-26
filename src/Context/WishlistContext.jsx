import axios from "axios";
import { createContext, useState } from "react";

export const WishlistContext = createContext();

const token = localStorage.getItem('token')

const headers = {
    token
}

async function getUserWishlist() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
        headers
    })
        .then(data => data)
        .catch(err => err)
}

async function addItemToWishlist(pId) {
    return axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
        productId: pId
    }, {
        headers
    })
        .then(data => data)
        .catch(err => err)
}

async function removeItem(id) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/` + id, {
        headers
    })
        .then(data => data)
        .catch(err => err)
}

export default function WishlistContextProvider({ children }) {
    return <WishlistContext.Provider value={{ getUserWishlist, addItemToWishlist, removeItem }}>
        {children}
    </WishlistContext.Provider>
}