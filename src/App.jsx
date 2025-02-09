import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useRef } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Loading from "./pages/Loading";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./fade.css"; // Import the CSS file for fade animations

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Header />
      <div style={{ paddingTop: "60px" }}> {/* Add padding to avoid content being hidden behind the fixed header */}
        <RoutesWrapper isAuthenticated={isAuthenticated} handleLogin={handleLogin} />
      </div>
    </BrowserRouter>
  );
}

function RoutesWrapper({ isAuthenticated, handleLogin }) {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/loading" element={<Loading onLogin={handleLogin} />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
