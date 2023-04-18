import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../contexts/AuthContext";
import Books from "../pages/Books";
import Bugs from "../pages/Bugs";
import Signup from "../pages/Signup";
import Tutor from "../pages/Tutor";

export default function AppRouter() {
  return (
    <Routes>
      {/* <Route element={<Layout />}> */}
      <Route
        path="/"
        element={
          <RequireAuth>
            {" "}
            <Books />{" "}
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Signup />} />
      <Route
        path="/bugs"
        element={
          <RequireAuth>
            <Bugs />
          </RequireAuth>
        }
      />
      <Route
        path="/tutor"
        element={
          <RequireAuth>
            <Tutor />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
