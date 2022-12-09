import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contex/CartContext";
import CartItem from "./CartItem";
import Product from "./Product";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc: number, curr: any) => acc + parseInt(curr.price) * curr.qty,
        0
      )
    );
  }, [cart]);
  if (!(cart.length > 0)) {
    return (
      <div className="flex justify-center items-center flex-col  min-h-screen">
      <h1 className="text text-2xl font-semibold">
        Your cart is empty
      </h1>
      <Link to={'/'} className="mt-5 bg-teal-500 px-4 py-2 rounded-lg text-white hover:bg-teal-300">Go to shopping</Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col sm:flex-row mt-20 md:mt-16 ">
      {/*grid  grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  */}
      <div className="space-y-5 p-5 md:p-10   sm:w-2/3 lg:w-3/4 xl:w-4/5">
        {cart.map((product: any, index: number) => {
          return <CartItem product={product} key={index} />;
        })}
      </div>
      <div className="p-5 sm:p-0">
        <div className="flex flex-col bg-slate-700 md:px-10 text-white p-4 sm:fixed sm:right-0 sm:min-h-full gap-5">
          <span className="text-lg font-bold ">
            SubTotal ({cart.length}) items
          </span>
          <span>Total: ₹ {total}</span>
          <button
            className={`  rounded-lg py-1 px-4  ${
              cart.length === 0
                ? "bg-gray-50 text-neutral-700"
                : " bg-teal-700 hover:bg-cyan-600 text-white"
            }`}
            disabled={cart.length === 0}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
