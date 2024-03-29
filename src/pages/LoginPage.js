import LoginForm from "../components/LoginForm";

const LoginPage = ({ setUserName }) => {
  return (
    <div className="page">
      <h1 className="page-title">
        <i className="fa-solid fa-user fa-xs me-2"></i>
        Kullanıcı Girişi
      </h1>
      <LoginForm setUserName={setUserName} />
    </div>
  );
};

export default LoginPage;
