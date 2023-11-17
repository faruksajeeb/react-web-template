import React from "react";
import { getToken } from "./utility/TokenHelper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import ServicePage from "./pages/ServicePage";
import ProjectPage from "./pages/ProjectPage";
import TestimonialPage from "./pages/TestimonialPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  if (getToken()) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/team" element={TeamPage} />
          <Route path="/services" element={ServicePage} />
          <Route path="/projects" element={ProjectPage} />
          <Route path="/testimonial" element={TestimonialPage} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/team" element={TeamPage} />
          <Route path="/services" element={ServicePage} />
          <Route path="/projects" element={ProjectPage} />
          <Route path="/testimonial" element={TestimonialPage} />
          <Route path="/login" element={LoginPage} />
          <Route path="/register" element={RegisterPage} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App;
