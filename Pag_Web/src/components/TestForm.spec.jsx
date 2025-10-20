import { fireEvent, render, screen, within } from "@testing-library/react"; 
 import { Outlet, useLocation } from "react-router-dom";
import React from "react"
import { before } from "dom/lib/mutation";
import  FormRegistro from "./Form";
import { MemoryRouter } from 'react-router-dom';


const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));
const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

beforeEach(() => {
    jest.clearAllMocks();
    Storage.prototype.getItem = jest.fn(() => "false");
    Storage.prototype.setItem = jest.fn();
});



describe('FormRegistro Component', () => {

    it('Muestra el formulario correctamente', () => {
        render(
            <MemoryRouter>
                <FormRegistro />
            </MemoryRouter>
        ); 
        
    
        expect(screen.getByLabelText("Nombre")).toBeInTheDocument();    
        expect(screen.getByLabelText("Apellido")).toBeInTheDocument();
       
        expect(screen.getByLabelText("Correo")).toBeInTheDocument();
     
        expect(screen.getByRole("button", { name: "Registrar" })).toBeInTheDocument();

     
        expect(screen.getByLabelText("Año de Nacimiento")).toBeInTheDocument();
        expect(screen.getByLabelText("Contraseña")).toBeInTheDocument();
        expect(screen.getByLabelText("Dirección")).toBeInTheDocument();
    });
});   
    
// ---

describe('Informacion de usuario en FormRegistro Component', () => {
  
    const mockUserData = {
        nombre: "Juan",
        apellido: "Lopez",
        correo: "jp@example.cl",
        clave: "password123", 
        direccion: "av. siempre viva 742",
        anioNacimiento: "2000-01-01"
    };
    
    it ('Permite ingresar datos en el formulario', () => {
        render(
            <MemoryRouter>
                <FormRegistro />
            </MemoryRouter>
        ); 
        
        const nombreInput = screen.getByLabelText("Nombre");
        
        fireEvent.change(nombreInput, { target: { value: mockUserData.nombre } });
        
        expect(nombreInput).toHaveValue(mockUserData.nombre);
    
    });

    it('Permite el registro exitoso al enviar datos válidos', () => {
        render(
            <MemoryRouter>
                <FormRegistro />
            </MemoryRouter>
        ); 

        fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: mockUserData.nombre } });
        fireEvent.change(screen.getByLabelText("Apellido"), { target: { value: mockUserData.apellido } });
        fireEvent.change(screen.getByLabelText("Año de Nacimiento"), { target: { value: mockUserData.anioNacimiento } });
        fireEvent.change(screen.getByLabelText("Correo"), { target: { value: mockUserData.correo } });
        fireEvent.change(screen.getByLabelText("Contraseña"), { target: { value: mockUserData.clave } });
        fireEvent.change(screen.getByLabelText("Dirección"), { target: { value: mockUserData.direccion } });

        fireEvent.click(screen.getByRole("button", { name: "Registrar" }));

        expect(mockAlert).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith('/Usuario');
    });

});