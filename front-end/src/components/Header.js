import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link
        title="Retour à la page d'accueil"
        aria-label="Lien vers la page d'accueil de HRnet"
        className="button-home"
        to="/home"
      >
        HRnet
      </Link>
    </div>
  );
}

export default Header;
