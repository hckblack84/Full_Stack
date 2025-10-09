import React, { useState } from 'react';
import { ShoppingCart, Star, Plus, Minus, X, Trash2 } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';

// Importar imágenes locales desde tu carpeta assets
import manzanas from '../assets/images/manzana.jpg';
import naranjas from '../assets/images/naranja.jpg';
import platanos from '../assets/images/platano.jpg';
import zanahorias from '../assets/images/zanahoria.jpg';
import espinacas from '../assets/images/frutilla.jpg';
import pimientos from '../assets/images/pimiento.jpg';
import miel from '../assets/images/miel.jpg';
import queso from '../assets/images/queso.jpg';
import leche from '../assets/images/leche.jpg';

// Importar estilos
import '../assets/styles/Base.css';
import '../assets/styles/Tienda.css';

// Datos de productos con imágenes locales
const productos = [
  { 
    id: 'FR001', 
    nombre: 'Manzanas Fuji', 
    categoria: 'Frutas Frescas', 
    precio: 2500, 
    imagen: manzanas, 
    stock: true, 
    enOferta: true, 
    descuento: 15, 
    calificacion: 5 
  },
  { 
    id: 'FR002', 
    nombre: 'Naranjas Valencia', 
    categoria: 'Frutas Frescas', 
    precio: 1800, 
    imagen: naranjas, 
    stock: true, 
    enOferta: false, 
    descuento: 0, 
    calificacion: 4 
  },
  { 
    id: 'FR003', 
    nombre: 'Plátanos Cavendish', 
    categoria: 'Frutas Frescas', 
    precio: 1200, 
    imagen: platanos, 
    stock: true, 
    enOferta: false, 
    descuento: 0, 
    calificacion: 5 
  },
  { 
    id: 'VR001', 
    nombre: 'Zanahorias Orgánicas', 
    categoria: 'Verduras Orgánicas', 
    precio: 1500, 
    imagen: zanahorias, 
    stock: true, 
    enOferta: true, 
    descuento: 10, 
    calificacion: 5 
  },
  { 
    id: 'VR002', 
    nombre: 'Frutillas Frescas', 
    categoria: 'Verduras Orgánicas', 
    precio: 2000, 
    imagen: espinacas, 
    stock: true, 
    enOferta: false, 
    descuento: 0, 
    calificacion: 4 
  },
  { 
    categoria: 'Productos Orgánicos', 
    id: 'VR003', 
    nombre: 'Pimientos Tricolores', 
    categoria: 'Verduras Orgánicas', 
    precio: 2800, 
    imagen: pimientos, 
    stock: true, 
    enOferta: true, 
    descuento: 20, 
    calificacion: 5 
  },
  { 
    id: 'PO001', 
    nombre: 'Miel Orgánica', 
    categoria: 'Productos Orgánicos', 
    precio: 4500, 
    imagen: miel, 
    stock: true, 
    enOferta: false, 
    descuento: 0, 
    calificacion: 5 
  },
  { 
    id: 'PO003', 
    nombre: 'Queso de Cabra', 
    precio: 3200, 
    imagen: queso, 
    stock: true, 
    enOferta: false, 
    descuento: 0, 
    calificacion: 4 
  },
  { 
    id: 'PL001', 
    nombre: 'Leche Entera', 
    categoria: 'Productos Lácteos', 
    precio: 1500, 
    imagen: leche, 
    stock: true, 
    enOferta: true, 
    descuento: 5, 
    calificacion: 5 
  }
];

const categorias = ['Todas', 'Frutas Frescas', 'Verduras Orgánicas', 'Productos Orgánicos', 'Productos Lácteos'];

function TiendaHuertoHogar() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const productosFiltrados = categoriaActiva === 'Todas' 
    ? productos 
    : productos.filter(p => p.categoria === categoriaActiva);

  const calcularPrecioFinal = (precio, descuento) => {
    return precio - (precio * descuento / 100);
  };

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find(item => item.id === producto.id);
    if (existe) {
      setCarrito(carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      eliminarDelCarrito(id);
    } else {
      setCarrito(carrito.map(item =>
        item.id === id ? { ...item, cantidad: nuevaCantidad } : item
      ));
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => {
      const precioFinal = calcularPrecioFinal(item.precio, item.descuento);
      return total + (precioFinal * item.cantidad);
    }, 0);
  };

  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <div className="tienda-contenedor">
      
     
/* Banner */
    <div className="banner">
        <h1> ''</h1>
      <div className='LogoFlotante'>
      <div className="banner-contenido">
        <h3 className="logo-text"> </h3>
        <h2 className="banner-titulo">🍎Frescura directa a tu mesa🍊</h2>
        <button className="banner-boton">
        Informate sobre nuestros productos
        </button>
      </div>
