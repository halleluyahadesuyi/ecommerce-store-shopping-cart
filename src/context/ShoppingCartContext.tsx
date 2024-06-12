import { ReactNode, createContext, useContext, useState } from "react";

// declare data types of ShoppingCartProvider's props i.e. children
type ShoppingCartProviderProps = {
    children: ReactNode
}

// declare data types of cart items
// id number leads to other items' details like name and price
// quantity number can be multiplied with assigned item's price to know the total resulting price
type CartItem = {
    id: number
    quantity: number
}

// declare data types of ShoppingCartContext functions
// "addToCart" is not added as part of the functions because "increaseCartQuantity" does the same job
type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    // store state of cart items
    const [ cartItems, setCartItems ] = useState<CartItem[]>([])
    
    // create functions that will increment, decrement etc. cart items

    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}