import { StyledHeader } from "../styles/StyledHeader";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLoginNavigation = () => {
    navigate("/login");
  };
  const handleHomeNavigation = () => {
    navigate("/");
  };

  return (
    <StyledHeader>
      <nav className="navbar">
        <div className="navbar-left">
          <button onClick={handleHomeNavigation}>Home</button>
        </div>
        <div className="navbar-right">
          <button onClick={handleLoginNavigation}>Login</button>
        </div>
      </nav>
    </StyledHeader>
  );
}
