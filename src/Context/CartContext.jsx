import { createContext } from "react";

export const CartContext = createContext();

CartContext.Provider

export default function CartContextProvider({ children }) {
    return <CartContext.Provider value={ {} }>
        {children}
    </CartContext.Provider>
}