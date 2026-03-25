import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

const CATEGORIES = [
  {
    id: "brand",
    label: "YOUR BRAND A FACE",
    tagline: "Starts with a shape, Gives your brand a face.",
    packages: [
      {
        title: "Logo Basic",
        price: "350K",
        includes: [
          "2 logo concepts",
          "2 revisions",
          "Full files (PNG, JPG, SVG)",
          "Simple presentation"
        ]
      },
      {
        title: "Logo Direction",
        price: "750K",
        includes: [
          "3 logo concepts",
          "3 revisions",
          "Full files (PNG, JPG, SVG)",
          "Basic guideline (color & usage)"
        ]
      }
    ]
  },
  {
    id: "social",
    label: "SOCIAL MEDIA",
    tagline: "Starts with a shape, Gives your brand a face.",
    packages: [
      {
        title: "The Fix",
        price: "150K",
        includes: [
          "2 Design + 1 Design Story",
          "2 revision"
        ]
      },
      {
        title: "The Shift",
        price: "350K",
        includes: [
          "3 designs + 2 Design Story",
          "2 revisions",
          "Caption direction",
          "Consistent visual style"
        ]
      },
      {
        title: "Logo Direction",
        price: "750K",
        includes: [
          "6 designs + 3 Design Story",
          "Highlight covers",
          "Basic color direction",
          "3 revisions"
        ]
      }
    ]
  },
  {
    id: "identity",
    label: "BRAND IDENTITY",
    tagline: "Starts with a shape, Gives your brand a face.",
    packages: [
      {
        title: "Identity Basic",
        price: "950K",
        includes: [
          "Primary logo",
          "Color palette",
          "Typography",
          "Simple guideline"
        ]
      },
      {
        title: "Identity System",
        price: "1950K",
        includes: [
          "Logo system (primary + secondary)",
          "Color palette",
          "Typography system",
          "3-5 social media templates",
          "Brand guideline PDF"
        ]
      },
      {
        title: "Identity Full",
        price: "2950K",
        includes: [
          "Full logo system",
          "Color + typography system",
          "Social media kit",
          "Stationery (optional)",
          "Complete brand guideline"
        ]
      }
    ]
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden selection:bg-brand-orange selection:text-white">
      {/* Halftone Pattern Overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-halftone opacity-30 pointer-events-none" />

      {/* Navbar */}
      <nav className="container mx-auto px-6 py-8 flex justify-between items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter text-white cursor-pointer"
          onClick={() => setActiveCategory(CATEGORIES[0])}
        >
          FAUXA
        </motion.div>
        <motion.a
          href="https://api.whatsapp.com/send?phone=6287882721269&text=Break%20The%20Visual%20And%20Konsultasi%20Yukkk"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-orange text-black px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg shadow-brand-orange/20 inline-block"
        >
          Break the Visual
        </motion.a>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-12 pb-24 relative z-10 text-center">
        <motion.div
          key={activeCategory.id + "hero"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-handwriting text-brand-orange mb-2">
            Make It Make Sense
          </h1>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            What They <span className="text-brand-orange">See.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's fix how your brand shows up
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all ${
                activeCategory.id === cat.id 
                  ? "bg-brand-orange text-black" 
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.p 
            key={activeCategory.id + "tagline"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-gray-400 text-sm mb-12 italic"
          >
            {activeCategory.tagline}
          </motion.p>
        </AnimatePresence>

        {/* Pricing Cards */}
        <div className={`grid gap-8 max-w-6xl mx-auto mb-16 ${
          activeCategory.packages.length === 3 ? "md:grid-cols-3" : 
          activeCategory.packages.length === 2 ? "md:grid-cols-2" : "md:grid-cols-1 max-w-md"
        }`}>
          <AnimatePresence mode="popLayout">
            {activeCategory.packages.map((pkg, idx) => (
              <motion.div
                key={activeCategory.id + pkg.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left hover:border-brand-orange/50 transition-colors group relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl font-black text-brand-orange leading-tight">{pkg.title}</h3>
                  <span className="text-3xl font-black text-brand-orange">{pkg.price}</span>
                </div>
                <div className="space-y-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Includes:</p>
                  <ul className="space-y-3">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-200 text-sm">
                        <Check className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Extra Services */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-brand-orange font-bold text-sm md:text-base tracking-widest mb-24"
        >
          Extra revision → +50K | Express → +100K | Additional concept → +150K
        </motion.div>

        {/* Terms & Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gray-200 text-black rounded-3xl p-8 md:p-12 text-left max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap">FAUXA — TERMS & CONDITIONS</h4>
            <div className="h-px bg-black/20 w-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="space-y-6">
              <div>
                <h5 className="font-black text-xs uppercase mb-2">1. Project Scope</h5>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Each package includes only what is listed. Any additional request will be treated as an extra service.
                </p>
              </div>
              <div>
                <h5 className="font-black text-xs uppercase mb-2">2. Payment</h5>
                <p className="text-xs text-gray-600 leading-relaxed">
                  50% upfront payment is required to start the project. Remaining 50% must be completed before final files are delivered.
                </p>
              </div>
              <div>
                <h5 className="font-black text-xs uppercase mb-2">3. Revisions</h5>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Revisions are limited based on the selected package. Additional revisions will be charged separately.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h5 className="font-black text-xs uppercase mb-2">4. Timeline</h5>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Standard delivery time is 1–3 working days depending on the package. Delays may occur if feedback is not provided on time.
                </p>
              </div>
              <div>
                <h5 className="font-black text-xs uppercase mb-2">5. File Delivery</h5>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Final files will be delivered after full payment is completed. Editable/source files are not included unless stated.
                </p>
              </div>
              <div>
                <h5 className="font-black text-xs uppercase mb-2">6. Portfolio Rights</h5>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Clients are free to use the final design for their business. FAUXA reserves the right to showcase the work for portfolio purposes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-24 text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase">
          © FAUXA 2026
        </footer>
      </main>
    </div>
  );
}
