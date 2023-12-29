import { Fragment } from "react";
import Nav from "../../components/navegacion/Navegacion";
import FormEditarCliente from '../../components/fromEditarCliente/formEditarCliente'


export default function editarClientes() {

  return (
    <Fragment>
      <Nav />
      <FormEditarCliente/>
    </Fragment>
  );
}
