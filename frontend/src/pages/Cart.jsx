import React from "react";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../style/cart.css";
import { useDispatch } from "react-redux";
import { removeCart,incQuantity,decQuantity,getCartTotal } from "../CartSlice";
import {makePaymentCart} from "../makePayment";
function Cart() {
  const dispatch = useDispatch();
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  const removeitem = (i) => {
    console.log(i);
    dispatch(removeCart(i));
  };
  return (
    <>
      <NavBar />
      <article className="mt-20 cart-container">
  {cart.map((item) => (
    <div className="cart_box" key={item._id}>
      <div className="cart_img">
        <img
          
          src={item.imgurl}
          alt={item.title}
        />
        <p className="mt-6 text-base">{item.title}</p>
      </div>
      <div className="quantity-buttons">
        <button onClick={() => {dispatch(incQuantity(item._id))}}> + </button>
        <button>{item.quantity}</button>
        <button onClick={() => {dispatch(decQuantity(item._id))}}> - </button>
      </div>
      <div className="cart-details">
        
        <span className="">Rs:{item.price}</span>
        <button className="mt-3"
          onClick={() => {
            removeitem(item._id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  ))}
  <div className="total">
    <span className="total_text">Total Price of your Cart</span>
    <span>Rs: {totalPrice}</span>
    <button className='bg-darkred w-20 rounded-lg text-white px-4 py-1' onClick={() => {makePaymentCart(cart)}}>
      Buy
    </button>
  </div>
</article>

    </>
  );
}

export default Cart;
