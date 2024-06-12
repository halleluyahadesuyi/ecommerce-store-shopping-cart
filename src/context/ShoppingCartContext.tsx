import { ReactNode, createContext, useContext, useState } from "react";

// Declare data types of ShoppingCartProvider's props i.e. children
type ShoppingCartProviderProps = {
    children: ReactNode
}

// Declare data types of cart items
// Id number leads to other items' details like name and price
// Quantity number can be multiplied with assigned item's price to know the total resulting price
type CartItem = {
    id: number
    quantity: number
}

// Declare data types of ShoppingCartContext functions
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
    // Store state of cart items
    const [ cartItems, setCartItems ] = useState<CartItem[]>([])
    
    // Create functions that will increment, decrement etc. cart items' values
    function getItemQuantity(id: number) {

        // Find the current cart items with the id, where the item.id === id 
        // If that value is true, return quantity, otherwise return a default value of 0
    } 

    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}