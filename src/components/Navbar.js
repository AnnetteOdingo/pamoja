import { Spinner } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const [isLoading, setIsLoading] = React.useState(false);
  let auth = useAuth();
  const logout = () => {
    if (auth && auth.user && sessionStorage.hasOwnProperty("token")) {
      setIsLoading(true);
      sessionStorage.clear();
      auth.setCurrentUser(null);
      window.location.reload();
      setIsLoading(false);
    }
  };
  return (
    <header>
      <div>
        {auth && auth.user && auth.user.credits && (
          <p className="nav-item">
            <span className="nav-link disabled credits">
              {auth.user?.credits} Credits available
            </span>
          </p>
        )}
      </div>
      <div>
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
            <span className="nav-link">
              <Link to="/login">
                {" "}
                {!auth.user ? (
                  <span>Login</span>
                ) : (
                  <span onClick={logout}>
                    {" "}
                    {isLoading ? (
                      <span>
                        {" "}
                        <Spinner /> Logout
                      </span>
                    ) : (
                      "Logout"
                    )}
                  </span>
                )}{" "}
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}
