import React, { useState } from "react";
import "../styles/slideshow.css";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";
import { useParams } from "react-router-dom";
import data from "../projets.json";

function Slideshow() {
  const { id } = useParams();
  const foundItem = data.find((item) => item.id === id);
  const pictures = foundItem.pictures;

  const [index, setIndex] = useState(0);

  const nextImg = () => {
    setIndex((img) => (img + 1) % pictures.length);
  };

  const prevImg = () => {
    setIndex((img) => (img - 1 + pictures.length) % pictures.length);
  };

  const deleteArrowLeft =
    pictures.length === 1
      ? "slideshow__arrow--delete"
      : "slideshow__arrow slideshow__arrow--left";
  const deleteArrowRight =
    pictures.length === 1
      ? "slideshow__arrow--delete"
      : "slideshow__arrow slideshow__arrow--right";
  const deleteDots =
    pictures.length === 1 ? "slideshow__dots--delete" : "slideshow__dots";

  return (
    <section className="slideshow">
      <img className="slideshow__img" src={pictures[index]} alt="" />
      <img
        id="arrow_left"
        className={`${deleteArrowLeft}`}
        src={arrowLeft}
        alt="fleche gauche"
        onClick={prevImg}
      />
      <img
        id="arrow_right"
        className={`${deleteArrowRight}`}
        src={arrowRight}
        alt="fleche droite"
        onClick={nextImg}
      />
      <span className={`${deleteDots}`}>
        {index + 1}/{pictures.length}
      </span>
    </section>
  );
}

export default Slideshow;
