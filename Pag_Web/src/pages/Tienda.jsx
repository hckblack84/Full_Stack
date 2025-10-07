import ProductCard from '../components/Cards';
import aceite from '../assets/images/aceite.jpg';
import '../assets/styles/Tienda.css';
import MainLoyaut from '../layouts/MainLayout';
// Trae todas las imágenes de la carpeta
const images = import.meta.glob('../assets/images/*.{jpg,png,jpeg}', { eager: true, as: 'url' });

// Esto devuelve un objeto con rutas
console.log(images);
// Ejemplo de acceso: Object.values(images)[0] -> URL de la primera imagen

function Tienda() {
  // Definimos un array de productos (puede venir de un API o JSON)
  const productos = [
    {
      id: 1,
      imagen: aceite,
      titulo: 'Zanahorias',
      descripcion: 'Frescas y orgánicas.',
      precio: 1200,
      ultimaActualizacion: '2025-10-06',
      categoria: 'Verduras',
      stock: true,
      enOferta: true,
      descuento: 10
    },{
        id: 1,
      imagen: aceite,
      titulo: 'Zanahorias',
      descripcion: 'Frescas y orgánicas.',
      precio: 1200,
      ultimaActualizacion: '2025-10-06',
      categoria: 'Verduras',
      stock: true,
      enOferta: true,
      descuento: 10
        
    },{
        id: 1,
      imagen: aceite,
      titulo: 'Zanahorias',
      descripcion: 'Frescas y orgánicas.',
      precio: 1200,
      ultimaActualizacion: '2025-10-06',
      categoria: 'Verduras',
      stock: true,
      enOferta: true,
      descuento: 10
        
    },{
        id: 1,
      imagen: aceite,
      titulo: 'Zanahorias',
      descripcion: 'Frescas y orgánicas.',
      precio: 1200,
      ultimaActualizacion: '2025-10-06',
      categoria: 'Verduras',
      stock: true,
      enOferta: true,
      descuento: 10
        
    },{
        id: 1,
      imagen: aceite,
      titulo: 'Zanahorias',
      descripcion: 'Frescas y orgánicas.',
      precio: 1200,
      ultimaActualizacion: '2025-10-06',
      categoria: 'Verduras',
      stock: true,
      enOferta: true,
      descuento: 10
        
    },{
        id: 1,
      imagen: aceite,
      titulo: 'Zanahorias',
      descripcion: 'Frescas y orgánicas.',
      precio: 1200,
      ultimaActualizacion: '2025-10-06',
      categoria: 'Verduras',
      stock: false,
      enOferta: true,
      descuento: 10
        
    }
  ];

  return (
    <div className="tienda-fondo">
      
      <h2></h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        {productos.map(producto => (
          <div key={producto.id} className="col">
            <ProductCard
              imagen={producto.imagen}
              titulo={producto.titulo}
              descripcion={producto.descripcion}
              precio={producto.precio}
              ultimaActualizacion={producto.ultimaActualizacion}
              categoria={producto.categoria}
              stock={producto.stock}
              enOferta={producto.enOferta}
              descuento={producto.descuento}
            />
          </div>
        ))}
      </div>
      <MainLoyaut/>
    </div>
  );
}

export default Tienda;
