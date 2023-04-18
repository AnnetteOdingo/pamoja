import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "../axios";

let AuthContext = React.createContext(null);

const base_url = "https://pamoja-backend.onrender.com/api";

export function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);
  const setCurrentUser = (userDTO) => {
    if (!userDTO) {
      setUser(null);
      return;
    }

    setUser({
      ...userDTO,
      name: `${userDTO.name}`,
      credits: `${userDTO.credits}`,
      email: `${userDTO.email}`,
      id: `${userDTO.id}`,
    });
  };
  const value = React.useMemo(() => {
    const getUserProfile = async () => {
        await axios()
          .get(`${base_url}/users/info`)
          .then((res) => {
            setCurrentUser({
              ...res.data,
              name: res.data.name,
              email: res.data.email,
              id: res.data.id,
              credits: res.data.credits,
            });
          })
          .catch((error) => {
            alert(error.response.data.message);
          });
      };

    return {
        user,
        getUserProfile,
        setCurrentUser,
      }
  }, [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  return React.useContext(AuthContext);
}
export function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();
  
    if (!auth.user) {
      
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }