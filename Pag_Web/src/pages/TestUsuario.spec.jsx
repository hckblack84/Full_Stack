import { fireEvent, render, screen } from "@testing-library/react"; 
import { MemoryRouter } from 'react-router-dom';
import React from "react"
import Usuario from "./Usuario";

// Mockear useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

const mockSetItem = jest.fn();
const mockGetItem = jest.fn();
const mockRemoveItem = jest.fn();
const mockDispatchEvent = jest.fn();

global.alert = jest.fn();

Object.defineProperty(window, 'localStorage', {
    value: {
        getItem: mockGetItem,
        setItem: mockSetItem,
        removeItem: mockRemoveItem,
        clear: jest.fn(),
    },
    writable: true
});

window.dispatchEvent = mockDispatchEvent;

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Usuario Component', () => {

    it('1. Renderiza la información del usuario', () => {
        render(
            <MemoryRouter>
                <Usuario />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: 'Lucas Olmedo' })).toBeInTheDocument();
        expect(screen.getByText('Lucas.olmedo@example.com')).toBeInTheDocument();
        expect(screen.getByText('+56 9 1234 5678')).toBeInTheDocument();
        expect(screen.getByText('✏️ Editar Perfil')).toBeInTheDocument();
    });

    it('2. Activa el modo edición al hacer clic en Editar Perfil', () => {
        render(
            <MemoryRouter>
                <Usuario />
            </MemoryRouter>
        );

        const editButton = screen.getByText('✏️ Editar Perfil');
        fireEvent.click(editButton);

        expect(screen.getByText('💾 Guardar')).toBeInTheDocument();
        expect(screen.getByText('❌ Cancelar')).toBeInTheDocument();
    });

    it('3. Permite editar el nombre del usuario', () => {
        render(
            <MemoryRouter>
                <Usuario />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('✏️ Editar Perfil'));

        const inputs = screen.getAllByDisplayValue('Lucas Olmedo');
        const nombreInput = inputs[0];
        
        fireEvent.change(nombreInput, { target: { value: 'Juan Pérez' } });

        expect(nombreInput.value).toBe('Juan Pérez');
    });

    it('4. Guarda los cambios correctamente', () => {
        render(
            <MemoryRouter>
                <Usuario />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('✏️ Editar Perfil'));

        const inputs = screen.getAllByDisplayValue('Lucas Olmedo');
        fireEvent.change(inputs[0], { target: { value: 'María González' } });

        const saveButton = screen.getByText('💾 Guardar');
        fireEvent.click(saveButton);

        expect(global.alert).toHaveBeenCalledWith('Cambios guardados correctamente');
        expect(screen.getByText('✏️ Editar Perfil')).toBeInTheDocument();
    });

    it('5. Cancela la edición sin guardar cambios', () => {
        render(
            <MemoryRouter>
                <Usuario />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('✏️ Editar Perfil'));

        const inputs = screen.getAllByDisplayValue('Lucas Olmedo');
        fireEvent.change(inputs[0], { target: { value: 'Cambio Temporal' } });

        fireEvent.click(screen.getByText('❌ Cancelar'));

        expect(screen.getByText('✏️ Editar Perfil')).toBeInTheDocument();
       
    });

    it('6. Permite editar el email', () => {
        render(
            <MemoryRouter>
                <Usuario />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('✏️ Editar Perfil'));

        const emailInput = screen.getByDisplayValue('Lucas.olmedo@example.com');
        fireEvent.change(emailInput, { target: { value: 'nuevo@email.com' } });

        expect(emailInput.value).toBe('nuevo@email.com');
    });

    it('7. Permite editar el teléfono', () => {
        render(
            <MemoryRouter>
                <Usuario />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('✏️ Editar Perfil'));

        const telefonoInput = screen.getByDisplayValue('+56 9 1234 5678');
        fireEvent.change(telefonoInput, { target: { value: '+56 9 8765 4321' } });
        expect(telefonoInput.value).toBe('+56 9 8765 4321');

    });

    it('8. Cierra sesión correctamente', () => {
        render(
            <MemoryRouter>
                <Usuario />
            </MemoryRouter>
        );

        const logoutButton = screen.getByText('Cerrar Sesión');
        fireEvent.click(logoutButton);

        expect(mockRemoveItem).toHaveBeenCalledWith('isAuthenticated');
        expect(mockRemoveItem).toHaveBeenCalledWith('usuario');
        expect(mockDispatchEvent).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    it('9. Muestra las estadísticas correctamente', () => {
        render(
            <MemoryRouter>
                <Usuario />
            </MemoryRouter>
        );

        expect(screen.getByText('Pedidos Realizados')).toBeInTheDocument();
        expect(screen.getByText('Productos Favoritos')).toBeInTheDocument();
        expect(screen.getByText('Calificación Promedio')).toBeInTheDocument();
    });

});