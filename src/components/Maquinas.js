import React from "react";
import "./MaquinasStyles.css";
import Carousel from "./Carousel";
import { maquinarias } from "./CarouselData";

const Maquinas = () => {
  return (
    <div className="maquinas">
      <div className="container">
        <div className="content">
        <ul className="maquinas-menu">
          <h3>MÁQUINAS</h3>
          <li>nuevas</li>
          <li>usadas</li>
        </ul>
          <div className="cards">
            <Carousel images={maquinarias} />
            <Carousel images={maquinarias} />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Maquinas;
