import { Routes, Route, RouterProvider } from 'react-router-dom';
import './assets/styles/App.css';
import MainLayout from './layouts/MainLayout';
import Login from './layouts/LoginLayout';
import Tienda from './pages/Tienda';
import Nosotros from './pages/Nosotros';
import Usuario from './pages/Usuario';

// Componente de Inicio
function Inicio() {
  return (
    <>
      <header className="text-center my-4"></header>
      <section>
        <h1 className="text-center text-success">Bienvenido a Huerto Hogar 🌱</h1>
        <p className="text-center text-muted">Tu sitio para cultivar vida.</p>
      </section>
    </>
  );
}

// Componente de Nosotros (temporal)


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Inicio />} />
       
        <Route path="login" element={<Login />} />
        <Route path="Usuario" element={<Usuario/>}/>
      </Route>
       <Route path="/" element={<MainLayout />}>
      <Route path="tienda" element={<Tienda />} />
        <Route path="nosotros" element={<Nosotros />} />
        </Route>
    </Routes>
  );
}

export default App;