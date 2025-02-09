import { LoginForm } from "../components/LoginForm";
import { StyledLoginPage } from "../styles/StyledLogin";

export default function Login({ onLogin }) {
  return (
    <StyledLoginPage>
      <LoginForm onLogin={onLogin} />
    </StyledLoginPage>
  );
}