</div>
      <div className="banner-oferta-badge">
        🎉 20%
      </div>
    </div>

    {/* Categorías */}
      <div className="seccion-principal">
        <h2 className="seccion-titulo">
          Categorías destacadas
        </h2>

        <div className="categorias-lista">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`categoria-boton ${categoriaActiva === cat ? 'categoria-activa' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Productos */}
        <h2 className="seccion-titulo">
          Productos
        </h2>
        <div className="productos-grid">
          {productosFiltrados.map(producto => {
            const precioFinal = calcularPrecioFinal(producto.precio, producto.descuento);
            return (
              <div key={producto.id} className="producto-card">
                {producto.enOferta && (
                  <div className="producto-oferta-tag">
                    -{producto.descuento}%
                  </div>
                )}
                <div className="producto-imagen-contenedor">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="producto-imagen"
                  />
                </div>
                <h3 className="producto-nombre">
                  {producto.nombre}
                </h3>
                <p className="producto-codigo">
                  Código: {producto.id}
                </p>
                <div className="producto-calificacion">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      // Usa variables CSS para el fill/stroke si las definiste en Base.css
                      fill={i < producto.calificacion ? 'var(--color-badge-oferta)' : 'none'}
                      stroke={i < producto.calificacion ? 'var(--color-badge-oferta)' : '#ccc'}
                    />
                  ))}
                  <span className="calificacion-texto">
                    ({producto.calificacion})
                  </span>
                </div>
                <div className="producto-precio-info">
                  {producto.enOferta && (
                    <p className="precio-tachado">
                      ${producto.precio.toLocaleString()}
                    </p>
                  )}
                  <p className="precio-final">
                    ${precioFinal.toLocaleString()}
                    <span className="precio-unidad"> /kg</span>
                  </p>

                </div>
                <button
                  onClick={() => agregarAlCarrito(producto)}
                  className="producto-boton-agregar"
                >
                  <Plus size={20} />
                  Añadir al carrito
                </button>
              </div>
            );
          })}
        </div>
 
      </div>

      {/* Botón flotante del carrito */}
      <button
        onClick={() => setMostrarCarrito(true)}
        className="carrito-flotante-boton"
      >
        <ShoppingCart size={30} />
        {totalItems > 0 && (
          <span className="carrito-flotante-contador">
            {totalItems}
          </span>
        )}
      </button>

      {/* Modal del Carrito */}
      {mostrarCarrito && (
        <div className="modal-overlay">
          <div className="carrito-modal">
            <div className="modal-header">
              <h2 className="modal-titulo">
                <ShoppingCart size={24} className="modal-icono" />
                Mi Carrito
              </h2>
              <button
                onClick={() => setMostrarCarrito(false)}
                className="modal-cerrar-boton"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="modal-cuerpo">
              {carrito.length === 0 ? (
                <p className="carrito-vacio-mensaje">
                  Tu carrito está vacío
                </p>
              ) : (
                carrito.map(item => {
                  const precioFinal = calcularPrecioFinal(item.precio, item.descuento);
                  return (
                    <div key={item.id} className="carrito-item">
                    <div className="carrito-item-imagen-contenedor">
                      <img 
                        src={item.imagen} 
                        alt={item.nombre}
                        className="carrito-item-imagen"
                      />
                    </div>
                      <div className="carrito-item-detalles">
                        <h4 className="carrito-item-nombre">{item.nombre}</h4>
                        <p className="carrito-item-precio-unitario">
                          ${precioFinal.toLocaleString()} /kg
                        </p>
                        {item.enOferta && (
                          <span className="carrito-item-descuento-tag">
                            -{item.descuento}% descuento
                          </span>
                        )}
                      </div>
                      <div className="carrito-item-cantidad-control">
                        <button
                          onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                          className="cantidad-boton cantidad-restar"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="cantidad-display">
                          {item.cantidad} kg
                        </span>
                        <button
                          onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                          className="cantidad-boton cantidad-sumar"
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          onClick={() => eliminarDelCarrito(item.id)}
                          className="cantidad-boton cantidad-eliminar"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="carrito-item-subtotal">
                        <p className="carrito-item-subtotal-texto">
                          ${(precioFinal * item.cantidad).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {carrito.length > 0 && (
              <div className="modal-footer">
                <div className="carrito-total">
                  <span>Total:</span>
                  <span className="carrito-total-valor">${calcularTotal().toLocaleString()}</span>
                </div>
                <button className="checkout-boton">
                  Proceder al pago
                </button>
              </div>
            )}
          </div>
        </div>
      )}
<MainLayout />
    </div>
  );
}

export default TiendaHuertoHogar;