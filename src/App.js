import React, { useRef, useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Roadmap from "./components/Roadmap";
import MembershipSection from "./components/MembershipSection";
import ShrinkCardSection from "./components/ShrinkCardSection";
import "./index.css";
import "./responsive.css"; // فایل جدید برای تنظیمات موبایل

const chartOptions = {
  tooltip: { trigger: "item", formatter: "{b}: {d}%" },
  legend: {
    orient: "vertical",
    right: 10,
    top: "center",
    textStyle: { color: "#ccc", fontWeight: "bold" },
  },
  series: [
    {
      name: "Tokenomics",
      type: "pie",
      radius: ["50%", "75%"],
      center: ["40%", "50%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#111827",
        borderWidth: 4,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: "rgba(0, 0, 0, 0.4)",
      },
      label: { show: false },
      emphasis: {
        scale: true,
        scaleSize: 10,
        itemStyle: {
          shadowBlur: 25,
          shadowColor: "rgba(255, 255, 255, 0.3)",
        },
      },
      labelLine: { show: false },
      data: [
        { value: 50, name: "Investment in assets", itemStyle: { color: "#FFD600" } },
        { value: 30, name: "Stable yield fund", itemStyle: { color: "#9E6EFF" } },
        { value: 10, name: "Core team allocation", itemStyle: { color: "#38BDF8" } },
        { value: 6, name: "Technical development", itemStyle: { color: "#64748B" } },
        { value: 4, name: "Marketing & promotion", itemStyle: { color: "#F472B6" } },
      ],
    },
  ],
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end 0.6"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const navbarY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  useEffect(() => {
    let ticking = false;
    let upwardScrolls = 0;
    let positions = [];

    const updatePositions = () => {
      const sections = Array.from(document.querySelectorAll("section"));
      positions = sections.map((s) => s.offsetTop);
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);

    const handleScroll = (event) => {
      event.preventDefault();
      if (ticking) return;
      ticking = true;

      const currentScroll = window.scrollY + 1;
      const currentIndex = positions.findLastIndex((pos) => pos <= currentScroll);
      const delta = event.deltaY;
      const direction = delta > 0 ? 1 : -1;
      let targetIndex = currentIndex;

      if (direction === 1) {
        upwardScrolls = 0;
        targetIndex = Math.min(positions.length - 1, currentIndex + 1);
      } else {
        upwardScrolls++;
        if (upwardScrolls >= 2) {
          targetIndex = Math.max(0, currentIndex - 2);
          upwardScrolls = 0;
        } else {
          targetIndex = Math.max(0, currentIndex - 1);
        }
      }

      if (targetIndex !== currentIndex) {
        window.scrollTo({ top: positions[targetIndex], behavior: "smooth" });
      }

      setTimeout(() => {
        ticking = false;
      }, 400);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("resize", updatePositions);
    };
  }, []);

  return (
    <div className="text-white relative">
      <div className="absolute inset-0 bg-dark z-[-2]"></div>

      {/* Header */}
      <motion.header
        style={{ y: navbarY }}
        className="header-container"
      >
        <div className="flex items-center gap-2">
          <img src="/Logo.png" alt="VaultsClub Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-3">
          <a
            href="https://x.com/YieldVaults"
            target="_blank"
            rel="noopener noreferrer"
            className="header-btn"
          >
            Join the Club
          </a>
          <button className="header-btn-alt">
            📝 Apply for Whitelist
          </button>
          <a
            href="#roadmap"
            className="header-btn"
          >
            Roadmap
          </a>
          <a
            href="#blog"
            className="header-btn"
          >
            Blog
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div className="mobile-menu">
            <a href="https://x.com/YieldVaults" className="text-yellow-400">Join the Club</a>
            <a href="#roadmap" className="text-yellow-400">Roadmap</a>
            <a href="#blog" className="text-yellow-400">Blog</a>
          </div>
        )}
      </motion.header>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity }}
        className="hero-section"
      >
        <div className="hero-bg"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            A professional NFT fund<br />
            with real yield on <span className="text-white">Solana</span>.
          </h1>
          <p className="hero-subtitle">
            Join the future of decentralized investments<br />
            with <span className="text-white font-semibold">VaultsClub</span>.
          </p>
        </div>
      </motion.section>

      {/* Membership */}
      <section id="membership" className="bg-dark">
        <MembershipSection />
      </section>

      {/* Shrink Card */}
      <section id="shrink-card">
        <ShrinkCardSection />
      </section>

      {/* Tokenomics */}
      <section className="tokenomics-section">
        <div className="w-full md:w-1/2 flex justify-center">
          <ReactECharts option={chartOptions} style={{ height: "280px", width: "100%" }} />
        </div>
        <ul className="tokenomics-list">
          <li><span className="text-yellow-400 font-semibold">50%</span> - Investment in assets</li>
          <li><span className="text-purple-400 font-semibold">30%</span> - Stable fund for regular yield payouts</li>
          <li><span className="text-sky-400 font-semibold">10%</span> - Core team allocation</li>
          <li><span className="text-gray-400 font-semibold">6%</span> - Technical development</li>
          <li><span className="text-pink-400 font-semibold">4%</span> - Marketing & promotion</li>
        </ul>
      </section>

      {/* Highlights */}
      <section className="highlights-section">
        <p>✅ Snapshot-based yield distribution to holders</p>
        <p>📈 The longer you hold, the more you earn</p>
        <p>🔍 Full transparency on the blockchain</p>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="roadmap-section">
        <Roadmap />
      </section>

      {/* Blog */}
      <section id="blog" className="blog-section">
        <h2 className="text-4xl font-bold text-yellow-400">Blog Coming Soon...</h2>
      </section>
    </div>
  );
}

export default App;
