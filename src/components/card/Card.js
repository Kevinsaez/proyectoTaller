import { Fragment } from "react";

export default function Card({data}) {

    return (

            <Fragment>
                <div className="card m-4">
                <div className="d-flex flex-column card-body">
                    <h2 className="align-items-center card-title w-100 m-2 p-2 gap-2">{data.nomApe}</h2>
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
                    <button type="button" className="btn btn-success">Vehículos</button>
                </div>
                </Fragment>
    );
  }