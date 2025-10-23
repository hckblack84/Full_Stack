import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/App.css';
import MainLayout from './layouts/MainLayout';
import Login from './layouts/LoginLayout';
import Tienda from './pages/Tienda';
import Nosotros from './pages/Nosotros';
import Usuario from './pages/Usuario';
import Registro from './pages/Registro';
import './assets/styles/Base.css';   
import HuertoHogarImg from './assets/images/Huerto_Hogar_1.png';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Inicio />} />
        <Route path="nosotros" element={<Nosotros />} />
      </Route>
      <Route path="tienda" element={<Tienda />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro/>} />
      <Route path="usuario" element={<Usuario />} />
    </Routes>
  );
}


function Inicio() {
  const navigate = useNavigate();

  const handleRegistro = () => {
    navigate('/registro');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleNosotros = () => {
    navigate('/nosotros');
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: 'transparent' }} 
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            
            <div className="text-center mb-5">
              <h1 className="display-1 fw-bold mb-5 text-primary" >
                Bienvenidos  
                   
                HuertoHogar
              </h1>
              <p className="lead text-dark fw-bold px-3 " >
                Regístrate en nuestra página web, disponible para todos los usuarios que quieran realizar sus compras aquí.
              </p>
            </div>

            <div className="row g-3 justify-content-center">
              <div className="col-md-4 col-sm-12">
                <button
                  type="button"
                  onClick={handleRegistro}
                  className="btn btn-success btn-lg w-100 shadow-sm"
                  aria-label="Registrarse"
                >
                  📝 Registrarse
                </button>
              </div>

              <div className="col-md-4 col-sm-12">
                <button
                  type="button"
                  onClick={handleLogin}
                  className="btn btn-primary btn-lg w-100 shadow-sm"
                  aria-label="Iniciar Sesión"
                >
                  🔐 Iniciar Sesión
                </button>
              </div>

              <div className="col-md-4 col-sm-12">
                <button
                  type="button"
                  onClick={handleNosotros}
                  className="btn btn-outline-success btn-lg w-100 shadow-sm"
                  aria-label="Conocer Más"
                >
                  ℹ️ Conocer Más
                </button>
              </div>
            </div>

            <div className="text-center mt-5">
              <p className="text-muted small text-info">
                🌱 Productos frescos y orgánicos directamente a tu hogar
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}


export default App;