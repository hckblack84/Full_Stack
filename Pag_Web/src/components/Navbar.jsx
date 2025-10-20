// Componente Navbar con Bootstrap
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Huerto_Hogar_1.png';
import '../assets/styles/Navbar.css';
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
   
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');

    const handleStorageChange = () => {
      const authStatus = localStorage.getItem('isAuthenticated');
      setIsAuthenticated(authStatus === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    
    //
    window.addEventListener('authChange', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authChange', handleStorageChange);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-danger bg-success">
      <div className="container-fluid">
        <img src={Logo} className="logo" alt="Logo Huerto Hogar" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tienda">Tienda</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item" aria-label='Usuario'>
              {isAuthenticated ? (
                <Link className="nav-link" to="/Usuario" >Perfil</Link>
              ) : (
                <Link className="nav-link" to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;