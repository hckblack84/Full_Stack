import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles/MainLayout.css";
   import facebookIcon from "../assets/images/iconFacebook.png";
import instagramIcon from "../assets/images/iconInstragram.jpg";
import mapsIcon from "../assets/images/iconMaps.jpg";
import factorioIcon from "../assets/images/iconFactorio.jpg";


function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`main-layout ${isHome ? 'with-background' : ''}`}>
      <Navbar />
      <main className="content-wrapper">
        <Outlet />
      </main>
   
<footer className="footer">
  <div className="footer-social">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <img src={facebookIcon} alt="Facebook" />
    </a>

    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <img src={instagramIcon} alt="Instagram" />
    </a>

    <a href="https://maps.app.goo.gl/d69SE755JDoSD1zz9" target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
      <img src={mapsIcon} alt="Google Maps" />
    </a>

    <a href="https://factorio.com/" target="_blank" rel="noopener noreferrer" aria-label="Factorio">
      <img src={factorioIcon} alt="Factorio" style={{ width: 24, height: 24, verticalAlign: 'middle' }} />
    </a>
  </div>
  <p>© 2025 HuertoHogar. Todos los derechos reservados. Telefono : +569 8765 4321 Dirrecion : Av. Siempre Viva 123, Ciudad, País : Cerru
    
  </p>
</footer>
    </div>
  );
}

export default MainLayout;