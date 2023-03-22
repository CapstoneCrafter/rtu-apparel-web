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

    //addToCart function 
    const addToCart = (itemId) => {
      setCartItems((prev) => {
        const updatedItems = { ...prev };
        if (updatedItems[itemId] < 5) {
          updatedItems[itemId] += 1;
        }
        return updatedItems;
      });
    };
    
    //removeFromCart function 
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    //getTotalCartAmount function wherein you get the total of all items 
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

    //total amount of items + shipping fee
    const getTotalPayment = () => {
      const subtotal = getTotalCartAmount();
      const shippingCost = 30;
      const totalAmount = subtotal + shippingCost;
      return totalAmount;
    };
    
    
    //total amount of specific item
    const getTotalAmountForItem = (itemId) => {
        const itemInfo = RTUPRODUCTS.find((product) => product.id === itemId);
        const quantity = cartItems[itemId];
        return itemInfo.price * quantity;
      }

    //delete specific item
    const deleteFromCart = (itemId) => {
        setCartItems((prev) => {
          const updatedCartItems = {...prev};
          if (updatedCartItems[itemId] > 0) {
            updatedCartItems[itemId] = 0;
          }
          return updatedCartItems;
        });
      }

    //clear all items in cart
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
        getTotalPayment
       
    }

//    console.log(cartItems) 
  return <ShopContext.Provider value={contextValue}>
                    {props.children}
                </ShopContext.Provider>
}


