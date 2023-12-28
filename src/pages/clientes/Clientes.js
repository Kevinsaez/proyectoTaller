import { useState, useEffect, Fragment } from 'react';
import Nav from "../../components/navegacion/Navegacion";
import Card from "../../components/card/Card";
import FormCargaCliente from '../../components/formCargaCliente/fromCargaCliente'
import "./Clientes.css";

export default function Clientes() {
  const [clientes, setClientes] = useState([{ idCliente: 'A' }]);
  const [mostrarClientes, setmostrarClientes] = useState(true);
  const [mostrarForm, setmostrarForm] = useState(false);
  const [clienteEliminado, setclienteEliminado] = useState(false);


  const traerInfo = async () => {
    await fetch("http://localhost:4000/")
      .then((res) => { return res.json() })
      .then((data) => setClientes(data))
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    traerInfo();
  }, []);

  useEffect(() => {
    if (clienteEliminado === true) {
      traerInfo();
    }
  }, [clienteEliminado]);

  const verClientes = () => {
    setmostrarClientes(true);
    setmostrarForm(false);
  }
  const verForm = () => {
    setmostrarClientes(false);
    setmostrarForm(true);
  }

  return (
    <Fragment>
      <Nav />
      <main className="container-fluid ">
        {mostrarClientes ?
          <section className='cards'>
            <button className='btn btn-warning m-4 fs-5' onClick={() => verForm()}>Caragar cliente</button>
            {clienteEliminado === false ?
              <div className="card-container d-flex flex-wrap justify-content-center align-items-center">
                {clientes.map((cliente) => {
                  return <Card key={cliente.idCliente} data={cliente} setclienteEliminado={setclienteEliminado} />
                })}
              </div> :
              <h3 className='mensaje text-center alert-warning text-center fs-10 align-items-center justify-content-center'>Cliente eliminado!!!</h3>}
          </section> : ''}
        {mostrarForm ?
          <section className='Form d-flex flex-column align-items-center'>
            <button className='row btn btn-info align-self-end m-4 fs-5' onClick={() => verClientes()}>x</button>
            <FormCargaCliente />
          </section> : ''}
      </main>
    </Fragment>
  );
}
