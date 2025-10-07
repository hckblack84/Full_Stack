import { Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';
import MainLayout from './layouts/MainLayout';
import Login from './layouts/LoginLayout';
import Tienda from './pages/Tienda';
import Nosotros from './pages/Nosotros';
import Usuario from './pages/Usuario';

function App() {
  return (
    <Routes>
      {/* 🌿 Todas las rutas que comparten Navbar y Footer */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Inicio />} />
        <Route path="usuario" element={<Usuario />} />
        <Route path="tienda" element={<Tienda />} />
        <Route path="nosotros" element={<Nosotros />} />
      </Route>

      {/* 🔐 Login fuera del layout principal */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

// 🏡 Componente de Inicio
function Inicio() {
  return (
    <div className="inicio-fondo">
      {/* Tu contenido de inicio aquí */}
      <h1>Bienvenido</h1>
    </div>
  );
}

export default App;