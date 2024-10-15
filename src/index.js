import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/index.css";
import Accueil from "./pages/Accueil.jsx";
import Projet from "./pages/Projet.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/monPortfolio">
      <Routes>
        <Route path="/" element={<Navigate to="/Accueil" />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Projet" element={<Projet />} />
        <Route path="/projet/:id" element={<Projet />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);