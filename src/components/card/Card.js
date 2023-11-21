
export default function Card() {
    return (
        
            <div className="card flex- row flex-column p-2 m-2">
                <div className="card-body">
                    <h5 className="card-title">Nombre del Cliente</h5>
                    <p className="card-text">Dni:</p>
                    <p className="card-text">Vehiculo:</p>
                    <p className="card-text">Marca:</p>
                    <p className="card-text">Dominio:</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Dato 1: Valor 1</li>
                    <li className="list-group-item">Dato 2: Valor 2</li>
                </ul>
            </div>
    );
  }