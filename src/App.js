import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPages from "pages/LandingPages"; // Sesuaikan jalur impor jika perlu

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
