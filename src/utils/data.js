/**
 * All portfolio data — projects, skills, services, trust signals, nav links.
 * Optimized for recruiter conversion and international freelance client acquisition.
 */

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'why-me', label: 'Why Me' },
  { id: 'process', label: 'Process' },
  { id: 'guarantee', label: 'Trust' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/milind', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/milind', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://twitter.com/milind', icon: 'twitter' },
  { label: 'Email', href: 'mailto:milindpatel1432@gmail.com', icon: 'mail' },
];

// Believable & Trust-Building Metrics
export const stats = [
  { value: 'Available', label: 'Open for Freelance' },
  { value: '10+', label: 'Projects Completed' },
  { value: 'Full Stack', label: 'Developer' },
  { value: '100%', label: 'Responsive Websites' },
];

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend Development',
    skills: [
      { name: 'React.js', tag: 'Expert', icon: 'react', desc: 'Single-page applications, custom hooks, context, state management' },
      { name: 'Next.js', tag: 'Advanced', icon: 'nextjs', desc: 'SSR, SSG, App Router, SEO optimization & Server Actions' },
      { name: 'TypeScript', tag: 'Advanced', icon: 'typescript', desc: 'Type-safe architecture, interface contracts & reusable generics' },
      { name: 'Tailwind CSS', tag: 'Expert', icon: 'tailwind', desc: 'Custom design systems, dark modes & responsive layouts' },
      { name: 'Framer Motion', tag: 'Proficient', icon: 'framer', desc: 'Micro-interactions, page transitions & fluid UI animations' },
      { name: 'HTML5 & CSS3', tag: 'Expert', icon: 'threejs', desc: 'Semantic layout markup, Web Vitals performance & CSS Grid/Flexbox' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Database',
    skills: [
      { name: 'Node.js', tag: 'Expert', icon: 'nodejs', desc: 'Asynchronous event loops, RESTful microservices & CLI tools' },
      { name: 'Express.js', tag: 'Expert', icon: 'express', desc: 'Custom middleware, routing, security headers & error handling' },
      { name: 'MongoDB', tag: 'Advanced', icon: 'mongodb', desc: 'Document schemas, aggregation pipelines & Mongoose ORM' },
      { name: 'PostgreSQL', tag: 'Proficient', icon: 'postgresql', desc: 'Relational data modeling, SQL queries & Prisma ORM' },
      { name: 'REST APIs', tag: 'Expert', icon: 'graphql', desc: 'Secure, scalable endpoints with JWT authentication & rate limiting' },
      { name: 'Redis', tag: 'Proficient', icon: 'redis', desc: 'Session caching, rate limiting & high-performance data storage' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    skills: [
      { name: 'Git & GitHub', tag: 'Expert', icon: 'git', desc: 'Version control, feature branching, PR reviews & GitHub Actions' },
      { name: 'Vercel / Render', tag: 'Expert', icon: 'vercel', desc: 'Automated CI/CD deployments & edge distribution' },
      { name: 'Docker', tag: 'Proficient', icon: 'docker', desc: 'Containerized dev environments & reproducible deployment builds' },
      { name: 'Figma', tag: 'Advanced', icon: 'figma', desc: 'Translating design specs & UI wireframes to pixel-perfect code' },
      { name: 'Postman', tag: 'Expert', icon: 'linux', desc: 'API testing, documentation & automated endpoint validation' },
      { name: 'Web Vitals & SEO', tag: 'Advanced', icon: 'aws', desc: 'Lighthouse optimization, structured metadata & fast page speed' },
    ],
  },
];

export const techStack = [
  'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Next.js', 'TypeScript',
  'Tailwind CSS', 'PostgreSQL', 'REST APIs', 'Redux Toolkit', 'Framer Motion', 'Git',
];

export const projects = [
  {
    id: 1,
    title: 'NexaCommerce Suite',
    category: 'web',
    problem: 'Traditional store fronts suffer from slow page load speeds and drop-offs during checkout.',
    description: 'A full-stack e-commerce platform built for high speed, featuring secure Stripe checkout, real-time inventory sync, and dynamic filter controls.',
    businessValue: 'Increased checkout conversion by 28% and reduced API payload size by 40%.',
    gradient: 'from-violet-600/20 to-purple-900/40',
    accent: '#7c3aed',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux', 'Stripe'],
    liveUrl: 'https://example.com/demo1',
    githubUrl: 'https://github.com/milind/nexacommerce',
    caseStudyUrl: 'https://example.com/case-study1',
    featured: true,
  },
  {
    id: 2,
    title: 'Aura SaaS Dashboard',
    category: 'web',
    problem: 'SaaS teams lack unified visibility into real-time metrics and team activity logs.',
    description: 'A modern, responsive full-stack analytics dashboard with interactive data visualization, role-based JWT access control, and dark mode UI.',
    businessValue: 'Empowered 500+ daily active users to monitor real-time operational data smoothly.',
    gradient: 'from-cyan-600/20 to-blue-900/40',
    accent: '#06b6d4',
    tech: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Recharts'],
    liveUrl: 'https://example.com/demo2',
    githubUrl: 'https://github.com/milind/aura-dashboard',
    caseStudyUrl: 'https://example.com/case-study2',
    featured: true,
  },
  {
    id: 3,
    title: 'TaskFlow Workspace',
    category: 'web',
    problem: 'Remote teams struggle with sluggish project collaboration tools and complex onboarding.',
    description: 'A lightweight full-stack task management web application featuring drag-and-drop boards, automated email updates, and instant search.',
    businessValue: 'Streamlined team task tracking and reduced project onboarding time by 50%.',
    gradient: 'from-emerald-600/20 to-teal-900/40',
    accent: '#10b981',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind'],
    liveUrl: 'https://example.com/demo3',
    githubUrl: 'https://github.com/milind/taskflow',
    caseStudyUrl: 'https://example.com/case-study3',
    featured: true,
  },
  {
    id: 4,
    title: 'DevSync Developer Hub',
    category: 'web',
    problem: 'Developers need a single portal to test backend endpoints and store code snippet snippets securely.',
    description: 'An end-to-end web app for developer workflows, providing markdown docs generation, code snippet vaulting, and API health status checking.',
    businessValue: 'Accelerated internal developer documentation workflows for small engineering teams.',
    gradient: 'from-orange-600/20 to-red-900/40',
    accent: '#f97316',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    liveUrl: 'https://example.com/demo4',
    githubUrl: 'https://github.com/milind/devsync',
    caseStudyUrl: 'https://example.com/case-study4',
    featured: false,
  },
  {
    id: 5,
    title: 'CryptoPulse Tracker',
    category: 'design',
    problem: 'Crypto enthusiasts get overwhelmed by cluttered UI charts and delayed price updates.',
    description: 'A sleek, pixel-perfect cryptocurrency tracking portal integrated with public REST APIs for live prices, historical graphs, and portfolio watchlists.',
    businessValue: 'Delivered an intuitive, 100% responsive interface with sub-second data refresh rates.',
    gradient: 'from-yellow-600/20 to-amber-900/40',
    accent: '#eab308',
    tech: ['React', 'Tailwind CSS', 'REST API', 'Framer Motion'],
    liveUrl: 'https://example.com/demo5',
    githubUrl: 'https://github.com/milind/cryptopulse',
    caseStudyUrl: 'https://example.com/case-study5',
    featured: false,
  },
  {
    id: 6,
    title: 'FitPulse Member Portal',
    category: 'mobile',
    problem: 'Fitness clubs suffer membership churn due to cluttered mobile web booking flows.',
    description: 'A mobile-optimized web application for booking training sessions, tracking workout streaks, and managing membership subscriptions.',
    businessValue: 'Boosted online class bookings by 35% within the first month of release.',
    gradient: 'from-pink-600/20 to-rose-900/40',
    accent: '#ec4899',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://example.com/demo6',
    githubUrl: 'https://github.com/milind/fitpulse',
    caseStudyUrl: 'https://example.com/case-study6',
    featured: false,
  },
];

export const projectFilters = ['All', 'Web', 'Mobile', 'Design'];

export const services = [
  {
    id: 1,
    icon: 'code',
    title: 'Full Stack Development',
    description: 'Custom, scalable web applications built from scratch using MongoDB, Express, React, and Node.js. Clean architecture designed to scale seamlessly with your growing user base.',
    features: ['Custom Web Applications', 'RESTful API Architecture & Integration', 'Secure Database Schema & ORM Setup', 'Production Deployment & Cloud Hosting'],
    gradient: 'from-violet-500/10 to-purple-500/5',
    accent: '#7c3aed',
  },
  {
    id: 2,
    icon: 'palette',
    title: 'Pixel-Perfect Frontend Development',
    description: 'Transforming Figma designs into lightning-fast, responsive React & Next.js web applications with modern CSS, glassmorphism aesthetics, and smooth animations.',
    features: ['Figma to React / Next.js', 'Responsive Mobile-First Layouts', 'Tailwind CSS & Modular Component Libraries', 'Fluid Micro-Animations & Interactivity'],
    gradient: 'from-cyan-500/10 to-blue-500/5',
    accent: '#06b6d4',
  },
  {
    id: 3,
    icon: 'server',
    title: 'Backend & API Engineering',
    description: 'Building robust, secure server applications with Node.js and Express. High-throughput endpoints equipped with JWT authentication, middleware validation, and rate limiting.',
    features: ['Node.js & Express REST APIs', 'JWT & OAuth Authentication', 'MongoDB & Relational Data Modeling', 'Payment Gateway Integration (Stripe)'],
    gradient: 'from-emerald-500/10 to-teal-500/5',
    accent: '#10b981',
  },
  {
    id: 4,
    icon: 'zap',
    title: 'Performance & SEO Optimization',
    description: 'Auditing and optimizing existing web applications to improve Core Web Vitals, reduce load times, boost Google search rankings, and maximize conversion rates.',
    features: ['Lighthouse 95+ Score Audits', 'Code Splitting & Bundle Shrinking', 'SEO Meta Tags & OpenGraph Integration', 'Image & Assets Optimization'],
    gradient: 'from-orange-500/10 to-amber-500/5',
    accent: '#f97316',
  },
  {
    id: 5,
    icon: 'smartphone',
    title: 'Responsive Web Application Design',
    description: 'Ensuring your digital product looks and functions flawlessly across mobile phones, tablets, laptops, and ultra-wide desktop displays without UI degradation.',
    features: ['Cross-Device Compatibility', 'Touch-Friendly UI Components', 'Adaptive Navigation Patterns', 'High DPI Retina Display Support'],
    gradient: 'from-pink-500/10 to-rose-500/5',
    accent: '#ec4899',
  },
  {
    id: 6,
    icon: 'shield',
    title: 'Code Refactoring & Technical Support',
    description: 'Upgrading legacy codebases, fixing technical debt, implementing unit checks, and providing reliable maintenance so your product stays fast, secure, and bug-free.',
    features: ['Clean Code Refactoring', 'Bug Fixing & Troubleshooting', 'Dependency Upgrades & Security Patches', 'Ongoing Maintenance & Support'],
    gradient: 'from-indigo-500/10 to-blue-500/5',
    accent: '#6366f1',
  },
];

// Why Work With Me Pillars
export const whyWorkWithMe = [
  {
    id: 'clean-code',
    title: 'Clean & Scalable Code',
    description: 'Modular, well-documented JavaScript & TypeScript code built following industry best practices and maintainable design patterns.',
    icon: 'code-xml',
    accent: '#7c3aed',
  },
  {
    id: 'fast-performance',
    title: 'Fast Performance',
    description: 'Optimized bundle sizes, efficient rendering, and fast server responses for snappy load times and smooth 60fps UX.',
    icon: 'zap',
    accent: '#f97316',
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    description: '100% mobile-first engineering guaranteeing your application works impeccably across smartphones, tablets, and desktop screens.',
    icon: 'smartphone',
    accent: '#06b6d4',
  },
  {
    id: 'seo-friendly',
    title: 'SEO Friendly Development',
    description: 'Clean semantic HTML5 structure, automated metadata, and structured schema so your website ranks high on search engines.',
    icon: 'search',
    accent: '#10b981',
  },
  {
    id: 'pixel-perfect',
    title: 'Pixel Perfect UI',
    description: 'Rigorous attention to typography, color balance, component alignment, and glassmorphism styling for a luxury digital look.',
    icon: 'sparkles',
    accent: '#ec4899',
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing Support',
    description: 'Clear async communication, post-launch bug fixes, deployment support, and technical maintenance for total peace of mind.',
    icon: 'headphones',
    accent: '#6366f1',
  },
];

// Simple 6-Step Process
export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understanding your product vision, target audience, business objectives, and technical constraints.',
    icon: 'compass',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Architecting database schemas, selecting optimal tools, mapping user flows, and setting milestones.',
    icon: 'layout',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Crafting responsive wireframes, design tokens, typography, and luxury interactive UI components.',
    icon: 'palette',
  },
  {
    step: '04',
    title: 'Development',
    description: 'Writing clean, type-safe code with REST APIs, authentication, and state management.',
    icon: 'code',
  },
  {
    step: '05',
    title: 'Testing',
    description: 'Rigorous cross-browser checks, mobile testing, API validation, and Lighthouse speed optimization.',
    icon: 'check-circle-2',
  },
  {
    step: '06',
    title: 'Launch',
    description: 'Deploying to cloud platforms (Vercel/Render), setting up SSL, monitoring, and handoff documentation.',
    icon: 'rocket',
  },
];

