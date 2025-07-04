// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import ProfileCard from "./components/ProfileCard";
import GraphButtons from "./components/GraphButtons";

// import About from "./components/About";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
// import Contact from "./components/Contact";
import Footer from "./components/footer";
function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Background Blobs */}
      <div className="background-blobs">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
      </div>

      <div className={`main-container ${isHome ? "" : "main-container-full"}`}>
        {isHome ? (
          <div className="card-wrapper">
            <ProfileCard />
            <GraphButtons />
            
          </div>
        ) : (
          <div className="tab-content tab-content-full">
            <Routes>
              <Route path="/experience" element={<Experience />} />
              <Route path="/certificate" element={<Certificates />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </div>
        )}
      </div>
    </>
  );
}


function App() {
  return (
    <Router>
      <Layout />
       <Footer />
    </Router>
  );
}

export default App;
