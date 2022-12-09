import { useReducer } from "react";
import App from "./App";
import CartContext from "./context/CartContext";
import { faker } from "@faker-js/faker";
import cartReducer, { filterReducer } from "./context/reducer";
faker.seed(99);
const AppWrapper = () => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  return (
    <CartContext.Provider
      value={{ state, dispatch, filterState, filterDispatch }}
    >
      <App />
    </CartContext.Provider>
  );
};

export default AppWrapper;
