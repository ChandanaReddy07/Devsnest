import React from "react";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <nav className="nav">
       
        <ul className="nav-links">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/profile"><li>Profile</li></Link>
          <Link to="/dash"><li>Dashboard</li></Link>
          
        </ul>
      </nav>
    </div>
  );
}
