import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./contexts/AuthContext";

import AppRouter from "./routes/AppRouter";

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <div className="container">
          <AppRouter />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
