import { useState } from "react"

export default function FormEditarCliente({data,cancelarEdicion}) {

    const initialState = {
        nomApe: data.nomApe,
        nroDni: data.nroDni,
        localidad: data.localidad,
        domicilio: data.domicilio,
        email: data.email,
        telefono: data.telefono
    };
    
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const idCliente = data.idCliente;
        const apiUrl = `http://localhost:4000/cargarCliente/${idCliente}`;

        fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Hubo un problema al actualizar el usuario.');
                }
                return response.json();
            })
            .then(data => {

                console.log('Usuario actualizado exitosamente:', data);
                setFormData(initialState);
            })
            .catch(error => {

                console.error('Error al actualizar el usuario:', error);
            });

    };

    return (
        <>
           
            <div className="container align-items-center justify-content-center d-flex flex-column bg-dark w-100 m-1">
                 <button className='row btn btn-info align-self-end m-4 fs-5' onClick={()=>cancelarEdicion()}>x</button>
                <h2 className="text-center justify-content-center">Formulario Editar de Cliente</h2>
                <form onSubmit={handleSubmit} className="m-2 d-flex flex-column align-items-center justify-content-center gap-1 w-75">
                    <div className="col-sm-10 w-100">
                        <label className="form-label " htmlFor="nomApe">Nombre y apellido:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nomApe"
                            name="nomApe"
                            placeholder=" Ingrese el Nombre y Apellido"
                            value={formData.nomApe}
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
                            value={formData.nroDni}
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
                            value={formData.localidad}
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
                            value={formData.domicilio}
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
                            value={formData.email}
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
                            placeholder="Ingrese el Telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="d-flex gap-5 align-items-center justify-content-center">
                        <button className="btn btn-success d-block mt-2"
                            type="submit">
                            Editar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );

}
