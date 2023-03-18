import React, { createContext, useState } from 'react'
import { RTUPRODUCTS } from '../Users/UserProducts'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i <RTUPRODUCTS.length + 1; i++){
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for(const item in cartItems) {
            if(cartItems[item] > 0){
                let itemInfo = RTUPRODUCTS.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    const getTotalAmountForItem = (itemId) => {
        const itemInfo = RTUPRODUCTS.find((product) => product.id === itemId);
        const quantity = cartItems[itemId];
        return itemInfo.price * quantity;
      }

    const deleteFromCart = (itemId) => {
        setCartItems((prev) => {
          const updatedCartItems = {...prev};
          if (updatedCartItems[itemId] > 0) {
            updatedCartItems[itemId] = 0;
          }
          return updatedCartItems;
        });
      }

      const clearFromCart = () => {
        setCartItems((prev) => {
          const updatedCartItems = {};
          for (const key in prev) {
            updatedCartItems[key] = 0;
          }
          return updatedCartItems;
        });
      }
      

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalAmountForItem,
        deleteFromCart,
        clearFromCart,
       
    }

//    console.log(cartItems) 
  return <ShopContext.Provider value={contextValue}>
                    {props.children}
                </ShopContext.Provider>
}


