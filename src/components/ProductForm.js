import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { queryClient } from "../App";

const ProductForm = ({ productData }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    img: "",
    price: 0,
    stock: 0,
    active: true,
    color: "",
  });

  const history = useHistory();

  const upsertProduct = (productFormData) => {
    if (productFormData.id) {
      return axios
        .put(
          "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" +
            productFormData.id,
          productFormData
        )
        .then((res) => res.data);
    } else {
      return axios
        .post(
          "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products",
          productFormData
        )
        .then((res) => res.data);
    }
  };

  const mutation = useMutation({
    mutationFn: upsertProduct,
    onSuccess: (res) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["products"] });
      history.push("/products");
    },
  });

  const productSubmitHandler = (e) => {
    e.preventDefault();
    mutation.mutate(product);
  };

  const createProduct = (productData) =>
    axios
      .post(
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products",
        productData
      )
      .then((res) => {
        history.push("/products");
      });

  const inputChangeHandler = (e) => {
    // e.target = Input DOM nesnesi
    const { name, value, type, checked } = e.target;

    setProduct({ ...product, [name]: type === "checkbox" ? checked : value });
  };

  useEffect(() => {
    console.log("Product data güncellendi: ", product);
  }, [product]);

  useEffect(() => {
    productData && setProduct(productData);
  }, [productData]);

  return (
    <div className="card login-form">
      <form onSubmit={productSubmitHandler} className="card-body">
        <div className="mb-3">
          <label className="form-label">Ürün adı</label>
          <input
            className="form-control"
            type="text"
            value={product.name}
            name="name"
            onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Açıklama</label>
          <input
            className="form-control"
            type="text"
            name="description"
            value={product.description}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fotoğraf</label>
          <input
            className="form-control"
            type="url"
            name="img"
            value={product.img}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fiyat</label>
          <input
            className="form-control"
            type="number"
            name="price"
            value={product.price}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stok Adet</label>
          <input
            className="form-control"
            type="number"
            name="stock"
            value={product.stock}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            id="active"
            className="form-check-input"
            type="checkbox"
            name="active"
            checked={product.active}
            onChange={inputChangeHandler}
          />
          <label className="form-check-label" htmlFor="active">
            Aktif
          </label>
        </div>

        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default ProductForm;
