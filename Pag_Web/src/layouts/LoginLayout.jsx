import { useNavigate } from 'react-router-dom';
import '../assets/styles/LoginLayout.css';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => {
    // Aquí podrías validar usuario y contraseña
    navigate('/=Usuario'); // 👈 Corregido a minúscula
  };

  const handleClose = () => {
    setShowLogin(false);
    navigate('/'); // 👈 Redirige a la página de inicio (/) o usa '/inicio'
  };

  if (!showLogin) return null; 

  return (
    <div className="login-container">
      <div className="login-card">
        <button 
          type="button" 
          className="btn-close" 
          aria-label="Cerrar" 
          onClick={handleClose} // 👈 Simplificado
        ></button>

        <div className="text-center mb-4">
          <h1 className="text-success mb-2">🌱 Huerto Hogar</h1>
          <p className="text-muted">Tu sitio para cultivar vida</p>
        </div>

        <div className="login-form">
          <h2 className="text-center mb-4">Bienvenido</h2>

          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Ingresa tu usuario"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <button 
            onClick={handleLogin} 
            className="btn btn-success w-100 btn-lg"
          >
            Ingresar
          </button>

          <p className="text-center text-muted mt-3 mb-0">
            ¿No tienes cuenta? <a href="#" className="text-success">Regístrate</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;