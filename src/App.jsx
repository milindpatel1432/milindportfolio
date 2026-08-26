import { lazy, Suspense } from 'react';
import { useLenis } from './hooks/useLenis';
import AuroraBackground from './components/Background/AuroraBackground';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

// Lazy load below-the-fold sections for optimal performance
const About         = lazy(() => import('./components/About/About'));
const Skills        = lazy(() => import('./components/Skills/Skills'));
const Projects      = lazy(() => import('./components/Projects/Projects'));
const WhyWorkWithMe = lazy(() => import('./components/WhyWorkWithMe/WhyWorkWithMe'));
const Process       = lazy(() => import('./components/Process/Process'));
const Testimonials  = lazy(() => import('./components/Testimonials/Testimonials'));
const Contact       = lazy(() => import('./components/Contact/Contact'));
const Footer        = lazy(() => import('./components/Footer/Footer'));

/** Minimal spinner shown while lazy sections load */
function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-32" aria-hidden="true">
      <div className="w-6 h-6 rounded-full border-2 border-violet-500/30 border-t-violet-500 animate-spin" />
    </div>
  );
}

/** Section separator line */
function Separator() {
  return <div className="section-separator" aria-hidden="true" />;
}

export default function App() {
  // Initialize Lenis smooth scrolling globally
  useLenis();

  return (
    <>
      {/* Aurora animated background — fixed behind all content */}
      <AuroraBackground />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content" tabIndex={-1}>
        {/* Hero — eager loaded */}
        <Hero />

        <Suspense fallback={<SectionFallback />}>
          <Separator />
          <About />
          <Separator />
          <Skills />
          <Separator />
          <Projects />
          <Separator />
          <WhyWorkWithMe />
          <Separator />
          <Process />
          <Separator />
          <Testimonials />
          <Separator />
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
