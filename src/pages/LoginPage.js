import LoginForm from "../components/LoginForm";
import { Title } from "../layout/Main";

const LoginPage = ({ setUserName }) => {
  return (
    <div className="page">
      <Title>
        Kullanıcı Girişi
      </Title>


      <h1 className="page-title">
        <i className="fa-solid fa-user fa-xs me-2"></i>
        Kullanıcı Girişi
      </h1>
      <LoginForm setUserName={setUserName} />
    </div>
  );
};

export default LoginPage;
