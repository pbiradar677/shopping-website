import { useContext } from "react";
import CartContext from "../context/CartContext";
import Filters from "./Filters";
import Product from "./Product";

const Home = () => {
  const {
    state: { products },
    filterState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = useContext(CartContext);

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a: any, b: any) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((product: any) => product.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter(
        (product: any) => product.fastDelivery
      );
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (product: any) => product.ratings >= byRating
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((product: any) =>
        product.name.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };
  return (
    <div className="flex min-h-screen mt-20 md:mt-16 ">
      <div className="ml-36 sm:ml-44 md:ml-56 ">
        <Filters />
      </div>

      <div className="grid h-2/3  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:p-10 ">
        {transformProducts().map((product: any) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
