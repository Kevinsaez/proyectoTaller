// import {useState } from "react";

export default function CardVehiculo({datos}) {
    
    return (
           
            <section>
            <div className="card container-fluid flex-wrap m-2">
                <div className="d-flex flex-column card-body">
                    <h2 className="align-items-center card-title w-100  p-2">{datos.dominio}</h2>
                    <hr />
                    <h3>TITULAR:</h3>
                    <p className="card-text gap-2">{datos.titular}</p>
                    <h3>MARCA:</h3>
                    <p className="card-text gap-2">{datos.marca}</p>
                    <h3>MODELO:</h3>
                    <p className="card-text gap-2">{datos.modelo}</p>
                    <h3>LOCALIDAD CEDULA:</h3>
                    <p className="card-text gap-2">{datos.localidadCedula}</p>
                    <h3>NUMERO DE MOTOR:</h3>
                    <p className="card-text gap-2">{datos.nroMotor}</p>
                    <h3>NUMER DE CHASIS:</h3>
                    <p className="card-text gap-2">{datos.neroChasis}</p>                    
                </div>
            </div>
            </section>
  
    );
}