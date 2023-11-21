
export default function Register() {
    return (
        
            <div className="container aling-items-center justify-content-center d-flex m-50 bg-dark">
               <form>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div className="d-flex gap-5">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
                </form>
            </div>
    );
  }