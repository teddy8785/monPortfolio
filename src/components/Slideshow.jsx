import React, { useState } from "react";
import "../styles/slideshow.css";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import { useParams } from "react-router-dom";
import data from "../projets.json";

function Slideshow() {
  // récupération des projets par id
  const { id } = useParams();
  const foundItem = data.find((item) => item.id === id);
  const pictures = foundItem.pictures;

  const [index, setIndex] = useState(0);

  // naviguer entre les images
  const nextImg = () => {
    setIndex((img) => (img + 1) % pictures.length);
  };

  const prevImg = () => {
    setIndex((img) => (img - 1 + pictures.length) % pictures.length);
  };

  // ouvre une fenêtre en cliquant sur l'image
  const openImageInNewTab = (img) => {
    const imageUrl = `${process.env.PUBLIC_URL}/${img}`;
    window.open(imageUrl, "_blank");
  };

  //efface les flèches  et les dots s'il n'y a qu'une photo
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
      <img
        className="slideshow__img"
        src={`${process.env.PUBLIC_URL}/${pictures[index]}`}
        alt="images du site"
        onClick={() => openImageInNewTab(pictures[index])}
      />
      <img
        className={`${deleteArrowLeft}`}
        src={arrowLeft}
        alt="fleche gauche"
        onClick={prevImg}
      />
      <img
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
