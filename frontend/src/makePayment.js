import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';
const SECRET_KEY="";
const makePayment = async (mybook) => {
    console.log("hi payment");
    const stripe = await loadStripe(SECRET_KEY);
    const body = {
      products: mybook
    };
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const response = await axios.post("http://localhost:5555/do/payment", body);

      const session = response.data;

      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error("Error making payment:", error);
    }
  };
  const makePaymentCart = async (mybook) => {
    console.log("hi payment");
    const stripe = await loadStripe(SECRET_KEY);
    const body = {
      products: mybook
    };
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const response = await axios.post("http://localhost:5555/do/payment_cart", body);

      const session = response.data;

      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error("Error making payment:", error);
    }
  };
  export  {makePayment,makePaymentCart};