import { useContext } from "react";
import CartContext from "../contex/CartContext";
import Rating from "./Rating";

const Filters = () => {
  const {
    filterState: { byStock, byFastDelivery, sort, byRating },
    filterDispatch,
  } = useContext(CartContext);
  return (
    <div className="bg-slate-700 sm:px-6 md:px-12 text-white p-2 fixed left-0 min-h-full">
      <span className="font-semibold text-sm md:text-lg">Fliter Products</span>

      <div className="flex items-center  my-3">
        <input
          type="radio"
          name="ascending"
          onChange={() => {
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            });
          }}
          checked={sort === "lowToHigh" ? true : false}
        />
        <span className="text-sm ml-2">Ascending</span>
      </div>

      <div className="flex items-center  my-3">
        <input
          type="radio"
          onChange={() => {
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            });
          }}
          checked={sort === "highToLow" ? true : false}
          name="ascending"
        />
        <span className="text-sm ml-2">Descending</span>
      </div>

      <div className="flex items-center  my-3">
        <input
          type="checkbox"
          name=""
          onChange={() => {
            filterDispatch({
              type: "FILTER_BY_STOCK",
            });
          }}
          checked={byStock}
        />
        <span className="text-sm ml-2">out of Stock</span>
      </div>
      <div className="flex items-center  my-3">
        <input
          type="checkbox"
          name=""
          onChange={() => {
            filterDispatch({
              type: "FILTER_BY_DELIVERY",
            });
          }}
          checked={byFastDelivery}
        />
        <span className="text-sm ml-2">Fast Delivery</span>
      </div>

      <div className="flex items-center  my-3">
        <span className="text-sm">Rating: </span>
        <Rating
          rating={byRating}
          handleRating={(i: number) => {
            filterDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            });
          }}
        />
      </div>

      <div className="mt-16">
        <button
        onClick={()=>{
          filterDispatch({
            type: "CLEAR_FILTERS",
          });
        }}
        className="hover:bg-cyan-600 text-sm md:text-base  rounded-lg py-1 px-4 bg-teal-700 text-white">
          Clear all filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
