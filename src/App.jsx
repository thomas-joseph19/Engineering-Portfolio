import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import PlanetaryGearPage from "./pages/PlanetaryGearPage";
import RoboticArmPage from "./pages/RoboticArmPage";
import L1RocketPage from "./pages/L1RocketPage";
import HullDesignPage from "./pages/HullDesignPage";
import TestStandPage from "./pages/TestStandPage";
import NotFoundPage from "./pages/NotFoundPage";

function AppContent() {
  return (
    <div className="min-h-screen bg-brand-bg-dark text-brand-text-secondary flex flex-col font-sans">
      {/* Persistent Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/planetary-gear" element={<PlanetaryGearPage />} />
          <Route path="/projects/robotic-arm" element={<RoboticArmPage />} />
          <Route path="/projects/l1-rocket" element={<L1RocketPage />} />
          <Route path="/projects/hull-design" element={<HullDesignPage />} />
          <Route path="/projects/test-stand" element={<TestStandPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
