import React, { useState } from "react";

export default function Register() {
  const initialState = {
    usuario: "",
    nombre: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialState);

  const cargarRegistro = async (e) => {
    e.preventDefault();

    const formInfo = {
      usuario: e.target[0].value,
      nombre: e.target[1].value,
      password: e.target[2].value,
    };

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formInfo),
      });

      if (response.ok) {
        setFormValues(initialState);
      } else {
        console.error("Error al cargar el usuario");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="container text-center bg-black h-50 w-50 p-4 mt-4 rounded">
      <h1 className="text-center">Registro</h1>

      <form
        onSubmit={cargarRegistro}
        className="w-100 justify-content-center align-items-center"
      >
        <div className="w-100 row p-4">
          <label htmlFor="usuario" className="col-sm-2 col-form-label">
            Usuario:
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Ingrese el usuario"
              value={formValues.usuario}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="w-100 row p-4">
          <label htmlFor="nombre" className="col-sm-2 col-form-label">
            Nombre:
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="nombre"
              name="nombre"
              value={formValues.nombre}
              onChange={handleInputChange}
              placeholder="Ingrese el nombre"
              required
            />
          </div>
        </div>

        <div className="w-100 row p-4">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Contraseña:
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              placeholder="ingrese la contraseña"
              required
            />
          </div>
        </div>

        <div className="d-flex gap-5 align-items-center justify-content-center">
          <input
            className="btn btn-success d-block"
            type="submit"
            value="Registrar"
          />
        </div>
      </form>
    </div>
  );
}
