import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { Link, useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cartItems,setCartItems,food_list,getTotalCartAmount} = useContext(StoreContext);
  const isCartEmpty = Object.values(cartItems).every((quantity) => quantity === 0);
  const navigate = useNavigate();
  return (
    <>
    <div>
       {isCartEmpty ? (
        <div className='cart-remove'>
          <h2>Your cart is empty</h2>
          <p>Please go the home page for added Item To The Cart</p>
         <Link to='/'><button>Proceed To The Cart</button></Link>
        </div>
      ) : (
        <div className='cart-items'>
          <div className='cart-items-title'>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr className='hr'/>

          {/* Render cart items */}
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <>
                <div
                  className='cart-items-title cart-items-item'
                  key={item._id}
                >
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  {/* <p>{item.title || 'N/A'}</p> */}
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p><button className='btn' onClick={() => {setCartItems({...cartItems,[item._id]: 0,});}}>remove</button></p>
                </div>
                <hr />
                </>
              );
            }
            return null;
          })}
          </div>
      )}
    </div>
     <div className='cart-bottom'>
     <div className='cart-total'>
       <h2>Cart-totals</h2>
       <div>
         <div className='cart-total-details'>
           <p>Subtotal</p>
           <p>${getTotalCartAmount()}</p>
         </div>
         <hr />
         <div className='cart-total-details'>
            <p>Delivery Fees</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
         </div>
         <hr />
         <div className='cart-total-details'>
           <p>Total</p>
           <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
         </div>
         <hr />
         </div>
         <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
     </div>
     <div className='cart-promocode'>
       <div>
        <p>If You Have A Promocode Enter It Here</p>
        <div className='cart-promocode-input'>
          <input type="text" placeholder='Enter Your Promo Code Here' />
          <button>Submit</button>
        </div>
       </div>
     </div>
   </div>
   </>
  )
}

export default Cart
