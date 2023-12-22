import '../formRegister/registerEstilo.css'
export default function Register() {
    return (
        
            <div className="container  registerContainer aling-items-center justify-content-center d-flex flex-column bg-dark">
               <form action='' className="m-5 d-flex flex-column aling-items-center justify-content-center">
                <div className="row mb-3">
                    <div className="col-sm-10 w-100">
                        <input type="email" className="form-control" id="inputEmail" placeholder='Email' required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 w-100">
                        <input type="text" className="form-control" id="inputUserName" placeholder='User Name' required/>
                    </div>
                </div>
                <div className="row mb-3 ">
                    
                    <div className="col-sm-10 w-100">
                        <input type="password" className="form-control" id="inputPassword" placeholder='Password' required/>
                    </div>
                </div>
                <div className="d-flex gap-5 align-items-center justify-content-center">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
                </form>
            </div>
    );
  }