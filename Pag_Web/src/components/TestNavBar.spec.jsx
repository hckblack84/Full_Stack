import { fireEvent, render, screen, within } from "@testing-library/react"; 
 import { Outlet, useLocation } from "react-router-dom";
import React from "react"
import { before } from "dom/lib/mutation";
import Navbar from "./Navbar";
import { MemoryRouter } from 'react-router-dom';


beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => "false")
    Storage.prototype.setItem = jest.fn()
})
describe('Navbar Component', () => {
    it('Muestra enlaces correctos cuando no está autenticado', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        ); 
    
expect(screen.getByText("Login")).toBeInTheDocument();    
expect(screen.queryByText("Perfil")).not.toBeInTheDocument();
expect(screen.getByText("Inicio")).toBeInTheDocument();
expect(screen.getByText("Tienda")).toBeInTheDocument();
expect(screen.getByText("Nosotros")).toBeInTheDocument();
});


    it('Muestra enlaces correctos cuando está autenticado', () => {
        Storage.prototype.getItem = jest.fn(() => "true")
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
    expect(screen.getByText("Perfil")).toBeInTheDocument();    
    expect(screen.queryByText("Login")).not.toBeInTheDocument();
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Tienda")).toBeInTheDocument();
    expect(screen.getByText("Nosotros")).toBeInTheDocument();})
    });

  