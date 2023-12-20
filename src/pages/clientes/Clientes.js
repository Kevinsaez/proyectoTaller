import { useState , useEffect,Fragment } from 'react';
import Nav from "../../components/navegacion/Navegacion";
import Card from "../../components/card/Card";
import "./Clientes.css"; 

export default function Clientes() {
  const [clientes,setClientes]=useState([]);

  const traerInfo=async()=>{
    await fetch("http://localhost:4000/")
    .then((res)=>{return res.json()})
    .then((data)=>setClientes(data))
    
    .catch((err)=>{console.log(err)})
  }

  useEffect(()=>{
    traerInfo();
  },[]);


  return (
    <Fragment>
      <Nav />
      <main className="container-fluid">
        <div className="card-container d-flex flex-wrap justify-content-between align-items-center">
         {clientes.map((cliente)=>{
          return <Card key={cliente.idCliente} data={cliente}/>
         })}
        </div>
      </main>
      </Fragment>
  );
}
