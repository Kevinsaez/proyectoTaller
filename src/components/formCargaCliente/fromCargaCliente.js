import React, { useState } from 'react';

export default function FormCargaCliente() {
    const initialState = {
        nomApe: '',
        nroDni: '',
        localidad: '',
        domicilio: '',
        email: '',
        telefono: ''
    };

    const [formValues, setFormValues] = useState(initialState);

    const cargarCliente = async (e) => {
        e.preventDefault();
        
        const formInfo = {
            nomApe: e.target[0].value,
            nroDni: e.target[1].value,
            localidad: e.target[2].value,
            domicilio: e.target[3].value,
            email: e.target[4].value,
            telefono: e.target[5].value
        };

        try {
            const response = await fetch("http://localhost:4000/cargarCliente", {
                method: "post",
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify(formInfo)
            });

            if (response.ok) {
                setFormValues(initialState);
            } else {
                console.error('Error al cargar el cliente');
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    return (
        <div className="container align-items-center justify-content-center d-flex flex-column bg-dark w-50 m-2 p-5">
            <h2 className="text-center m-4 justify-content-center">Formulario Carga de Cliente</h2>
            <form onSubmit={cargarCliente} className="m-2 d-flex flex-column align-items-center justify-content-center gap-3 w-75">
                <div className="col-sm-10 w-100">
                    <label className="form-label mt-3" htmlFor="nomApe">Nombre y apellido:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nomApe"
                        name="nomApe"
                        placeholder=" Ingrese el Nombre y Apellido"
                        value={formValues.nomApe}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-sm-10 w-100">
                    <label className="form-label mt-3" htmlFor="nroDni">Dni:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="nroDni"
                        name="nroDni"
                        placeholder="ingrese el DNI"
                        value={formValues.nroDni}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-sm-10 w-100">
                    <label className="form-label mt-3" htmlFor="localidad">Localidad:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="localidad"
                        name="localidad"
                        placeholder="ingrese la Localidad"
                        value={formValues.localidad}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-sm-10 w-100">
                    <label className="form-label mt-3" htmlFor="domicilio">Domicilio:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="domicilio"
                        name="domicilio"
                        placeholder="Ingrese el Domicilio"
                        value={formValues.domicilio}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-sm-10 w-100">
                    <label className="form-label mt-3" htmlFor="email">e-mail:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Ingrese el Email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-sm-10 w-100">
                    <label className="form-label mt-3" htmlFor="telefono">Teléfono:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="telefono"
                        name="telefono"
                        placeholder="Ingrese elTelefono"
                        value={formValues.telefono}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="d-flex gap-5 align-items-center justify-content-center">
                    <input
                        className="btn btn-success d-block"
                        type="submit"
                        value="Cargar"
                    />
                </div>
            </form>
        </div>
    );
}

