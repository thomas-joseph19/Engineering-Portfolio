import React from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

// Placeholders for Pages (will be fully implemented in Phase 3)
function AboutPage() {
  return (
    <div className="animate-page-enter">
      <h1 className="text-4xl font-bold font-heading text-brand-text-primary mb-4">About Me</h1>
      <p className="text-brand-text-secondary leading-relaxed">
        Placeholder for About Me page.
      </p>
    </div>
  );
}

function ResumePage() {
  return (
    <div className="animate-page-enter">
      <h1 className="text-4xl font-bold font-heading text-brand-text-primary mb-4">Resume</h1>
      <p className="text-brand-text-secondary leading-relaxed">
        Placeholder for Resume page.
      </p>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="animate-page-enter">
      <h1 className="text-4xl font-bold font-heading text-brand-text-primary mb-4">Contact</h1>
      <p className="text-brand-text-secondary leading-relaxed">
        Placeholder for Contact page.
      </p>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="animate-page-enter flex items-center justify-center min-h-[400px]">
      <h1 className="text-3xl font-medium text-brand-text-muted font-heading">
        Projects coming soon!
      </h1>
    </div>
  );
}

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
  const location = useLocation();
  return (
    <div className="min-h-screen bg-brand-bg-dark text-brand-text-secondary flex flex-col font-sans">
      {/* Persistent Nav (Will be built in Phase 2) */}
      <header className="border-b border-brand-bg-card bg-brand-bg-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-brand-text-primary font-bold text-lg font-heading">
            Portfolio
          </Link>
          <nav className="flex space-x-6">
            <Link to="/" className="hover:text-brand-accent-primary transition">About</Link>
            <Link to="/projects" className="hover:text-brand-accent-primary transition">Projects</Link>
            <Link to="/resume" className="hover:text-brand-accent-primary transition">Resume</Link>
            <Link to="/contact" className="hover:text-brand-accent-primary transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl mx-auto px-4 py-12 w-full">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Persistent Footer (Will be built in Phase 2) */}
      <footer className="border-t border-brand-bg-card py-6 text-center text-sm text-brand-text-muted">
        <div>&copy; {new Date().getFullYear()} [PLACEHOLDER: Your Name]. All rights reserved.</div>
      </footer>
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
