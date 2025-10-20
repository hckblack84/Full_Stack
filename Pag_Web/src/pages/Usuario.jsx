import '../assets/styles/Usuario.css';
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ IMPORTAR useNavigate

function Usuario() {
  const navigate = useNavigate(); // ✅ DECLARAR navigate AQUÍ
  
  const [userData, setUserData] = useState({
    nombre: 'Lucas Olmedo',
    email: 'Lucas.olmedo@example.com',
    telefono: '+56 9 1234 5678',
    direccion: 'Av. Principal 123, Melipilla',
    ciudad: 'Melipilla',
    region: 'Región Metropolitana',
    fechaNacimiento: '15/03/1990',
    rut: '12.345.678-9',
    tipoUsuario: 'Cliente Premium',
    fechaRegistro: 'Hoy',
    pedidosRealizados: 12,
    productosFavoritos: 8
  });

  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    // Aquí guardarías los cambios
    setEditMode(false);
    alert('Cambios guardados correctamente');
  };

  // ✅ handleLogout DESPUÉS de declarar navigate
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('usuario');
    window.dispatchEvent(new Event('authChange'));
    navigate('/');
  };

  return (
    <div className="Inicio">
    <div className="usuario-container">
      <div className="usuario-header">
        <div className="usuario-avatar">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Avatar del usuario" 
          />
        </div>
        <div className="usuario-header-info">
          <h1>{userData.nombre}</h1>
          <p className="usuario-tipo">{userData.tipoUsuario}</p>
          <p className="usuario-registro">Miembro desde: {userData.fechaRegistro}</p>
        </div>
        <div className="usuario-header-actions">
          {!editMode ? (
            <button className="btn btn-primary" onClick={handleEdit}>
              ✏️ Editar Perfil
            </button>
          ) : (
            <>
              <button className="btn btn-success me-2" onClick={handleSave}>
                💾 Guardar
              </button>
              <button className="btn btn-secondary" onClick={handleEdit}>
                ❌ Cancelar
              </button>
            </>
          )}
        </div>
      </div>

      <div className="usuario-content">
        {/* Información Personal */}
        <div className="info-card">
          <h2 className="card-title">📋 Información Personal</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Nombre Completo</label>
              {editMode ? (
                <input 
                  type="text" 
                  className="form-control" 
                  value={userData.nombre}
                  onChange={(e) => setUserData({...userData, nombre: e.target.value})}
                />
              ) : (
                <p>{userData.nombre}</p>
              )}
            </div>

            <div className="info-item">
              <label>RUT</label>
              {editMode ? (
                <input 
                  type="text" 
                  className="form-control" 
                  value={userData.rut}
                  onChange={(e) => setUserData({...userData, rut: e.target.value})}
                />
              ) : (
                <p>{userData.rut}</p>
              )}
            </div>

            <div className="info-item">
              <label>Fecha de Nacimiento</label>
              {editMode ? (
                <input 
                  type="text" 
                  className="form-control" 
                  value={userData.fechaNacimiento}
                  onChange={(e) => setUserData({...userData, fechaNacimiento: e.target.value})}
                />
              ) : (
                <p>{userData.fechaNacimiento}</p>
              )}
            </div>

            <div className="info-item">
              <label>Email</label>
              {editMode ? (
                <input 
                  type="email" 
                  className="form-control" 
                  value={userData.email}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                />
              ) : (
                <p>{userData.email}</p>
              )}
            </div>

            <div className="info-item">
              <label>Teléfono</label>
              {editMode ? (
                <input 
                  type="tel" 
                  className="form-control" 
                  value={userData.telefono}
                  onChange={(e) => setUserData({...userData, telefono: e.target.value})}
                />
              ) : (
                <p>{userData.telefono}</p>
              )}
            </div>
          </div>
        </div>

        {/* Dirección */}
        <div className="info-card">
          <h2 className="card-title">📍 Dirección</h2>
          <div className="info-grid">
            <div className="info-item full-width">
              <label>Dirección</label>
              {editMode ? (
                <input 
                  type="text" 
                  className="form-control" 
                  value={userData.direccion}
                  onChange={(e) => setUserData({...userData, direccion: e.target.value})}
                />
              ) : (
                <p>{userData.direccion}</p>
              )}
            </div>

            <div className="info-item">
              <label>Ciudad</label>
              {editMode ? (
                <input 
                  type="text" 
                  className="form-control" 
                  value={userData.ciudad}
                  onChange={(e) => setUserData({...userData, ciudad: e.target.value})}
                />
              ) : (
                <p>{userData.ciudad}</p>
              )}
            </div>

            <div className="info-item">
              <label>Región</label>
              {editMode ? (
                <input 
                  type="text" 
                  className="form-control" 
                  value={userData.region}
                  onChange={(e) => setUserData({...userData, region: e.target.value})}
                />
              ) : (
                <p>{userData.region}</p>
              )}
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="info-card">
          <h2 className="card-title">📊 Estadísticas</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">🛒</div>
              <div className="stat-info">
                <h3>{userData.pedidosRealizados}</h3>
                <p>Pedidos Realizados</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">❤️</div>
              <div className="stat-info">
                <h3>{userData.productosFavoritos}</h3>
                <p>Productos Favoritos</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">⭐</div>
              <div className="stat-info">
                <h3>4.8/5</h3>
                <p>Calificación Promedio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de cerrar sesión */}
        <div className="usuario-actions">
          <button
            type="button"
            onClick={handleLogout}
            className="btn btn-danger w-100 btn-lg"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Usuario;