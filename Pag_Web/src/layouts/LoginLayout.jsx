import { useNavigate } from 'react-router-dom';
import '../assets/styles/LoginLayout.css';
import { useState } from 'react';
import MainLoyaut from './MainLayout';

function Login() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleLogin = () => {
    // Validamos que ambos campos tengan contenido
    if (!usuario.trim() || !contraseña.trim()) {
      alert('Por favor, completa todos los campos');
      return;

    }else if (usuario !== 'admin' || contraseña !== 'admin123') {
      alert('Usuario o contraseña incorrectos');
      return;
    }

    
    navigate('/Usuario');
  };

  const handleClose = () => {
    setShowLogin(false);
    navigate('../');
  };

  if (!showLogin) return null;

  return (
   

    <div className="Inicio">
          <MainLoyaut/>
      
    <div className="login-container">
      <div className="login-card">
        <button
          type="button"
          className="btn-close"
          aria-label="Cerrar"
          onClick={handleClose}
        ></button>

        <div className="text-center mb-4">
          <h1 className="text-success mb-2">🌱 Huerto Hogar</h1>
          <p className="text-muted">Tu sitio para cultivar vida</p>
        </div>

        <form className="login-form needs-validation" noValidate>
          <h2 className="text-center mb-4">Bienvenido</h2>

          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa tu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Ingresa tu contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="btn btn-success w-100 btn-lg"
          >
            Ingresar
          </button>

          <p className="text-center text-muted mt-3 mb-0">
            ¿No tienes cuenta?{" "}
            <a
              href="#"
              className="text-success"
              onClick={(e) => {
                e.preventDefault();
                navigate('/Registro');
              }}
            >
              Regístrate
            </a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
