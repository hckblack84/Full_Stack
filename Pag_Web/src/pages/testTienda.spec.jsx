import { fireEvent, render, screen, within } from "@testing-library/react"; 
 import { Outlet, useLocation } from "react-router-dom";
import React from "react"
import { before } from "dom/lib/mutation";
import TiendaHuertoHogar from "./Tienda";
import { MemoryRouter } from 'react-router-dom';





beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => "[]")
    Storage.prototype.setItem = jest.fn()
})

describe('Tienda Page', () => {
    const mockProducts = 
        {id: 'FR001', 
            nombre: 'Manzanas Fuji', 
            categoria: 'Frutas Frescas', 
            precio: 2500, 
            imagen: 'manzanas', 
            stock: true, 
            enOferta: true, 
            descuento: 15, 
            calificacion: 5 }
    


it('Muestra correctamente la página y productos', () => {
        
        render(
            <MemoryRouter initialEntries={['/tienda']}>
                <TiendaHuertoHogar />
            </MemoryRouter>
        );

        expect(screen.getByText("Productos")).toBeInTheDocument();
        expect(screen.getByText("Manzanas Fuji")).toBeInTheDocument();
       
    });

})

describe('Funcionalidad de filtro en Tienda Page', () => {  
    it('Filtra productos al hacer clic en un botón de categoría', () => {      
        render(
            <MemoryRouter initialEntries={['/tienda']}>
                <TiendaHuertoHogar />
            </MemoryRouter>
        );
    
        expect(screen.getByText("Manzanas Fuji")).toBeInTheDocument();
        expect(screen.getByText("Zanahorias Orgánicas")).toBeInTheDocument();
        const botonVerduras = screen.getByRole('button', { name: 'Verduras Orgánicas' });        
        fireEvent.click(botonVerduras);
        expect(screen.getByText("Zanahorias Orgánicas")).toBeInTheDocument();           
        expect(screen.queryByText("Manzanas Fuji")).not.toBeInTheDocument();
        fireEvent.click(screen.getByRole('button', { name: 'Todas' }));
        expect(screen.getByText("Manzanas Fuji")).toBeInTheDocument();
    });
});



describe('Funcionalidad de carrito en Tienda Page (agregar)', () => {
it('Agrega un producto del carrito al hacer clic en el botón de carrito', async () => {
  render(
    <MemoryRouter initialEntries={['/tienda']}>
      <TiendaHuertoHogar />
    </MemoryRouter>
  );  

const cardManzanasText = await screen.findByText('Naranjas Valencia');
const cardManzanas = cardManzanasText.closest('.producto-card');

const botonAgregar = within(cardManzanas).getByRole('button', { name: /añadir al carrito/i });
fireEvent.click(botonAgregar);

const botonCarrito = screen.getByLabelText('abrir-carrito');
fireEvent.click(botonCarrito);

const [productoEnCarrito] = await screen.findAllByText('Naranjas Valencia');
expect(productoEnCarrito).toBeInTheDocument();

 
}); 

});



describe('Funcionalidad de carrito en Tienda Page (eliminar)', () => {
it('Elimina un producto del carrito al hacer clic en el botón de papelera', async () => {
  render( 
  <MemoryRouter initialEntries={['/tienda']}>
      <TiendaHuertoHogar />
    </MemoryRouter>
  );
const cardManzanasText = await screen.findByText('Naranjas Valencia');
const cardManzanas = cardManzanasText.closest('.producto-card');

const botonAgregar = within(cardManzanas).getByRole('button', { name: /añadir al carrito/i });
fireEvent.click(botonAgregar);

const botonCarrito = screen.getByLabelText('abrir-carrito');
fireEvent.click(botonCarrito);

const [productoEnCarrito] = await screen.findAllByText('Naranjas Valencia');
expect(productoEnCarrito).toBeInTheDocument();
const botonEliminar = screen.getByLabelText('eliminar Naranjas Valencia');
fireEvent.click(botonEliminar);
expect(screen.queryByText('Naranjas Valencia')).toBeInTheDocument();

});



});
