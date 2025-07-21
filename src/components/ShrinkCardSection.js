import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ShrinkCardSection() {
  const ref = useRef();

  // اسکرول کارت
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // کارت: Scale + حرکت + محو شدن
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.9], [2, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.9], [-40, 150]); // بالاتر شروع می‌شود
  const opacity = useTransform(scrollYProgress, [0, 0.7, 0.9], [1, 1, 0]);

  // متن‌ها: حرکت طرفین + محو
  const textLeftX = useTransform(scrollYProgress, [0, 0.9], [0, -150]);
  const textRightX = useTransform(scrollYProgress, [0, 0.9], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7, 0.9], [1, 1, 0]);

  const leftTexts = [
    "🧠 Smart contracts ensure automated rewards.",
    "🔒 Immutable blockchain for full transparency.",
    "🏦 Backed by real-world assets for steady growth."
  ];

  const rightTexts = [
    "📈 The longer you hold, the bigger your rewards.",
    "💰 Boosted yield for loyal VaultsClub members.",
    "🚀 Compounding returns for long-term holders."
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden snap-start"
    >
      {/* بک‌گراند */}
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

      {/* کانتینر اصلی */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-8 md:gap-20">
        {/* متن چپ */}
        <motion.div
          className="text-gray-300 text-lg md:text-xl flex-1 hidden md:flex flex-col gap-5 text-left"
          style={{ x: textLeftX, opacity: textOpacity }}
        >
          {leftTexts.map((text, i) => (
            <p key={i} className="leading-relaxed">{text}</p>
          ))}
        </motion.div>

        {/* کارت وسط */}
        <motion.img
          src="/vaultsclub_card_blank.png"
          alt="VaultsClub NFT"
          style={{ scale, y, opacity }}
          className="rounded-2xl shadow-2xl border border-gray-700 w-full max-w-xs sm:max-w-md md:max-w-xl -mt-10 sm:-mt-16 md:-mt-20"
        />

        {/* متن راست */}
        <motion.div
          className="text-gray-300 text-lg md:text-xl flex-1 hidden md:flex flex-col gap-5 text-left"
          style={{ x: textRightX, opacity: textOpacity }}
        >
          {rightTexts.map((text, i) => (
            <p key={i} className="leading-relaxed">{text}</p>
          ))}
        </motion.div>
      </div>

      {/* موبایل */}
      <div className="md:hidden mt-6 space-y-4 text-gray-300 text-base z-10 text-center">
        {leftTexts.concat(rightTexts).map((text, i) => (
          <p key={i} className="leading-relaxed">{text}</p>
        ))}
      </div>
    </section>
  );
}

export default ShrinkCardSection;
