import { Fragment, useState } from "react";
import FormEditarCliente from "../fromEditarCliente/formEditarCliente";
import { Link } from "react-router-dom";
export default function Card({ data, setclienteEliminado, editarCliente }) {
    
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const eliminarCliente = async () => {

        let idCliente = data.idCliente;
        let respuesta = await fetch("http://localhost:4000/eliminarCliente", {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ idCliente: idCliente })
        })
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                setclienteEliminado(true); setTimeout(() => { setclienteEliminado(false) }, 3000);
            })
            .catch((err) => {
                console.log(err);
            })
        return respuesta;
    }

    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    const cancelarEdicion = () => {
        setMostrarFormulario(false);
    };

    return (

        <Fragment>
        
            <section>
            {mostrarFormulario ? (
                    <FormEditarCliente data={data} cancelarEdicion={cancelarEdicion}/>
                ) : (
            <div className="card container-fluid flex-wrap m-2">
                <div className="d-flex flex-column card-body">
                    <h2 className="align-items-center card-title w-100  p-2">{data.nomApe}</h2>
                    <hr />
                    <h3>DNI:</h3>
                    <p className="card-text gap-2">{data.nroDni}</p>
                    <h3>LOCALIDAD:</h3>
                    <p className="card-text gap-2">{data.localidad}</p>
                    <h3>DOMICILIO:</h3>
                    <p className="card-text gap-2">{data.domicilio}</p>
                    <h3>E-MAIL:</h3>
                    <p className="card-text gap-2">{data.email}</p>
                    <h3>TELEFONO:</h3>
                    <p className="card-text gap-2">{data.telefono}</p>
                </div>
                <div className="d-flex gap-2 m-2">
                    <button type="button" className="btn btn-danger fs-5 p-2 w-50" onClick={eliminarCliente}>Eliminar</button>
                    <button type="button" className="btn btn-warning fs-5 p-2 w-50" onClick={toggleFormulario}>Editar</button>
                </div>
                <div className="d-flex gap-2 m-2">
                    <Link to = "/vehiculosCliente/" className="btn btn-dark fs-5 p-2 w-100">ver vehiculos</Link>
                </div>
            </div>
             )}
            </section>
        </Fragment>
    );
}