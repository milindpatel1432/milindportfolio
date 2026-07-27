import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Server,
  Database,
  Lock,
  CreditCard,
  Image as ImageIcon,
  LayoutDashboard,
  ShoppingCart,
  Search,
  SlidersHorizontal,
  PackageCheck,
  Star,
  Layers,
  Sparkles,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  Maximize2,
  X,
  Code2,
  Globe,
  Cpu,
  RefreshCw,
  MapPin,
  Bot,
  Percent,
  Bell,
  Store,
  BarChart3
} from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

import gamehubHeroImg from '../../assets/gamehub-hero.png';
import gamehubDashboardImg from '../../assets/gamehub-dashboard.png';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function GameHubCaseStudy({ onBack }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToPortfolio = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.pushState(null, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const galleryImages = [
    {
      id: 1,
      title: 'GameHub Workstation & Hero Showcase',
      category: 'Hero & Landing',
      desc: 'Dark cyberpunk visual banner showcasing dual monitors, glowing product cards, and glassmorphism interface controls.',
      img: gamehubHeroImg,
    },
    {
      id: 2,
      title: 'Admin Executive Control Dashboard',
      category: 'Admin Control',
      desc: 'Real-time sales revenue graphs, inventory alerts, order status management, and product catalog controls.',
      img: gamehubDashboardImg,
    },
    {
      id: 3,
      title: 'Gaming Gear Product Catalog & Filters',
      category: 'Shop Experience',
      desc: 'Sub-50ms multi-tag filtering, instant search, price sliders, and dark theme product cards.',
      img: gamehubHeroImg,
    },
    {
      id: 4,
      title: 'Razorpay Checkout & Order Confirmation',
      category: 'Checkout & Payments',
      desc: 'PCI-compliant Razorpay modal integration with instant webhook signature verification and digital receipts.',
      img: gamehubDashboardImg,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto selection:bg-cyan-500 selection:text-black">
      
      {/* ── 1. Top Navigation Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]"
      >
        <button
          onClick={handleBackToPortfolio}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl glass border border-white/10 text-white/80 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200 text-sm font-medium group"
          aria-label="Back to portfolio"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-white/50">
          <span className="hidden sm:inline">Portfolio</span>
          <ChevronRight size={14} className="hidden sm:inline" />
          <span>Case Study</span>
          <ChevronRight size={14} />
          <span className="text-cyan-400 font-semibold">GameHub Marketplace</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://gamehub-ecommerce.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <a
            href="https://github.com/milindpatel1432/gamehub-ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl glass border border-white/10 text-white/80 hover:text-white hover:border-white/20 text-xs font-medium transition-colors"
          >
            <FiGithub size={14} /> Source Code
          </a>
        </div>
      </motion.div>

      {/* ── 2. Hero Section ── */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mb-20"
      >
        <motion.div variants={fadeUp} className="mb-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-cyan-500/30 text-xs font-medium text-cyan-300 bg-cyan-500/10">
            <Sparkles size={14} className="text-cyan-400" />
            Full Stack MERN E-Commerce Case Study
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-outfit font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-4 leading-[1.08]"
        >
          GameHub – AAA Gaming <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400">
            E-Commerce Marketplace
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed mb-8 font-light"
        >
          "Production-Ready Full Stack Gaming Marketplace built with React 19, Node.js, Express, MongoDB Atlas, JWT Authentication, Razorpay, Cloudinary, and Tailwind CSS."
        </motion.p>

        {/* Tech Badges */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
          {[
            'React 19',
            'Node.js',
            'Express.js',
            'MongoDB Atlas',
            'JWT Auth',
            'Razorpay Payments',
            'Cloudinary CDN',
            'Tailwind CSS v4',
            'Framer Motion',
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold glass border border-white/[0.08] text-white/80 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Hero Visual Card */}
        <motion.div
          variants={fadeUp}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl shadow-cyan-950/40 group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-violet-500/10 pointer-events-none z-10" />
          <img
            src={gamehubHeroImg}
            alt="GameHub AAA Gaming E-Commerce Banner"
            className="w-full h-[320px] sm:h-[450px] md:h-[550px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass border border-white/10 z-20 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md bg-black/60">
            <div>
              <p className="text-xs font-medium text-cyan-400 uppercase tracking-wider mb-1">Architecture Snapshot</p>
              <p className="text-sm font-semibold text-white">Full-Stack Microservices Architecture with Razorpay & Cloudinary</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://gamehub-ecommerce.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold text-xs hover:bg-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <ExternalLink size={14} /> Open Live Marketplace
              </a>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ── 3. Project Overview ── */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Globe size={22} />
          </div>
          <div>
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">Project Overview</h2>
            <p className="text-xs text-white/50">Core purpose, target audience, and business context</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl glass border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
              01
            </div>
            <h3 className="font-outfit font-bold text-lg text-white">What is GameHub?</h3>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              GameHub is an end-to-end gaming e-commerce marketplace enabling gamers to explore consoles, accessories, digital products, and gear with a seamless shopping cart, wishlist, and secure Razorpay payment flow.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-bold">
              02
            </div>
            <h3 className="font-outfit font-bold text-lg text-white">Why it Was Built</h3>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Traditional gaming stores suffer from slow page speed, cluttered UI, lack of real-time order tracking, and fragmented inventory controls. GameHub was engineered to solve these exact pain points.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
              03
            </div>
            <h3 className="font-outfit font-bold text-lg text-white">Who it is For</h3>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Designed for PC & Console Gamers seeking verified hardware, alongside Store Administrators needing comprehensive control over product listings, customer orders, and sales metrics.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
              04
            </div>
            <h3 className="font-outfit font-bold text-lg text-white">Main Purpose</h3>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Demonstrate a production-ready MERN application with robust security headers, sub-second query performance, automated payment verification, and high-converting UX design.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. The Challenge ── */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <AlertCircle size={22} />
          </div>
          <div>
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">The Challenge</h2>
            <p className="text-xs text-white/50">Core engineering problems that inspired the project</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Product Discovery & Filtering',
              desc: 'Handling multi-parameter queries (category, price range, brand, availability) without triggering full page reloads or database bottlenecking.',
              icon: Search,
            },
            {
              title: 'Secure Role-Based Authentication',
              desc: 'Enforcing strict access boundaries between Guest, Customer, and Store Administrator users with secure token rotation.',
              icon: Lock,
            },
            {
              title: 'Shopping Experience & Cart Sync',
              desc: 'Maintaining state consistency between guest local storage carts and authenticated user database carts across multiple devices.',
              icon: ShoppingCart,
            },
            {
              title: 'Payment Gateway Integration',
              desc: 'Ensuring PCI-compliant, double-verified Razorpay transactions with webhook HMAC-SHA256 signature verification to prevent order tampering.',
              icon: CreditCard,
            },
            {
              title: 'Admin Store Management',
              desc: 'Providing non-technical store managers with an intuitive UI to add stock, update tracking stages, and upload optimized media.',
              icon: LayoutDashboard,
            },
            {
              title: 'Scalability & Asset Load Speeds',
              desc: 'Optimizing heavy 4K gaming product photography to deliver sub-second initial load speeds on mobile networks.',
              icon: Cpu,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass border border-amber-500/10 hover:border-amber-500/30 transition-colors flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <item.icon size={18} />
                </div>
                <h3 className="font-outfit font-bold text-base text-white">{item.title}</h3>
              </div>
              <p className="text-xs text-white/60 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. The Solution ── */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <CheckCircle2 size={22} />
          </div>
          <div>
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">The Technical Solution</h2>
            <p className="text-xs text-white/50">Architectural decisions powering GameHub</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'React 19 & Tailwind CSS v4',
              desc: 'Single Page Application architecture with component-driven UI, custom hooks, and Tailwind v4 utility styles for sub-second micro-interactions.',
              badge: 'Frontend SPA',
            },
            {
              title: 'Express.js RESTful API',
              desc: 'Modular controller-service architecture with custom middleware for JWT validation, rate limiting, and centralized error handling.',
              badge: 'Backend Microservices',
            },
            {
              title: 'MongoDB & Mongoose ORM',
              desc: 'Schema-indexed document modeling with aggregation pipelines for fast product lookups and transactional order status rollbacks.',
              badge: 'Database Layer',
            },
            {
              title: 'JWT Authentication Guard',
              desc: 'Dual-token pattern (Access & Refresh tokens) with bcryptjs password hashing and role-based middleware guards.',
              badge: 'Security Portal',
            },
            {
              title: 'Cloudinary Media CDN',
              desc: 'Direct admin panel uploads with automated image transformations, WebP auto-compression, and global CDN delivery.',
              badge: 'Cloud Storage',
            },
            {
              title: 'Razorpay Payment Pipeline',
              desc: 'Server-side order initiation, double-check HMAC signature validation, and instant webhook callbacks for order confirmation.',
              badge: 'Payment Gateway',
            },
          ].map((sol, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 bg-cyan-500/[0.02] flex flex-col justify-between gap-4"
            >
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
                  {sol.badge}
                </span>
                <h3 className="font-outfit font-bold text-lg text-white mb-2">{sol.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">{sol.desc}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-medium pt-2 border-t border-white/[0.06]">
                <CheckCircle2 size={14} /> Fully Implemented
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. Features Grid (Customer & Admin) ── */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
            <Layers size={22} />
          </div>
          <div>
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">Platform Features</h2>
            <p className="text-xs text-white/50">Divided into Customer Experience and Store Admin Control</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Customer Features Column */}
          <div className="p-6 sm:p-8 rounded-3xl glass border border-cyan-500/20 bg-cyan-500/[0.01]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <ShoppingCart className="text-cyan-400" size={24} />
              <h3 className="font-outfit font-bold text-xl text-white">Customer Features</h3>
            </div>

            <div className="space-y-4">
              {[
                { title: 'User Auth & JWT Portal', desc: 'Secure register, login, profile edit, and persistent session management.', icon: ShieldCheck },
                { title: 'Gaming Product Catalog', desc: 'Browse consoles, keyboards, audio, accessories, and digital keys.', icon: PackageCheck },
                { title: 'Sub-50ms Search & Filters', desc: 'Fuzzy keyword search, multi-category tags, and price sorting.', icon: SlidersHorizontal },
                { title: 'Shopping Cart & Wishlist', desc: 'Persistent cart calculations, promo code application, and wishlist toggle.', icon: ShoppingCart },
                { title: 'Razorpay Payment Gateway', desc: 'One-click checkout with UPI, Credit/Debit cards, NetBanking, & Wallets.', icon: CreditCard },
                { title: 'Real-Time Order Tracking', desc: 'Visual timeline progress from Order Placed to Shipped and Delivered.', icon: MapPin },
                { title: 'Product Reviews & Ratings', desc: 'Verified customer ratings, review submission, and rating breakdown bars.', icon: Star },
              ].map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl glass border border-white/[0.06] hover:border-cyan-500/30 transition-colors flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                    <feat.icon size={16} />
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-sm text-white mb-1">{feat.title}</h4>
                    <p className="text-xs text-white/60 font-light">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Features Column */}
          <div className="p-6 sm:p-8 rounded-3xl glass border border-violet-500/20 bg-violet-500/[0.01]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <LayoutDashboard className="text-violet-400" size={24} />
              <h3 className="font-outfit font-bold text-xl text-white">Admin Control Features</h3>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Executive Analytics Dashboard', desc: 'Live total revenue, active orders overview, and stock alert widgets.', icon: BarChart3 },
                { title: 'Product Management (CRUD)', desc: 'Create, update, archive products with drag-and-drop Cloudinary uploads.', icon: ImageIcon },
                { title: 'Category & Taxonomy Manager', desc: 'Dynamic category creation, sub-tag assignments, and brand filters.', icon: Layers },
                { title: 'Order Fulfillment Pipeline', desc: 'Update fulfillment status (Processing, Shipped, Out for Delivery, Delivered).', icon: PackageCheck },
                { title: 'User Account Supervision', desc: 'View registered customer roster, grant admin roles, and inspect security logs.', icon: Lock },
                { title: 'Inventory & Stock Alerts', desc: 'Automated low stock notifications and inventory restock triggers.', icon: RefreshCw },
              ].map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl glass border border-white/[0.06] hover:border-violet-500/30 transition-colors flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 shrink-0 mt-0.5">
                    <feat.icon size={16} />
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-sm text-white mb-1">{feat.title}</h4>
                    <p className="text-xs text-white/60 font-light">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Tech Stack Grid ── */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Code2 size={22} />
          </div>
          <div>
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">Tech Stack & Tools</h2>
            <p className="text-xs text-white/50">Modern technologies utilized across the stack</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            { name: 'React 19', role: 'Frontend UI', icon: Code2, color: 'text-cyan-400' },
            { name: 'Node.js', role: 'Runtime Environment', icon: Server, color: 'text-emerald-400' },
            { name: 'Express.js', role: 'REST API Framework', icon: Zap, color: 'text-white' },
            { name: 'MongoDB Atlas', role: 'NoSQL Database', icon: Database, color: 'text-emerald-400' },
            { name: 'Tailwind CSS v4', role: 'Utility Styling', icon: Sparkles, color: 'text-cyan-300' },
            { name: 'JWT Auth', role: 'Security Tokens', icon: Lock, color: 'text-amber-400' },
            { name: 'Razorpay', role: 'Payment Gateway', icon: CreditCard, color: 'text-blue-400' },
            { name: 'Cloudinary', role: 'Media CDN Storage', icon: ImageIcon, color: 'text-violet-400' },
            { name: 'Framer Motion', role: 'Micro-Animations', icon: Layers, color: 'text-pink-400' },
            { name: 'Axios', role: 'HTTP Client', icon: RefreshCw, color: 'text-purple-400' },
            { name: 'React Hook Form', role: 'Form Management', icon: CheckCircle2, color: 'text-teal-400' },
            { name: 'Vercel / Render', role: 'Hosting & CI/CD', icon: Globe, color: 'text-white' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl glass border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-200 flex items-center gap-3"
            >
              <div className={`p-2.5 rounded-xl bg-white/[0.03] ${item.color}`}>
                <item.icon size={20} />
              </div>
              <div>
                <p className="font-outfit font-semibold text-sm text-white">{item.name}</p>
                <p className="text-[11px] text-white/50">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. Project Architecture ── */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
            <Cpu size={22} />
          </div>
          <div>
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">System Architecture</h2>
            <p className="text-xs text-white/50">Visual data flow from Client SPA to Database & Cloud Services</p>
          </div>
        </div>

        <div className="p-8 rounded-3xl glass border border-white/10 bg-black/40">
          <div className="grid md:grid-cols-5 gap-4 items-center">
            {/* Step 1: Client */}
            <div className="p-5 rounded-2xl glass border border-cyan-500/30 bg-cyan-500/5 text-center flex flex-col items-center">
              <Code2 className="text-cyan-400 mb-2" size={28} />
              <p className="font-outfit font-bold text-sm text-white">React 19 Client</p>
              <p className="text-[11px] text-white/50 mt-1">Vite + Tailwind v4 + Framer Motion</p>
            </div>

            <div className="hidden md:flex items-center justify-center text-cyan-400 font-mono text-xs">
              HTTP / REST ➔
            </div>

            {/* Step 2: API Gateway */}
            <div className="p-5 rounded-2xl glass border border-violet-500/30 bg-violet-500/5 text-center flex flex-col items-center">
              <Server className="text-violet-400 mb-2" size={28} />
              <p className="font-outfit font-bold text-sm text-white">Express API Server</p>
              <p className="text-[11px] text-white/50 mt-1">JWT Guards + Rate Limiter + CORS</p>
            </div>

            <div className="hidden md:flex items-center justify-center text-violet-400 font-mono text-xs">
              Mongoose ➔
            </div>

            {/* Step 3: Database */}
            <div className="p-5 rounded-2xl glass border border-emerald-500/30 bg-emerald-500/5 text-center flex flex-col items-center">
              <Database className="text-emerald-400 mb-2" size={28} />
              <p className="font-outfit font-bold text-sm text-white">MongoDB Atlas</p>
              <p className="text-[11px] text-white/50 mt-1">Indexed Collections & Aggregation</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl glass border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="text-blue-400" size={20} />
                <div>
                  <p className="text-xs font-semibold text-white">Razorpay Payment Integration</p>
                  <p className="text-[10px] text-white/50">HMAC-SHA256 signature check & webhook callback</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Verified</span>
            </div>

            <div className="p-4 rounded-xl glass border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ImageIcon className="text-violet-400" size={20} />
                <div>
                  <p className="text-xs font-semibold text-white">Cloudinary Image Storage</p>
                  <p className="text-[10px] text-white/50">Auto WebP transformations & high-speed CDN delivery</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">CDN Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Development Process Timeline ── */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <TrendingUp size={22} />
          </div>
          <div>
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">Development Process</h2>
            <p className="text-xs text-white/50">Structured workflow from initial design to production launch</p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { step: '01', title: 'Planning & Requirements', desc: 'Mapped store scope, defined user roles (Customer vs Admin), and established MERN REST API conventions.' },
            { step: '02', title: 'UI/UX Design System', desc: 'Crafted dark cyberpunk glassmorphism layout wireframes, color system, and mobile navigation flows.' },
            { step: '03', title: 'Database Schema Modeling', desc: 'Designed MongoDB Mongoose schemas for Users, Products, Categories, Orders, and Product Reviews.' },
            { step: '04', title: 'Express REST API Development', desc: 'Built modular route controllers, sanitation middleware, pagination helpers, and error handlers.' },
            { step: '05', title: 'JWT Auth & Role Guards', desc: 'Implemented bcryptjs password hashing, JWT token issue/refresh cycles, and admin route authorization.' },
            { step: '06', title: 'React SPA & State Integration', desc: 'Developed responsive component suite, custom hooks for cart management, and Axios API interceptors.' },
            { step: '07', title: 'Razorpay & Cloudinary Integration', desc: 'Connected Razorpay SDK for checkout verification and Cloudinary API for drag-and-drop media uploads.' },
            { step: '08', title: 'Testing & Optimization', desc: 'Validated API response payloads, fixed edge-case auth flows, and optimized mobile Web Vitals scores.' },
            { step: '09', title: 'Production Deployment', desc: 'Deployed React SPA to Vercel and Express REST API to Render with environment variable secrets.' },
          ].map((proc, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass border border-white/[0.06] hover:border-cyan-500/30 transition-all flex items-start gap-4"
            >
              <span className="font-outfit font-black text-cyan-400 text-lg bg-cyan-500/10 border border-cyan-500/20 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                {proc.step}
              </span>
              <div>
                <h3 className="font-outfit font-bold text-base text-white mb-1">{proc.title}</h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">{proc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 10. User Journey Flow ── */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <ShoppingCart size={22} />
          </div>
          <div>
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">Customer Journey Flow</h2>
            <p className="text-xs text-white/50">8-step intuitive shopping and fulfillment experience</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            '1. Account Register',
            '2. Browse Catalog',
            '3. Search & Filter',
            '4. Add to Cart',
            '5. Checkout Review',
            '6. Razorpay Payment',
            '7. Order Confirmation',
            '8. Real-Time Tracking',
          ].map((flow, idx) => (
            <div key={idx} className="p-4 rounded-xl glass border border-white/[0.08] text-center">
              <span className="text-xs font-semibold text-cyan-300">{flow}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 11. Challenges & Solutions ── */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <AlertCircle size={22} />
          </div>
          <div>
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">Engineering Challenges & Solutions</h2>
            <p className="text-xs text-white/50">Comparative breakdown of obstacles and technical resolutions</p>
          </div>
        </div>

        <div className="space-y-6">
          {[
            {
              challenge: 'Preventing Unauthorized Access to Admin Controls & Sensitive Routes',
              solution: 'Constructed custom Express middleware (`protect` & `adminOnly`) verifying JWT signatures and user DB role status before controller execution.',
            },
            {
              challenge: 'Preventing Fraudulent Payment Completions via API Manipulation',
              solution: 'Enforced server-side Razorpay order creation and HMAC-SHA256 signature verification matching expected digests before marking orders as Paid.',
            },
            {
              challenge: 'Handling Large High-Resolution Product Images without Degrading Page Speeds',
              solution: 'Integrated Cloudinary Node SDK to process direct admin uploads, automatically outputting compressed WebP formats with responsive image srcSets.',
            },
            {
              challenge: 'Complex Multi-Tag Product Filtering with Dynamic Search Queries',
              solution: 'Built optimized MongoDB `$or` and `$and` query builders with indexed text search across title, brand, and category fields.',
            },
            {
              challenge: 'Cart Persistence Across Unauthenticated Guest & Authenticated User Sessions',
              solution: 'Designed a React custom hook merging localStorage guest cart items into the MongoDB user document immediately upon successful login.',
            },
          ].map((item, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-4 p-6 rounded-2xl glass border border-white/[0.08]">
              <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider block mb-1">Challenge</span>
                <p className="text-xs text-white/80 font-light leading-relaxed">{item.challenge}</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">Technical Solution</span>
                <p className="text-xs text-emerald-200/90 font-light leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 12. Key Results & Metrics ── */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Zap size={22} />
          </div>
          <div>
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">Results & Key Achievements</h2>
            <p className="text-xs text-white/50">Performance metrics and project milestones</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { val: '< 50ms', label: 'API Response Time' },
            { val: '100%', label: 'Razorpay PCI Compliance' },
            { val: '100%', label: 'Responsive Mobile UI' },
            { val: '98+', label: 'Lighthouse Score' },
            { val: '8+', label: 'Core Microservices' },
            { val: '0', label: 'Auth Vulnerabilities' },
            { val: 'MERN', label: 'Full Stack Architecture' },
            { val: 'Ready', label: 'Production Deployment' },
          ].map((res, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass border border-emerald-500/20 bg-emerald-500/[0.02] text-center">
              <p className="font-outfit font-black text-2xl sm:text-3xl text-emerald-400 mb-1">{res.val}</p>
              <p className="text-xs text-white/60 font-medium">{res.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 13. Future Roadmap / Enhancements ── */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
            <Sparkles size={22} />
          </div>
          <div>
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">Future Roadmap</h2>
            <p className="text-xs text-white/50">Planned enhancements and upcoming feature modules</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Live Order Maps', desc: 'Interactive GPS tracking for courier delivery progress.', icon: MapPin },
            { title: 'AI Recommendations', desc: 'Machine learning model suggesting products based on search history.', icon: Bot },
            { title: 'Hardware Comparison', desc: 'Side-by-side spec comparison tool for PS5 vs Xbox Series X.', icon: SlidersHorizontal },
            { title: 'Dynamic Coupons', desc: 'Rule-based discount code generator with usage caps.', icon: Percent },
            { title: 'Web Push Alerts', desc: 'Real-time push notifications for price drops and restocks.', icon: Bell },
            { title: 'Multi-Vendor Support', desc: 'Enable verified third-party sellers to list gaming gear.', icon: Store },
            { title: 'AI Support Chatbot', desc: 'Automated 24/7 customer service bot for order inquiries.', icon: Bot },
            { title: 'Sales Analytics Export', desc: 'CSV & PDF revenue report generation for store accountants.', icon: BarChart3 },
          ].map((enh, idx) => (
            <div key={idx} className="p-5 rounded-2xl glass border border-white/[0.08] hover:border-violet-500/30 transition-all flex flex-col gap-2">
              <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 w-fit">
                <enh.icon size={18} />
              </div>
              <h3 className="font-outfit font-bold text-sm text-white">{enh.title}</h3>
              <p className="text-xs text-white/60 font-light leading-relaxed">{enh.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 14. Project Gallery & Modal Preview ── */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <ImageIcon size={22} />
          </div>
          <div>
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-white">Project Showcase Gallery</h2>
            <p className="text-xs text-white/50">Click any image to open full-screen preview</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer hover:border-cyan-500/40 transition-all shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[240px] sm:h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 w-fit mb-2">
                  {item.category}
                </span>
                <h3 className="font-outfit font-bold text-lg text-white mb-1 flex items-center justify-between">
                  <span>{item.title}</span>
                  <Maximize2 size={16} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-white/70 font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 15. Lightbox Modal ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full rounded-3xl overflow-hidden glass border border-white/20 bg-slate-950 p-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-rose-500 transition-colors"
                aria-label="Close modal preview"
              >
                <X size={20} />
              </button>
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="w-full max-h-[75vh] object-contain rounded-2xl mb-4"
              />
              <div className="px-4 pb-2">
                <h3 className="font-outfit font-bold text-xl text-white">{selectedImage.title}</h3>
                <p className="text-xs text-white/60">{selectedImage.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 16. Technical Specs Summary Sidebar ── */}
      <section className="mb-20">
        <div className="p-8 rounded-3xl glass border border-white/10 bg-white/[0.01]">
          <h3 className="font-outfit font-bold text-2xl text-white mb-6">Technical Specifications Summary</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Developer Role</p>
              <p className="text-sm font-semibold text-white">Full Stack Developer</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Project Duration</p>
              <p className="text-sm font-semibold text-white">2.5 Months</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Architecture</p>
              <p className="text-sm font-semibold text-white">MERN Microservices</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Frontend</p>
              <p className="text-sm font-semibold text-white">React 19 + Tailwind</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Backend Server</p>
              <p className="text-sm font-semibold text-white">Node.js + Express</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Database</p>
              <p className="text-sm font-semibold text-white">MongoDB Atlas</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Payments</p>
              <p className="text-sm font-semibold text-white">Razorpay API</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Cloud Media</p>
              <p className="text-sm font-semibold text-white">Cloudinary CDN</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 17. Call to Action (CTA) ── */}
      <section className="text-center py-16 px-6 rounded-3xl glass border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 via-black to-violet-950/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            Let's Collaborate
          </span>
          <h2 className="font-outfit font-black text-3xl sm:text-4xl text-white">
            Interested in working together?
          </h2>
          <p className="text-sm text-white/60 font-light leading-relaxed">
            I build high-performing digital products and full-stack web applications for ambitious teams. Let's discuss your next project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="mailto:milindpatel1432@gmail.com"
              className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/25"
            >
              Contact Me
            </a>
            <button
              onClick={handleBackToPortfolio}
              className="px-6 py-3 rounded-xl glass border border-white/10 text-white hover:border-white/20 text-sm font-medium transition-colors"
            >
              Explore Other Projects
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
