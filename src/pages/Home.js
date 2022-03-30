import React from "react";

import "../styles/pages/_home.scss";

import Carousel from "../components/Carousel";
import CardsHome from "../components/CardsHome";

import { BiChevronRight } from "react-icons/bi";
import Form from "../components/Form";
import ScrollToTop from "../components/ScrollToTop";

// import image from "../img/wepik-2022222-14148.jpeg";

const Home = ({ handleClose }) => {
  return (
    <div className="home-container">
      <ScrollToTop />
      <div id="hero" className="waves-container">
        <div className="inner-header flex">
          {/* <img alt="" src={image} /> */}
          <div className="header">
            <div className="disappear">
              <span>D</span>
              <span style={{ marginRigth: "24px" }}>P</span>
              {""}
              <span> {""}</span>
              <span> {""} </span>
              {""}
              <span> D</span>
              <span>I</span>
              <span>G</span>
              <span>I</span>
              <span>T</span>
              <span>A</span>
              <span>L</span>
              <span>|</span>
            </div>
            <span className="span" data-aos="fade-left">
              {" "}
              Agencia de Marketing
            </span>
          </div>
          <p data-aos="fade-up">
            LA MANO QUE SU EMPRESA NECESITA EN SOLUCIONES ONLINE.
            {/* <br /> Trabajamos para aportarle a nuestros clientes la visión
            necesaria de todas las herramientas disponibles que se encuentran en
            la web, así como la potenciación de integración con otras
            tecnologías. Nuestra experiencia y recursos especializados nos
            permite brindar un servicio de óptima calidad. Gracias a la
            constante capacitación e información podemos tener una visión
            actualizada de todos los proyectos que llevamos adelante. */}
          </p>
          <a className="main-button" href="#about">
            CONOCE MÁS
          </a>
        </div>

        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#e9e9e9" />
            </g>
          </svg>
        </div>
      </div>
      <div id="about">
        <h3 className="about-title">
          <span>
            {" "}
            <BiChevronRight />
          </span>
          ¿Qué hacemos?
        </h3>
        <CardsHome handleClose={handleClose} />
      </div>
      <div id="clientes">
        <h3 className="about-title">
          <span>
            {" "}
            <BiChevronRight />
          </span>
          ¿Quiénes confían en nosotros?
        </h3>
        <Carousel />
      </div>
      <div id="contacto" className="form-container">
        <Form />
      </div>
    </div>
  );
};

export default Home;
