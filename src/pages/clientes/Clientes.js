import Nav from "../../components/navegacion/Navegacion";
import Card from "../../components/card/Card";
import "./Clientes.css"; 

export default function Clientes() {
  return (
    <div>
      <Nav />
      <main className="container-fluid">
        <div className="card-container d-flex flex-wrap justify-content-between align-items-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}
