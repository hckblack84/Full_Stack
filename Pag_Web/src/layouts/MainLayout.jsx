import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles/MainLayout.css";

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
        <p>© 2024 My Company</p>
      </footer>
    </div>
  );
}

export default MainLayout;