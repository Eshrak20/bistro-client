// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import { Elements } from "@stripe/react-stripe-js";
// import useCart from "../../../Hooks/useCart";

// TODO: provide publishable Key
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  // const [cart] = useCart();
  // const total = cart.reduce((sum, item) => sum + item.price, 0);
  // const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <h1>I will do it later</h1>
      {/* <div className="mx-auto text-center  my-8">
        <h3 className="text-yellow-600 mb-2">--- Process ---</h3>
        <p className="text-4xl uppercase border-y-4 py-4 font-bold">
          Please payment
        </p>
      </div>
      <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements> */}
    </div>
  );
};

export default Payment;
