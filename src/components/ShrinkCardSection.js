// components/ShrinkCardSection.js
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ShrinkCardSection() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [3.8, 1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-dark px-6 overflow-hidden"
    >
      <motion.img
        src="/vaultsclub_card_blank.png"
        alt="VaultsClub NFT"
        style={{ scale, opacity }}
        className="relative z-10 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-sm"
      />

      <motion.div
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm md:text-base w-1/4 hidden md:block"
        style={{ opacity }}
      >
        🧠 Powered by smart contracts and snapshot logic
      </motion.div>

      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm md:text-base w-1/4 text-right hidden md:block"
        style={{ opacity }}
      >
        📈 The longer you hold, the more you earn
      </motion.div>
    </section>
  );
}

export default ShrinkCardSection;
