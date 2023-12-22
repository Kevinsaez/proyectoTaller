export default function FormCargaCliente() {
    return (
        
            <div className="container align-items-center justify-content-center d-flex flex-column bg-dark w-50 m-2 p-5">
               <h2 className="text-center m-4 justify-content-center">Formulario Carga de Cliente</h2>
               <form action='' className="m-2 d-flex flex-column align-items-center justify-content-center gap-3 w-75">
               <div className="col-sm-10 w-100">
                        <input type="text" className="form-control" id="inputUserName" name="nomApe" placeholder='Nombre y Apellido' required/>
                    </div>
                    <div className="col-sm-10 w-100">
                        <input type="text" className="form-control" id="inputUserName" name="nroDni" placeholder='DNI' required/>
                    </div>
                    <div className="col-sm-10 w-100">
                        <input type="text" className="form-control" id="inputUserName" name="localidad" placeholder='Localidad' required/>
                    </div>
                    <div className="col-sm-10 w-100">
                        <input type="text" className="form-control" id="inputUserName" name="domicilio" placeholder='Domicilio' required/>
                    </div>
                    <div className="col-sm-10 w-100">
                        <input type="email" className="form-control" id="inputEmail" name="email" placeholder='Email' required/>
                    </div>
                    <div className="col-sm-10 w-100">
                        <input type="text" className="form-control" id="inputUserName" name="telefono" placeholder='Telefono' required/>
                    </div>                     
                    <div className="d-flex gap-5 align-items-center justify-content-center">
                        <button type="submit" className="btn btn-primary">Cargar</button>
                        <button type="submit" className="btn btn-primary">Volver</button>
                    </div>
                </form>
            </div>
    );
  }