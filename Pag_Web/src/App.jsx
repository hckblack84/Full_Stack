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

// ...
function App() {
  return (
    <Routes>
      
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Inicio />} />
        <Route path="usuario" element={<Usuario />} />
        
      </Route>
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="tienda" element={<Tienda />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/Registro" element={<Registro/>} />
    </Routes>
  );
}

// 🏡 Componente de Inicio
function Inicio() {
  return (
    <div className="inicio-fondo">
      <h1>Bienvenido</h1>
    </div>
  );
}

export default App;