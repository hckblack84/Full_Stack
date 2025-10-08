import { useState } from "react";
import '../assets/styles/Form.css';
import { useNavigate } from 'react-router-dom';

function FormRegistro() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        anioNacimiento: "",
        correo: "",
        clave: "",
        direccion: ""
    });

    const [errores, setErrores] = useState({});
    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();

    // Validación de cada campo
    const validar = () => {
        let newErrors = {};

        if (!formData.nombre || /\d/.test(formData.nombre))
            newErrors.nombre = "El nombre no puede estar vacío ni contener números";

        if (!formData.apellido || /\d/.test(formData.apellido))
            newErrors.apellido = "El apellido no puede estar vacío ni contener números";

        if (formData.anioNacimiento < 1900 || formData.anioNacimiento > new Date().getFullYear())
            newErrors.anioNacimiento = "Debe ingresar un año válido";

        if (!formData.correo || !formData.correo.includes("@"))
            newErrors.correo = "Correo inválido";

        if (!formData.clave || formData.clave.length < 7)
            newErrors.clave = "La contraseña debe tener al menos 7 caracteres";

        if (!formData.direccion)
            newErrors.direccion = "La dirección no puede estar vacía";

        setErrores(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validar()) {
            // Si todo está correcto, se guarda la información
            const nuevoUsuario = { ...formData };
            setUsuarios([...usuarios, nuevoUsuario]);

            alert("Registro completado con éxito ✅");

            // Limpia los campos
            setFormData({
                nombre: "",
                apellido: "",
                anioNacimiento: "",
                correo: "",
                clave: "",
                direccion: ""
            });
            setErrores({});

            // Redirige a la página de usuario
            navigate('/Usuario');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Registro de Usuario</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
                {/* Nombre */}
                <div className="mb-3 row">
                        <label htmlFor="nombre" className="col-sm-2 col-form-label" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                                Nombre
                        </label>
                        <div className="col-sm-10">
                                <input
                                        type="text"
                                        id="nombre"
                                        className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
                                        value={formData.nombre}
                                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                        style={{ fontWeight: "bold", fontSize: "1.1rem" }}
                                />
                                {errores.nombre && <div className="invalid-feedback" >{errores.nombre}</div>}
                        </div>
                </div>

                {/* Apellido */}
                <div className="mb-3 row">
                    <label htmlFor="apellido" className="col-sm-2 col-form-label" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Apellido</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            id="apellido"
                            className={`form-control ${errores.apellido ? "is-invalid" : ""}`}
                            value={formData.apellido}
                            onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                        />
                        {errores.apellido && <div className="invalid-feedback">{errores.apellido}</div>}
                    </div>
                </div>

                {/* Año de nacimiento */}
                <div className="mb-3 row">
                    <label htmlFor="anioNacimiento" className="col-sm-2 col-form-label" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Año de Nacimiento</label>
                    <div className="col-sm-10">
                        <input
                            type="Date"
                            id="anioNacimiento"
                            className={`form-control ${errores.anioNacimiento ? "is-invalid" : ""}`}
                            value={formData.anioNacimiento}
                            onChange={(e) => setFormData({ ...formData, anioNacimiento: e.target.value })}
                        />
                        {errores.anioNacimiento && <div className="invalid-feedback">{errores.anioNacimiento}</div>}
                    </div>
                </div>

                {/* Correo */}
                <div className="mb-3 row">
                    <label htmlFor="correo" className="col-sm-2 col-form-label" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Correo</label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            id="correo"
                            className={`form-control ${errores.correo ? "is-invalid" : ""}`}
                            value={formData.correo}
                            onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        />
                        {errores.correo && <div className="invalid-feedback">{errores.correo}</div>}
                    </div>
                </div>

                {/* Clave */}
                <div className="mb-3 row">
                    <label htmlFor="clave" className="col-sm-2 col-form-label" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Contraseña</label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            id="clave"
                            className={`form-control ${errores.clave ? "is-invalid" : ""}`}
                            value={formData.clave}
                            onChange={(e) => setFormData({ ...formData, clave: e.target.value })}
                        />
                        {errores.clave && <div className="invalid-feedback">{errores.clave}</div>}
                    </div>
                </div>

                {/* Dirección */}
                <div className="mb-3 row">
                    <label htmlFor="direccion" className="col-sm-2 col-form-label"style={{ fontWeight: "bold", fontSize: "1.2rem" }} >Dirección</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            id="direccion"
                            className={`form-control ${errores.direccion ? "is-invalid" : ""}`}
                            value={formData.direccion}
                            onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                        />
                        {errores.direccion && <div className="invalid-feedback">{errores.direccion}</div>}
                    </div>
                </div>

                {/* Botón */}
                <div className="text-center">
                    <button type="submit" className="btn btn-primary px-4">
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormRegistro;
