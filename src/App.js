// src/App.js
import React, { useRef, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Roadmap from "./components/Roadmap";
import MembershipSection from "./components/MembershipSection";
import ShrinkCardSection from "./components/ShrinkCardSection"; 
import "./index.css";

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

      <motion.header
        style={{ y: navbarY }}
        className="fixed top-4 right-10 bg-black/60 backdrop-blur-md z-50 flex justify-between items-center px-6 py-3 rounded-full shadow-lg w-[60%] transition-transform duration-500"
      >
        <div className="flex gap-3">
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
        <div className="flex items-center" style={{ marginRight: "12px" }}>
          <img src="/Logo.png" alt="VaultsClub Logo" className="h-12 w-auto" />
        </div>
      </motion.header>

      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity }}
        className="h-[100svh] w-full flex flex-col justify-center items-end pr-6 md:pr-20 text-left relative"
      >
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: `url('/vaults_bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative max-w-xl bg-black/60 p-8 rounded-xl backdrop-blur-md leading-relaxed space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 leading-snug tracking-tight">
            A professional NFT fund<br />
            with real yield on <span className="text-white">Solana</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl tracking-wide">
            Join the future of decentralized investments<br />
            with <span className="text-white font-semibold">VaultsClub</span>.
          </p>
        </div>
      </motion.section>

      <section id="membership" className="bg-dark">
        <MembershipSection />
      </section>

      <section id="shrink-card">
        <ShrinkCardSection />
      </section>

     <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 px-4 sm:px-6 bg-dark max-w-6xl mx-auto">
  <div className="w-full md:w-1/2 flex justify-center">
    <ReactECharts option={chartOptions} style={{ height: "280px", width: "100%" }} />
  </div>
  <ul className="text-gray-300 text-sm sm:text-base space-y-2 sm:space-y-3 w-full md:w-1/2 text-center md:text-left">
    <li><span className="text-yellow-400 font-semibold">50%</span> - Investment in assets</li>
    <li><span className="text-purple-400 font-semibold">30%</span> - Stable fund for regular yield payouts</li>
    <li><span className="text-sky-400 font-semibold">10%</span> - Core team allocation</li>
    <li><span className="text-gray-400 font-semibold">6%</span> - Technical development</li>
    <li><span className="text-pink-400 font-semibold">4%</span> - Marketing & promotion</li>
  </ul>
</section>


      <section className="min-h-screen flex flex-col justify-center items-center text-sm text-gray-400 text-center bg-dark px-6">
        <p>✅ Snapshot-based yield distribution to holders</p>
        <p>📈 The longer you hold, the more you earn</p>
        <p>🔍 Full transparency on the blockchain</p>
      </section>

      <section id="roadmap" className="min-h-screen flex justify-center items-center bg-dark px-6 py-20">
        <Roadmap />
      </section>

      <section id="blog" className="min-h-screen flex justify-center items-center bg-dark px-6">
        <h2 className="text-4xl font-bold text-yellow-400">Blog Coming Soon...</h2>
      </section>
    </div>
  );
}

export default App;
