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
      <article className="mt-20">
        {cart.map((item) => (
          <div className="cart_box" key={item._id}>
            <div className="cart_img">
              <img
                style={{ height: "50px", width: "100px", borderRadius: "7px" }}
                src={`http://localhost:5555/${item.image}`}
                alt={item.title}
              />
              <p>{item.title}</p>
            </div>
            <div>
              <button  onClick={()=>{dispatch(incQuantity(item._id))}}> + </button>
              <button>{item.quantity}</button>
              <button onClick={()=>{dispatch(decQuantity(item._id))}}> - </button>
            </div>
            <div>
              <span style={{background:"none"}}>Price:</span>
              <span>{item.price}</span>
              <button
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
          <span>Total Price of your Cart</span>
          <span>Rs - {totalPrice}</span>
          <button className='bg-darkred w-20 rounded-lg text-white px-4 py-1' onClick={()=>{makePaymentCart(cart)}}>
          Buy
        </button>
        </div>
      </article>
    </>
  );
}

export default Cart;
