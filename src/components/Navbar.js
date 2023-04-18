import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  let auth = useAuth();

  return (

    <ul className="nav justify-content-end">
      <li className="nav-item">
        <span className="nav-link">
        <Link to="/"> Books </Link>
        </span>
      </li>
      <li className="nav-item">
        <span className="nav-link">
        <Link to="/bugs"> Bugs </Link>
        </span>
      </li>
      <li className="nav-item">
        <span className="nav-link">
        <Link to="/tutor">Tutor </Link></span>
      </li>

      <li className="nav-item">
        <span className="nav-link active" aria-current="page" >
        <Link to="/login"> {!auth.user ? "Login" : "Logout"} </Link>
        </span>
      </li>
      <li className="nav-item">
        <span className="nav-link disabled"> 100 coins</span>
      </li>
    </ul>
  );
}
