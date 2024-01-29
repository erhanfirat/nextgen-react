import { myContext } from "../App";
import LoginForm from "../components/LoginForm";
import { Title } from "../components/Title";

const LoginPage = () => {
  return (
    <div className="page">
      <Title>
        <i className="fa-solid fa-user fa-xs me-2"></i>
        Kullanıcı Girişi
      </Title>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
