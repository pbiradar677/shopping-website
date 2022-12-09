import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import CartContext from "../context/CartContext";
import Rating from "./Rating";
interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  fastDelivery: string;
  ratings: number;
  inStock: number;
}
interface Props {
  product: Product;
}
const CartItem = ({ product }: Props) => {
  const { id, name, image, price, fastDelivery, ratings, inStock } = product;
  const { dispatch } = useContext(CartContext);
  return (
    <div className="shadow-lg  bg-slate-200 rounded-xl flex ">
      <div className="w-1/2 lg:w-1/4">
        <img className="h-full object-center w-full " src={image} alt={name} />
      </div>
      <div className="flex flex-col lg:w-3/4 lg:flex-row lg:justify-evenly space-y-2 lg:space-y-0 p-2 md:p-8">
        <h4 className="text-lg text-left font-medium">{name}</h4>
        <span>₹ {price.split(".")[0]}</span>
        <span className="flex">
          <Rating
            rating={ratings}
            handleRating={(i: number) => console.log(i)}
          />
        </span>
        <form>
          <select
            onChange={(e: any) => {
              dispatch({
                type: "CHANGE_CART_QTY",
                payload: { id: id, qty: parseInt(e.target.value) },
              });
            }}
          >
            {Array.from(Array(inStock).keys()).map((x: number) => (
              <option value={x + 1} key={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </form>
        <AiFillDelete
          color="red"
          size={"25px"}
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: product,
            });
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
