import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
      <Router>
        <div className="container border rounded mx-auto my-3 p-3">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
