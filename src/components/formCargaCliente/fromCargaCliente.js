export default function FormCargaCliente(setclienteAgregado) {
    
    const cargarCliente = async (e) => {
        e.preventDefault();
        console.dir(e.target)
        let formInfo = {
            nomApe: e.target[0].value,
            nroDni: e.target[1].value,
            localidad: e.target[2].value,
            domicilio: e.target[3].value,
            email: e.target[4].value,
            telefono: e.target[5].value
        }

        formInfo = JSON.stringify(formInfo)

        console.log(formInfo)
        
        let respuesta = await fetch("http://localhost:4000/cargarCliente", {
            method: "post",
            headers: { "Content-Type": 'application/json' },
            body: formInfo

        })
            .then((resp) => { return resp.json })
            // .then((data) => console.log(data))
            .then((data) => {
                setclienteAgregado(true); setTimeout(() => { setclienteAgregado(false) }, 3000);
            })
            .catch((err) => console.log(err))
    }

    return (

        <div className="container align-items-center justify-content-center d-flex flex-column bg-dark w-50 m-2 p-5">
            <h2 className="text-center m-4 justify-content-center">Formulario Carga de Cliente</h2>
            <form onSubmit={(event) => cargarCliente(event)} className="m-2 d-flex flex-column align-items-center justify-content-center gap-3 w-75">
                <div className="col-sm-10 w-100">
                    <label className="form-label mt-3" htmlFor="nomApe">Nombre y apellido:</label>
                    <input type="text" className="form-control" id="nomApe" name="nomApe" placeholder='Nombre y Apellido' required />
                </div>
                <div className="col-sm-10 w-100">
                    <label className="form-label mt-3" htmlFor="nroDni">Dni:</label>
                    <input type="text" className="form-control" id="nroDni" name="nroDni" placeholder='DNI' required />
                </div>
                <div className="col-sm-10 w-100">
                    <label className="form-label mt-3" htmlFor="localidad">Localidad:</label>
                    <input type="text" className="form-control" id="localidad" name="localidad" placeholder='Localidad' required />
                </div>
                <div className="col-sm-10 w-100">
                    <label className="form-label mt-3" htmlFor="domicilio">Domicilio:</label>
                    <input type="text" className="form-control" id="domicilio" name="domicilio" placeholder='Domicilio' required />
                </div>
                <div className="col-sm-10 w-100">
                    <label className="form-label mt-3" htmlFor="email">e-mail:</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder='Email' required />
                </div>
                <div className="col-sm-10 w-100">
                    <label className="form-label mt-3" htmlFor="telefono">Teléfono:</label>
                    <input type="text" className="form-control" id="telefono" name="telefono" placeholder='Telefono' required />
                </div>
                <div className="d-flex gap-5 align-items-center justify-content-center">
                    <input className="btn btn-success d-block" type="submit" value={'Cargar'} />
                </div>
            </form>
        </div>
    );
}