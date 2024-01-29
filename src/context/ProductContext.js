import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = (pageNumber) => {
    axios
      .get(
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products?page=" +
          pageNumber
      )
      .then((res) => {
        setProducts(res.data);
      });
  };

  useEffect(() => {
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        page,
        setPage,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
