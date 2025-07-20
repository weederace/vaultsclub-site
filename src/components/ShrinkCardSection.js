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
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden snap-start text-center"
    >
      {/* بک‌گراند تصویری */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/shrinkcard/bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
        }}
      />

      {/* کارت NFT */}
      <motion.img
        src="/vaultsclub_card_blank.png"
        alt="VaultsClub NFT"
        style={{ scale, opacity }}
        className="relative z-10 rounded-2xl shadow-2xl border border-gray-700 w-11/12 sm:w-full max-w-xs sm:max-w-sm"
      />

      {/* متن سمت چپ و راست (در دسکتاپ) */}
      <motion.div
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm md:text-base w-1/4 hidden md:block z-10"
        style={{ opacity }}
      >
        🧠 Powered by smart contracts and snapshot logic
      </motion.div>

      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm md:text-base w-1/4 text-right hidden md:block z-10"
        style={{ opacity }}
      >
        📈 The longer you hold, the more you earn
      </motion.div>

      {/* متن‌ها در موبایل (زیر کارت) */}
      <div className="md:hidden mt-6 space-y-2 text-gray-400 text-sm z-10">
        <p>🧠 Powered by smart contracts and snapshot logic</p>
        <p>📈 The longer you hold, the more you earn</p>
      </div>
    </section>
  );
}

export default ShrinkCardSection;
