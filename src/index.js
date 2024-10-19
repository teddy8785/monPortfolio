import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./styles/index.css";
import Accueil from "./pages/Accueil.jsx";
import Projet from "./pages/Projet.jsx";
import Erreur from "./pages/Erreur.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Accueil" />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Projet" element={<Projet />} />
        <Route path="/projet/:id" element={<Projet />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </Router>
  </React.StrictMode>
);