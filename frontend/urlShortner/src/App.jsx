import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shortener from "./pages/Shortner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shortener />} />
      </Routes>
    </Router>
  );
}

export default App;
