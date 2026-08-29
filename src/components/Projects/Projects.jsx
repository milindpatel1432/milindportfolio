import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { projects } from '../../utils/data';
import { cn } from '../../utils/cn';
import ShreeAgenciesCaseStudy from '../CaseStudy/ShreeAgenciesCaseStudy';
import GameHubCaseStudy from '../CaseStudy/GameHubCaseStudy';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(null);
  const containerRef = useRef(null);
  const isWheelLockedRef = useRef(false);

  const totalProjects = projects.length;
  const currentProject = projects[currentIndex] || projects[0];

  const paginate = useCallback(
    (newDirection) => {
      if (totalProjects <= 1) return;
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        if (newDirection === 1) {
          return prev < totalProjects - 1 ? prev + 1 : 0;
        } else {
          return prev > 0 ? prev - 1 : totalProjects - 1;
        }
      });
    },
    [totalProjects]
  );

  const goToSlide = (idx) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Keyboard Navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeCaseStudyId) return;

      if (e.key === 'ArrowRight') {
        paginate(1);
      } else if (e.key === 'ArrowLeft') {
        paginate(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate, activeCaseStudyId]);

  // Lock body scroll when case study modal is open
  useEffect(() => {
    if (activeCaseStudyId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeCaseStudyId]);

  // Smart Mouse Wheel Handler with throttle
  const handleWheel = (e) => {
    if (activeCaseStudyId || totalProjects <= 1) return;

    if (isWheelLockedRef.current) return;

    if (e.deltaY > 40) {
      if (currentIndex < totalProjects - 1) {
        e.preventDefault();
        paginate(1);
        isWheelLockedRef.current = true;
        setTimeout(() => {
          isWheelLockedRef.current = false;
        }, 700);
      }
    } else if (e.deltaY < -40) {
      if (currentIndex > 0) {
        e.preventDefault();
        paginate(-1);
        isWheelLockedRef.current = true;
        setTimeout(() => {
          isWheelLockedRef.current = false;
        }, 700);
      }
    }
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '12%' : '-12%',
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? '12%' : '-12%',
      opacity: 0,
      scale: 0.96,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const isModalCaseStudy = currentProject?.hasCaseStudyModal || currentProject?.id === 'shree-agencies' || currentProject?.id === 'gamehub';

  return (
    <>
      <section
        id="projects"
        ref={containerRef}
        aria-label="Projects showcase slider"
        onWheel={handleWheel}
        className="relative w-full min-h-screen lg:min-h-screen flex flex-col justify-between pt-16 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0f] text-white select-none overflow-hidden"
      >
        {/* Background ambient lighting */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/12 blur-[140px] rounded-full pointer-events-none z-0" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none z-0" aria-hidden="true" />

        {/* ── UNIFORM SECTION HEADER (Eyebrow + Title + Subtitle) ── */}
        <div className="relative z-10 max-w-7xl mx-auto w-full mb-3 sm:mb-4 shrink-0">
          {/* Eyebrow Label */}
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-1.5 sm:mb-2 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            SELECTED WORK / 0{currentIndex + 1}
          </div>

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-outfit text-white mb-1.5 sm:mb-2 leading-tight tracking-tight">
            Built with purpose. <span className="text-gradient-violet">Designed to perform.</span>
          </h2>

          {/* Section Subtitle / Description */}
          <p className="text-white/50 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-2xl">
            Real-world websites and digital experiences built for businesses, brands, and ambitious ideas.
          </p>
        </div>

        {/* ── MAIN CINEMATIC SLIDER CONTENT ── */}
        <div className="relative z-10 flex-1 flex items-center justify-center max-w-7xl mx-auto w-full my-auto py-2 sm:py-4">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {currentProject && (
              <motion.div
                key={currentProject.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -50 || velocity.x < -300) {
                    paginate(1);
                  } else if (swipe > 50 || velocity.x > 300) {
                    paginate(-1);
                  }
                }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center cursor-grab active:cursor-grabbing"
              >
                {/* ── LEFT COLUMN: LARGE SCREENSHOT (~60% width on Desktop) ── */}
                <div className="lg:col-span-7 xl:col-span-7 relative group">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-[#0d0916] shadow-[0_0_50px_rgba(124,58,237,0.15)] group-hover:shadow-[0_0_75px_rgba(124,58,237,0.28)] group-hover:border-violet-500/40 transition-all duration-500">
                    
                    {/* Real Client Badge */}
                    {currentProject.isRealClient && (
                      <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-20 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0a0f]/85 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                        REAL CLIENT PROJECT
                      </div>
                    )}

                    {/* Screenshot Container */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/9.5] lg:aspect-[16/9.5] max-h-[360px] sm:max-h-[420px] overflow-hidden bg-slate-950">
                      {currentProject.image ? (
                        <img
                          src={currentProject.image}
                          alt={`${currentProject.title} Preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className={cn("w-full h-full bg-gradient-to-br flex items-center justify-center", currentProject.gradient)}>
                          <span className="text-8xl font-outfit font-black opacity-20 text-white select-none">
                            {currentProject.title.charAt(0)}
                          </span>
                        </div>
                      )}
                      
                      {/* Subtle ambient bottom gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/70 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Next Project Peek Hint */}
                  {totalProjects > 1 && (
                    <div
                      onClick={() => paginate(1)}
                      aria-label="Next project preview"
                      className="hidden xl:block absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-3/4 rounded-r-xl bg-violet-600/10 border-r border-violet-500/20 opacity-40 hover:opacity-100 transition-opacity cursor-pointer pointer-events-auto"
                      title="Next Project"
                    />
                  )}
                </div>

                {/* ── RIGHT COLUMN: PROJECT DETAILS (~40% width on Desktop) ── */}
                <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center text-left">
                  {/* Meta badge & number */}
                  <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
                    <span className="font-mono text-xs font-bold text-violet-400 tracking-widest uppercase">
                      {currentProject.number || `0${currentIndex + 1}`}
                    </span>
                    <span className="text-[11px] font-bold text-white/60 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                      {currentProject.categoryDisplay || currentProject.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-outfit text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-white tracking-tight leading-tight mb-1 sm:mb-1.5">
                    {currentProject.title}
                  </h3>

                  {/* Role */}
                  {currentProject.role && (
                    <p className="text-[11px] font-bold text-violet-400 uppercase tracking-widest mb-2 sm:mb-3">
                      Role: {currentProject.role}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-white/75 text-xs sm:text-sm lg:text-base leading-relaxed font-normal italic border-l-2 border-violet-500/40 pl-3.5 mb-3 sm:mb-4">
                    "{currentProject.description}"
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {currentProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-medium bg-white/[0.04] border border-white/[0.08] text-white/70 hover:text-white hover:border-violet-500/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-5 pt-3 sm:pt-4 border-t border-white/[0.08]">
                    {currentProject.liveUrl && (
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-[1.02]"
                      >
                        View Live Website
                        <ArrowUpRight size={15} />
                      </a>
                    )}

                    {isModalCaseStudy ? (
                      <button
                        type="button"
                        onClick={() => setActiveCaseStudyId(currentProject.id)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all hover:scale-[1.02] cursor-pointer"
                      >
                        View Case Study
                        <ArrowRight size={15} className="text-violet-400" />
                      </button>
                    ) : currentProject.githubUrl ? (
                      <a
                        href={currentProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all hover:scale-[1.02]"
                      >
                        <FiGithub size={15} className="text-violet-400" />
                        GitHub Code
                      </a>
                    ) : null}
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── BOTTOM SLIDER NAVIGATION CONTROLS ── */}
        <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto w-full pt-4 sm:pt-5 border-t border-white/[0.08] shrink-0">
          
          {/* Progress Indicator + Counter */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs sm:text-sm font-bold text-white/90 tracking-widest">
              0{currentIndex + 1} <span className="text-white/40 font-normal">/ 0{totalProjects}</span>
            </span>

            {/* Interactive Progress Line Segments */}
            <div className="hidden sm:flex items-center gap-2">
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="group py-2 cursor-pointer focus:outline-none"
                >
                  <div
                    className={cn(
                      "h-1 rounded-full transition-all duration-300",
                      idx === currentIndex
                        ? "w-10 sm:w-14 bg-violet-500 shadow-[0_0_12px_rgba(167,139,250,0.8)]"
                        : "w-4 sm:w-6 bg-white/20 group-hover:bg-white/40"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => paginate(-1)}
              disabled={totalProjects <= 1}
              aria-label="Previous project slide"
              className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-violet-600/30 hover:border-violet-500/40 text-white/80 hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer focus:outline-none"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => paginate(1)}
              disabled={totalProjects <= 1}
              aria-label="Next project slide"
              className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-violet-600/30 hover:border-violet-500/40 text-white/80 hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer focus:outline-none"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

      </section>

      {/* Case Study Modals */}
      <AnimatePresence>
        {activeCaseStudyId === 'shree-agencies' && (
          <ShreeAgenciesCaseStudy onBack={() => setActiveCaseStudyId(null)} />
        )}
        {activeCaseStudyId === 'gamehub' && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0a0f]">
            <GameHubCaseStudy onBack={() => setActiveCaseStudyId(null)} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
