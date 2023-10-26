
export default function Home() {
    return (
      <header className="container-fluid header-contenedor">
        <div className=" align-items-center justify-content-center d-flex flex-column p-2 w-4">
          <h1>Taller el Garage</h1>
          <p className="bienvenida p-2 text-justify">"¡Bienvenidos a <strong>Taller el Garage!</strong> En nuestro taller, nos enorgullece ofrecer un servicio de mecánica de confianza y de alta calidad. Con años de experiencia en el sector, hemos perfeccionado nuestras habilidades para garantizar que su vehículo reciba el mejor cuidado posible. Nuestro compromiso con la excelencia se refleja en cada proyecto que emprendemos, desde reparaciones de precisión hasta un mantenimiento preventivo que mantiene su automóvil en las mejores condiciones. En <strong>Taller el Garage</strong>, su satisfacción y la seguridad de su vehículo son nuestra principal prioridad. Estamos aquí para atender todas sus necesidades automotrices y brindarle tranquilidad en la carretera."
          </p>
          <div className="container d-flex justify-content-center m-2 p-2">
            <button type="button" className="btn btn-dark m-2">Clientes <i class="bi bi-arrow-right"></i></button>
            <button type="button" className="btn btn-dark m-2">Contactos <i class="bi bi-telephone-forward-fill"></i></button>
          </div>
        </div>
      </header>
    );
  }