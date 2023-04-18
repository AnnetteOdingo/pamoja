import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  let auth = useAuth();
  const logout = () => {
    if (auth && auth.user && sessionStorage.hasOwnProperty("token")) {
      sessionStorage.clear();
      auth.setCurrentUser(null);
    }
  };
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
          <Link to="/tutor">Tutor </Link>
        </span>
      </li>

      <li className="nav-item">
        <span className="nav-link active" aria-current="page">
          <Link to="/login">
            {" "}
            {!auth.user ? (
              <span>Login</span>
            ) : (
              <span onClick={logout}>Logout</span>
            )}{" "}
          </Link>
        </span>
      </li>
      {auth && auth.user && auth.user.credits && (
        <li className="nav-item">
          <span className="nav-link disabled">{auth.user?.credits}coins</span>
        </li>
      )}
    </ul>
  );
}
