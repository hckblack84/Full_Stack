import { fireEvent, render, screen } from "@testing-library/react"; 
import { MemoryRouter } from 'react-router-dom';
import React from "react"
import Login from "./LoginLayout";

// Mockear useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

// Mockear MainLayout
jest.mock('./MainLayout', () => {
    return function MainLayout() {
        return <div>MainLayout Mock</div>;
    };
});

// ✅ CORRECCIÓN: Crear mocks antes de asignarlos
const mockSetItem = jest.fn();
const mockGetItem = jest.fn();
const mockRemoveItem = jest.fn();
const mockDispatchEvent = jest.fn();

// Mockear alert
global.alert = jest.fn();

// ✅ Asignar los mocks correctamente
Object.defineProperty(window, 'localStorage', {
    value: {
        getItem: mockGetItem,
        setItem: mockSetItem,
        removeItem: mockRemoveItem,
        clear: jest.fn(),
    },
    writable: true
});

// ✅ Mockear dispatchEvent correctamente
window.dispatchEvent = mockDispatchEvent;

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Login Component', () => {

    it('1. Renderiza el formulario correctamente', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        expect(screen.getByPlaceholderText('Ingresa tu usuario')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Ingresa tu contraseña')).toBeInTheDocument();
        expect(screen.getByText('Ingresar')).toBeInTheDocument();
    });

    it('2. Login exitoso con credenciales correctas', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const usuarioInput = screen.getByPlaceholderText('Ingresa tu usuario');
        const passwordInput = screen.getByPlaceholderText('Ingresa tu contraseña');
        const loginButton = screen.getByText('Ingresar');

        fireEvent.change(usuarioInput, { target: { value: 'admin' } });
        fireEvent.change(passwordInput, { target: { value: 'admin123' } });
        fireEvent.click(loginButton);

        // ✅ Ahora funcionará correctamente
        expect(mockSetItem).toHaveBeenCalledWith('isAuthenticated', 'true');
        expect(mockSetItem).toHaveBeenCalledWith('usuario', 'admin');
        expect(mockDispatchEvent).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith('/Usuario');
        expect(global.alert).not.toHaveBeenCalled();
    });

    it('3. Muestra alerta con campos vacíos', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const loginButton = screen.getByText('Ingresar');
        fireEvent.click(loginButton);

        expect(global.alert).toHaveBeenCalledWith('Por favor, completa todos los campos');
        expect(mockNavigate).not.toHaveBeenCalled();
    });

    it('4. Muestra alerta con credenciales incorrectas', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const usuarioInput = screen.getByPlaceholderText('Ingresa tu usuario');
        const passwordInput = screen.getByPlaceholderText('Ingresa tu contraseña');
        const loginButton = screen.getByText('Ingresar');

        fireEvent.change(usuarioInput, { target: { value: 'wrong' } });
        fireEvent.change(passwordInput, { target: { value: 'wrong' } });
        fireEvent.click(loginButton);

        expect(global.alert).toHaveBeenCalledWith('Usuario o contraseña incorrectos');
        expect(mockNavigate).not.toHaveBeenCalled();
    });

});