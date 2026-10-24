import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans transition-colors duration-200">
        {/* Top Navbar */}
        <Navbar />

        {/* Main Centered Single Column (matches reference layout) */}
        <main className="flex-1 w-full max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-6 pb-12 space-y-2">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <TechStack />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>

        {/* Footer Container */}
        <div className="w-full max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-6">
          <Footer />
        </div>

        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
