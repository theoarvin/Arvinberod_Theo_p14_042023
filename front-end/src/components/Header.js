import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="button-home" to='/home'>HRnet</Link>
    </div>
  );
}

export default Header;
