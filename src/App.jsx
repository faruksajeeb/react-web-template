import React from "react";
import { getToken } from "./utility/TokenHelper";
import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
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
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/team" element={<TeamPage/>} />
          <Route path="/services" element={<ServicePage/>} />
          <Route path="/projects" element={<ProjectPage/>} />
          <Route path="/testimonial" element={<TestimonialPage/>} />
        </Routes>
      </HashRouter>
    );
  } else {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/team" element={<TeamPage/>} />
          <Route path="/service" element={<ServicePage/>} />
          <Route path="/project" element={<ProjectPage/>} />
          <Route path="/testimonial" element={<TestimonialPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>
      </HashRouter>
    );
  }
};

export default App;
