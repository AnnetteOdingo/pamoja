import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../contexts/AuthContext";
import Books from "../pages/Books";
import Bugs from "../pages/Bugs";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Tutor from "../pages/Tutor";

export default function AppRouter() {
  return (
    <Routes>
      {/* <Route element={<Layout />}> */}
      <Route
        path="/"
        exact 
        element={
          <RequireAuth>
            {" "}
            <Books />{" "}
          </RequireAuth>
        }
      />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route
        path="/bugs"
        exact 
        element={
          <RequireAuth>
            <Bugs />
          </RequireAuth>
        }
      />
      <Route
        path="/tutor"
        exact 
        element={
          <RequireAuth>
            <Tutor />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
