import React, { useRef, useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Roadmap from "./components/Roadmap";
import MembershipSection from "./components/MembershipSection";
import ShrinkCardSection from "./components/ShrinkCardSection";
import "./index.css";
import "./responsive.css";

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

  // --- اسکرول سکشن به سکشن (نسخه پایدار) ---
  useEffect(() => {
    let positions = [];
    let ticking = false;

    const updatePositions = () => {
      const sections = Array.from(document.querySelectorAll("section"));
      positions = sections.map((s) => Math.round(s.offsetTop));
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);

    const handleScroll = (event) => {
      event.preventDefault();
      if (ticking) return;
      ticking = true;

      // اگر بالا می‌رویم، کمی currentScroll را کم می‌کنیم
      const adjustment = event.deltaY < 0 ? -50 : 0;
      const currentScroll = window.scrollY + 10 + adjustment;

      const currentIndex = positions.findLastIndex((pos) => pos <= currentScroll);
      const direction = event.deltaY > 0 ? 1 : -1;

      let targetIndex = currentIndex + direction;
      if (targetIndex < 0) targetIndex = 0;
      if (targetIndex >= positions.length) targetIndex = positions.length - 1;

      window.scrollTo({ top: positions[targetIndex], behavior: "smooth" });

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

      {/* Navbar */}
      <motion.header
        style={{ y: navbarY }}
        className="fixed top-4 right-4 bg-black/60 backdrop-blur-md z-50 flex justify-between items-center px-4 md:px-6 py-3 rounded-full shadow-lg w-[60%] transition-transform duration-500"
      >
        {/* Links - Desktop */}
        <div className="hidden md:flex gap-3">
          <a
            href="https://x.com/YieldVaults"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded-full shadow-md flex items-center gap-2"
          >
            <img src="/X.png" alt="X Icon" className="h-5 w-5" />
            Join the Club
          </a>
          <button className="bg-gray-800 text-gray-300 font-semibold py-2 px-6 rounded-full shadow-inner">
            📝 Apply for Whitelist
          </button>
          <a
            href="#roadmap"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded-full flex items-center gap-2"
          >
            <img src="/RoadMapic.png" alt="Roadmap Icon" className="h-5 w-5" />
            Roadmap
          </a>
          <a
            href="#blog"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded-full flex items-center gap-2"
          >
            <img src="/Blog.png" alt="Blog Icon" className="h-5 w-5" />
            Blog
          </a>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <img src="/Logo.png" alt="VaultsClub Logo" className="h-10 w-auto" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-black/90 p-4 rounded-lg shadow-lg w-52 flex flex-col gap-3 md:hidden">
            <a
              href="https://x.com/YieldVaults"
              className="flex items-center gap-2 text-yellow-400"
            >
              <img src="/X.png" alt="X Icon" className="h-5 w-5" />
              Join the Club
            </a>
            <a href="#roadmap" className="flex items-center gap-2 text-yellow-400">
              <img src="/RoadMapic.png" alt="Roadmap Icon" className="h-5 w-5" />
              Roadmap
            </a>
            <a href="#blog" className="flex items-center gap-2 text-yellow-400">
              <img src="/Blog.png" alt="Blog Icon" className="h-5 w-5" />
              Blog
            </a>
          </div>
        )}
      </motion.header>

      {/* Hero */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity }}
        className="h-[100svh] w-full flex flex-col justify-center items-end pt-24 pr-4 sm:pr-6 md:pr-20 text-left relative hero-section"
      >
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: `url('/vaults_bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative max-w-xl bg-black/60 p-6 sm:p-8 rounded-xl backdrop-blur-md leading-relaxed space-y-6 hero-content">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-400 leading-snug tracking-tight hero-title">
            A professional NFT fund<br />
            with real yield on <span className="text-white">Solana</span>.
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl tracking-wide hero-subtitle">
            Join the future of decentralized investments<br />
            with <span className="text-white font-semibold">VaultsClub</span>.
          </p>
        </div>
      </motion.section>

      {/* Membership */}
      <section id="membership" className="min-h-screen">
        <MembershipSection />
      </section>

      {/* Shrink Card */}
      <section id="shrink-card" className="min-h-screen">
        <ShrinkCardSection />
      </section>

      {/* Tokenomics */}
      <section className="tokenomics-section min-h-screen flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 px-4 sm:px-6 bg-dark max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 flex justify-center">
          <ReactECharts option={chartOptions} style={{ height: "280px", width: "100%" }} />
        </div>
        <ul className="tokenomics-list text-center md:text-left text-gray-300 text-sm sm:text-base space-y-2 sm:space-y-3 w-full md:w-1/2">
          <li><span className="text-yellow-400 font-semibold">50%</span> - Investment in assets</li>
          <li><span className="text-purple-400 font-semibold">30%</span> - Stable fund for regular yield payouts</li>
          <li><span className="text-sky-400 font-semibold">10%</span> - Core team allocation</li>
          <li><span className="text-gray-400 font-semibold">6%</span> - Technical development</li>
          <li><span className="text-pink-400 font-semibold">4%</span> - Marketing & promotion</li>
        </ul>
      </section>

      {/* Highlights */}
      <section className="highlights-section min-h-screen flex flex-col justify-center items-center text-sm text-gray-400 text-center bg-dark px-6">
        <p>✅ Snapshot-based yield distribution to holders</p>
        <p>📈 The longer you hold, the more you earn</p>
        <p>🔍 Full transparency on the blockchain</p>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="roadmap-section min-h-screen flex justify-center items-center bg-dark px-6 py-20">
        <Roadmap />
      </section>

      {/* Blog */}
      <section id="blog" className="blog-section min-h-screen flex justify-center items-center bg-dark px-6">
        <h2 className="text-4xl font-bold text-yellow-400">Blog Coming Soon...</h2>
      </section>
    </div>
  );
}

export default App;
