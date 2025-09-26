import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../index.css";
import "./inicio.css";
import imagen from "../assets/ImagenPagina.png";
import imagen1 from "../assets/PaginaRepuestos.jpg";
import imagen2 from "../assets/radiotucuman.png";

const Libros = () => {
  const [busqueda, setBusqueda] = useState("");

  return (
    <>
      <div className="introduccion text-center">
        <h1 className="fw-bold">Hola, mi nombre es</h1>
        <h3 className="text-primary">Benjamin Quinteros</h3>
        <p className="lead">
          Este es mi portfolio. Mi objetivo es aprender y seguir preparándome en
          el área de desarrollo y calidad de software, con la meta de expandir
          mis conocimientos y habilidades en el campo tecnológico.
        </p>
        <a
          href="https://github.com/benja3086"
          target="_blank"
          rel="noopener noreferrer"
          className="d-inline-block mb-4"
        >
          <button className="btn btn-dark btn-lg mt-3">
            <i className="bi bi-github me-2"></i> Mi GitHub
          </button>
        </a>
        <h3>Descripcion</h3>
        <p>
          obre mí Soy un apasionado del desarrollo de software y la tecnología.
          Desde 2024 he estado inmerso en el mundo de la programación, lo que me ha hecho
          desarrollar habilidades de organización y resolución de problemas.
          Actualmente estudio Desarrollo y Calidad de Software en la UNSTA y
          estoy ampliando mis conocimientos en HTML, CSS, JavaScript, React, c# y
          Node.js. Disfruto crear aplicaciones desde cero y aprender nuevas
          herramientas que mejoren tanto la eficiencia como la experiencia del
          usuario.<br></br> Soy una persona motivada que disfruta los desafíos, el
          trabajo en equipo y la mejora continua de mis habilidades para aportar
          valor en el área tecnológica.
        </p>
      </div>

      <div className="portfolio-contenedor">
        <a
          href="https://tiendamisiones.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={imagen}
            alt="Vista previa tienda Misiones"
            className="imagen-destacada"
          />
        </a>

        <a>
          <img
            src={imagen1}
            alt="Página de Repuestos"
            className="imagen-destacada"
          />
        </a>

        <a
          href="https://radio-tucuman.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={imagen2}
            alt="Página de Radio Tucuman"
            className="imagen-destacada"
          />
        </a>
      </div>
    </>
  );
};

export default Libros;
