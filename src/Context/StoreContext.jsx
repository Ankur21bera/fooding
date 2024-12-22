import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {


    const[cartItems,setCartItems] = useState({});


    const addToCart = (itemId) => {
        setCartItems((prev) => {
          const currentQuantity = prev[itemId] || 0;
      
          if (currentQuantity < 5) {
            return { ...prev, [itemId]: currentQuantity + 1 };
          } else {
            alert(`only 5 quantity are allowed in the cart!`);
            return prev; 
          }
        });

    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
   
    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for(const item in cartItems) {
        if(cartItems[item]>0) {
          let itemInfo = food_list.find((product)=> product._id === item);
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
      return totalAmount;
    }

    const contextValue = {
       food_list,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
       getTotalCartAmount
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider