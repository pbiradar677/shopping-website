import { useContext } from "react";
import CartContext from "../context/CartContext";
import Rating from "./Rating";

interface Props {
  product: any;
}
const Product = ({ product }: Props) => {
  const { id, name, image, price, fastDelivery, ratings, inStock } = product;
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);
  return (
    <div className="bg-slate-600 rounded-sm  shadow-md text-white min-h-fit ">
      <img src={image} alt={name} />
      <div className="p-2">
        <div className="flex items-center justify-between  text-md font-medium">
          <span className="w-4/6 truncate">{name}</span>
          <span>₹ {price.split(".")[0]}</span>
        </div>
        <div className="text-md font-medium mb-2">
          {fastDelivery ? "Fast Delivery" : "4 days delivery"}
        </div>
        <div className="flex">
          <Rating
            rating={ratings}
            handleRating={(i) => {
              console.log("Rating: " + ratings);
            }}
          />
        </div>
        <div className=" flex gap-2 flex-col lg:flex-row lg:justify-between lg:items-center py-2">
          {cart.some((p: any) => p.id === id) ? (
            <button 
            onClick={() =>
              dispatch({ payload: product, type: "REMOVE_FROM_CART" })
            }
            className="hover:bg-red-500  rounded-lg py-1 px-4 bg-red-700 text-white">
              Remove from Cart
            </button>
          ) : (
            <button
              disabled={!inStock}
              onClick={() =>
                dispatch({ payload: product, type: "ADD_TO_CART" })
              }
              className={
                inStock
                  ? "hover:bg-cyan-600  rounded-lg py-1 px-4 bg-teal-700 text-white"
                  : "text-red-600 font-bold text-lg"
              }
            >
              {!inStock ? "Out of Stock" : "Add to Cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
