import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../contex/CartContext";
const Header = () => {
  const {
    state: { cart },
    filterState:{searchQuery},
    filterDispatch,
  } = useContext(CartContext);
  console.log(cart);

  return (
    <>
      <div className="bg-slate-900  text-white px-2 w-full mt-0 fixed top-0 z-50">
        <div className="flex justify-around items-center h-20 md:h-16 flex-wrap">
          <Link to="/">Shopping Website</Link>
          <input
            type="search"
            name="search"
            
            value={searchQuery}
            onChange={(e) => {
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
            className="form-input px-4 rounded-md w-50 md:w-60 text-black"
            placeholder="what are you looking for?"
          />
          <div className="relative flex ">
            <Link to="/cart">
              <FaShoppingCart color="white" fontSize={"25px"} />
            </Link>
            <span className="inline-flex w-6 h-6 text-sm items-center justify-center  absolute -right-4 -top-3 bg-red-600 rounded-full animate-bounce transition-all">
              {cart?.length}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
