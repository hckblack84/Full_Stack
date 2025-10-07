
function ProductCard({          
  imagen, 
  titulo, 
  descripcion, 
  precio, 
  ultimaActualizacion,
  categoria,
  stock = true, 
  enOferta = false,
  descuento = 0
}) {
 
  const precioFinal = enOferta ? precio - (precio * descuento / 100) : precio;

  return (
    <div className="row row-cols-1 row-cols-md-2 g-5">
      <div className="col">
        <div className="card h-100 custom-card">
          <img src={imagen} className="card-img-top" alt={titulo} />
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text">
              <strong>Categoría:</strong> {categoria}
            </p>
            <p className="card-text">
              <strong>Precio: </strong> 
              {enOferta ? (
                <>
                  <span className="text-danger">${precioFinal.toFixed(2)}</span>{' '}
                  <span className="text-muted text-decoration-line-through">${precio}</span>{' '}
                  <small className="text-success">(-{descuento}%)</small>
                </>
              ) : (
                <>${precio}</>
              )}
            </p>
            <p className={`card-text ${stock ? 'text-success' : 'text-danger'}`}>
              {stock ? 'Disponible' : 'Sin stock'}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              Última actualización: {ultimaActualizacion}
              <button>Información</button>
              <button>Comprar</button>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
