import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

function NotFoundPage() {
  return (
    <div className="animate-page-enter flex flex-col items-center justify-center min-h-[400px] text-center">
      <h1 className="text-6xl font-bold font-heading text-brand-accent-primary mb-4">404</h1>
      <p className="text-xl text-brand-text-primary mb-8">Page Not Found</p>
      <Link
        to="/"
        className="px-6 py-3 bg-brand-accent-secondary text-brand-text-primary rounded-lg font-medium hover:bg-brand-accent-primary transition duration-300"
      >
        Back to About Me
      </Link>
    </div>
  );
}

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