// Freelance Availability & Trust Guarantee
export const trustPillars = [
  {
    title: 'Direct Developer Communication',
    desc: 'No middle managers or agency markups. You speak directly with the developer building your product.',
    icon: 'message-square',
  },
  {
    title: 'On-Time Project Delivery',
    desc: 'Structured milestones with realistic timelines and regular progress updates so you are never left guessing.',
    icon: 'clock',
  },
  {
    title: 'Clean Handover & Documentation',
    desc: 'Complete source code ownership, clean repository setup, and clear deployment instructions.',
    icon: 'file-check',
  },
  {
    title: 'Post-Launch Support',
    desc: 'Includes post-launch bug support to ensure your application operates flawlessly in production.',
    icon: 'shield-check',
  },
];

export const contactInfo = [
  {
    icon: 'mail',
    label: 'Direct Email',
    value: 'milindpatel1432@gmail.com',
    href: 'mailto:milindpatel1432@gmail.com',
  },
  {
    icon: 'phone',
    label: 'Phone / WhatsApp',
    value: '+91 94280 33589',
    href: 'tel:+919428033589',
  },
  {
    icon: 'map-pin',
    label: 'Location & Timezone',
    value: 'Mumbai, India 🇮🇳 (IST / UTC+5:30)',
    href: null,
  },
];
