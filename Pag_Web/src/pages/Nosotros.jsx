import React from 'react';
import { Leaf, Award, Zap, Users, Globe } from 'lucide-react'; // Iconos de lucide-react (reemplaza los iconos de Bootstrap por algo más moderno)
import '../assets/styles/Nosotros.css'; // Archivo CSS separado para decoraciones
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap instalado
import MainLayout from '../layouts/MainLayout';

function Nosotros() {
  return (
  <div className="backgroundimage">
    <div className="container mt-0 mb-0 nosotros-page">
    
      <header className="text-center mb-5">
        <h1 className="display-4 text-success fw-bold  ">Conoce al equipo detrás de HuertoHogar</h1>
        <p className="lead text-muted">
          nuestra mision es llevar productos frescos  directamente a tu hogar
        </p>
      </header>

      <hr className="my-5 border-success opacity-25" />

      <section className="team-section mb-5">
        <h2 className="text-center mb-4 text-dark">👥 Nuestro Equipo Fundador</h2>
        <div className="row justify-content-center g-4">
          
          {/* MIEMBRO 1 */}
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-sm team-card">
              <div className="card-body text-center">
                <div className="team-photo-placeholder mx-auto mb-3">
                  {/* ⚠️ APARTADO PARA LA FOTO 1 */}
                  <Users size={50} className="text-success" />
                </div>
                <h4 className="card-title text-success fw-bold justify-content-center">
                  Luis Paredes
                </h4>
                <p className="card-subtitle mb-2 text-muted">
                  [ Experto en Logística y Operaciones automatizadas]
                            [Factorio]
                </p>
               
                <p className="card-text text-start">
            descripcion
                </p>
              </div>
            </div>
          </div>

          
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-sm team-card">
              <div className="card-body text-center">
                <div className="team-photo-placeholder mx-auto mb-3">
                  {/* ⚠️ APARTADO PARA LA FOTO 2 */}
                  <Users size={50} className="text-success" />
                </div>
                <h4 className="card-title text-success fw-bold justify-content-center">
                  Camilo Araneda
                </h4>
                <p className="card-subtitle mb-2 text-muted">
                  [Experto en Agricultura y Calidad de Productos Orgánicos]
                            [Stardew Valley]
                </p>
               
                <p className="card-text text-start">
descripcion                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-5 border-success opacity-25" />

    
     
      <section className="impact-section mb-5 tittle p-4 bg-light rounded shadow-sm">
        <h2 className="text-center mb-5 text-secondary">🌎 Nuestro Compromiso con el Medio Ambiente</h2>

        <div className="row justify-content-center text-center">
          
          {/* BENEFICIO 1: Reducción de Huella */}
          <div className="col-md-4 mb-4">
            <Globe size={40} className="text-success mb-3 impact-icon" />
            <h4 className="fw-bold text-success">Reducción de Huella de Carbono</h4>
            {/* 📝 APARTADO BENEFICIO 1 */}
            <p className="text-muted">
            </p>
          </div>

          {/* BENEFICIO 2: Empaque Sostenible */}
          <div className="col-md-4 mb-4">
            <Leaf size={40} className="text-success mb-3 impact-icon" />
            <h4 className="fw-bold text-success">Empaques 100% Sostenibles</h4>
            {/* 📝 APARTADO BENEFICIO 2 */}
            <p className="text-muted">
            </p>
          </div>

          {/* BENEFICIO 3: Apoyo a la Biodiversidad */}
          <div className="col-md-4 mb-4">
            <Zap size={40} className="text-success mb-3 impact-icon" />
            <h4 className="fw-bold text-success">Fomento de Agricultura Biodiversa</h4>
            {/* 📝 APARTADO BENEFICIO 3 */}
            <p className="text-muted">
            </p>
          </div>
        </div>

      </section>
    </div>
<MainLayout/>
  </div>
  );
}

export default Nosotros;