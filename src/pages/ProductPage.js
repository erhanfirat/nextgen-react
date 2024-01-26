import { useEffect, useState } from "react";
import ProductCard2 from "../components/ProductCard2";
import { fetchProductsAction } from "../store/actions/productActions";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const ProductPage = () => {
  const [filterText, setFilterText] = useState("");
  const [list, setList] = useState([]); // ekranda listelenecek product arrayi

  const fetchProducts = () =>
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => res.data);

  const {
    isPending: productsLoading,
    error,
    data: products = [],
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });

  console.log("products > ", products);

  useEffect(() => {
    console.log("filterText: ", filterText);
  }, [filterText]);

  useEffect(() => {
    setList(
      products?.filter((p) =>
        p.name.toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }, [filterText, products]);

  return (
    <div>
      <h1 className="page-title">
        <i className="fa-solid fa-table-cells fa-xs me-2"></i>
        Ürünler
      </h1>
      {/* ÜRÜNLER LİSTELENECEK */}
      <div className="mb-3">
        <label>Arama</label>
        <input
          id="products-filter"
          type="text"
          className="form-control"
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <div className="products-container gap-3">
        {productsLoading && <h1>LOADING..........</h1>}
        {!productsLoading &&
          list?.map((product) => (
            <ProductCard2 key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
