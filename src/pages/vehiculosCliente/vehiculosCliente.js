import { useState, useEffect} from 'react';
import Nav from "../../components/navegacion/Navegacion";
import CardVehiculo from '../../components/cardVehiculo/cardVehiculo';

export default function VehiculosCliente() {
 
  const [vehiculos, setVehiculos] = useState([]);
    const traerInfo = async () => {
        try {
          const res = await fetch(`http://localhost:4000/vehiculosCliente/74`);
          if (res.ok) {
            const datos = await res.json();
            setVehiculos(datos);
          } else {
            console.error('Error al obtener la información');
          }
        } catch (err) {
          console.error('Error en la solicitud:', err);
        }
      }
      useEffect(() => {
        traerInfo();
      }, []);

    return (
        <main className="">
            <Nav/>
            <h3 className="text-center m-4 fs-10 p-4 alert alert-primary">Vehiculos Cliente</h3>
            <div className="card-container d-flex flex-wrap justify-content-center align-items-center">
            {vehiculos.map((vehiculo) => {
                  return <CardVehiculo key={vehiculo.idVehiculo} datos={vehiculo}/>
                })}   
            </div>
        </main>
    );
}