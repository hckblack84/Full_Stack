import { Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';
import MainLayout from './layouts/MainLayout';
import Login from './layouts/LoginLayout';
import Tienda from './pages/Tienda';
import Nosotros from './pages/Nosotros';
import Usuario from './pages/Usuario';
import Registro from './pages/Registro';
// ...
// Importación de estilos CSS externos
import './assets/styles/Base.css';   

// 🖼 Importa la imagen local
import HuertoHogarImg from './assets/images/Huerto_Hogar_1.png';

// ...
function App() {
  return (
    <Routes>
      {/* 🌿 Todas las rutas que comparten Navbar y Footer */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Inicio />} />
        <Route path="usuario" element={<Usuario />} />
        
      </Route>
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="tienda" element={<Tienda />} />
      {/* 🔐 Login fuera del layout principal */}
      <Route path="/login" element={<Login />} />
      <Route path="/Registro" element={<Registro/>} />
    </Routes>
  );
}

// 🏡 Componente de Inicio
function Inicio() {
  return (
    <div className="inicio-fondo">
      <h1 className="inicio-titulo">Bienvenido a HuertoHogar</h1>

      <h2 className="inicio-subtitulo">Registrate a nustra pagina web, esta disponible para los usuarios que quieran realizar sus compras aqui.</h2>

      {/* 🖼 Imagen centrada */}
      <div className="inicio-imagen-container">
        <img
          src={HuertoHogarImg}
          alt="Huerto Hogar"
          className="inicio-imagen"
        />
      </div>
    </div>
  );
}

export default App;