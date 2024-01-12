import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useForm } from "react-hook-form";

const formDataInitial = {
  email: "",
  password: "",
  rememberMe: false,
};

const LoginForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: formDataInitial,
  });

  const onSubmit = (formData) => {
    console.log("Form submit edildi! ", formData);

    axios
      .post("https://reqres.in/api/user", formData)
      .then((res) => {
        console.log("Login oldu: ", res.data);
      })
      .catch((err) => {
        console.error("Login Hata: ", err);
      });
  };

  return (
    <div className="form-card">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="mb-3">
            <label className="form-label">E-posta</label>
            <input
              className="form-control"
              type="email"
              {...register("email")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Şifre</label>
            <input
              type="password"
              className="form-control"
              {...register("password")}
            />
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              {...register("rememberMe")}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Beni hatırla
            </label>
          </div>

          {/* <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => setFormData(formDataInitial)}
          >
            Sıfırla
          </button> */}
          <Button type="submit" color="primary">
            Giriş
          </Button>
        </form>
      </div>
      <div className="login-form-bg">
        <p className="fs-6">
          Üye değilseniz <a href="#">buradan</a> kayıt olabilirsiniz...
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
