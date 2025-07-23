import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MembershipSection from "./components/MembershipSection";
import ShrinkCardSection from "./components/ShrinkCardSection";
import Roadmap from "./components/Roadmap";
import "./index.css";
import "./responsive.css";

function MobileApp() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white bg-black relative overflow-x-hidden">
      {/* --- Navbar --- */}
      <header className="p-4 flex justify-between items-center bg-black/50 z-50 fixed top-0 left-0 right-0">
        <img src="/Logo.png" alt="VaultsClub Logo" className="h-10 w-auto" />
        <button
          className="text-yellow-400 text-3xl z-50"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </header>

      {/* --- منوی کشویی --- */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setMenuOpen(false)}
            ></motion.div>

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-72 bg-black/95 z-50 shadow-xl p-6 flex flex-col gap-5"
            >
              <button
                className="self-end text-yellow-400 text-2xl mb-4"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>

              <a
                href="https://x.com/YieldVaults"
                onClick={() => setMenuOpen(false)}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-5 rounded-lg flex items-center gap-3 shadow-md text-lg transition"
              >
                <img src="/X.png" alt="X Icon" className="h-6 w-6" />
                Join the Club
              </a>

              <a
                href="#roadmap"
                onClick={() => setMenuOpen(false)}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-5 rounded-lg flex items-center gap-3 shadow-md text-lg transition"
              >
                <img src="/RoadMapic.png" alt="Roadmap Icon" className="h-6 w-6" />
                Roadmap
              </a>

              <a
                href="#blog"
                onClick={() => setMenuOpen(false)}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-5 rounded-lg flex items-center gap-3 shadow-md text-lg transition"
              >
                <img src="/Blog.png" alt="Blog Icon" className="h-6 w-6" />
                Blog
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <section
        className="flex flex-col items-center justify-center px-4 text-center relative h-screen"
        style={{
          backgroundImage: `url('/images/first_bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-yellow-400">
            Professional NFT Fund
          </h1>
          <p className="text-gray-300 mt-4 text-base">
            Real yield on <span className="text-white">Solana</span>.
          </p>
          <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-full">
            Join the Club
          </button>
        </div>
      </section>

      {/* --- Membership Section --- */}
      <section id="membership" className="py-12 sm:py-16">
        <MembershipSection />
      </section>

      {/* --- Shrink Card Section --- */}
      <section id="shrink-card" className="py-12 sm:py-16">
        <ShrinkCardSection />
      </section>

      {/* --- Roadmap Section --- */}
      <section id="roadmap" className="py-12 sm:py-16">
        <Roadmap />
      </section>

      {/* --- Blog Section --- */}
      <section id="blog" className="py-16 text-center">
        <h2 className="text-yellow-400 text-2xl font-bold mb-4">
          Blog Coming Soon...
        </h2>
        <p className="text-gray-400 text-base">
          We’re working on launching our blog with valuable updates and insights.
        </p>
      </section>

      {/* --- Footer --- */}
      <footer className="text-center text-gray-500 p-4 text-sm border-t border-gray-700">
        © 2025 VaultsClub | All rights reserved.
      </footer>
    </div>
  );
}

export default MobileApp;
