import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Advogado Online</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Serviços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="jumbotron text-center mt-4">
        <h1>Serviços Jurídicos Online</h1>
        <p>Encontre advogados especializados para suas necessidades legais</p>
        <a href="#" className="btn btn-primary">Saiba Mais</a>
      </div>
    </div>
  );
}