import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#faf7ee] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans transition-colors duration-200">
        {/* Top Tactile Navbar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Single Column Container matching Kanish's tactile layout */}
        <main className="flex-1 w-full max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Projects />
          <Experience />
          <Skills />
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
