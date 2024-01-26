import { useEffect, useState } from "react";
import ProductCard2 from "../components/ProductCard2";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../store/actions/productActions";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const limit = 20;

const ProductPage = () => {
  const [filterText, setFilterText] = useState("");
  const [list, setList] = useState([]); // ekranda listelenecek product arrayi
  const [page, setPage] = useState(3);
  const limit = 20;

  const fetchProducts = (page, limit) =>
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/products", {
        params: { offset: limit * page, limit },
      })
      .then((res) => res.data);

  const {
    isPending: productsLoading,
    error,
    data: { products, total } = { products: [], total: 0 },
  } = useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => fetchProducts(page, limit),
  });

  useEffect(() => {
    console.log(products);
  }, [products]);

  console.log("products > ", products);

  useEffect(() => {
    console.log("filterText: ", filterText);
  }, [filterText]);

  useEffect(() => {
    // setList(
    //   products?.filter((p) =>
    //     p.name.toLowerCase().includes(filterText.toLowerCase())
    //   )
    // );
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
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
