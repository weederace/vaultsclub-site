import React from 'react';

const benefits = [
  {
    title: 'Passive Income',
    description: 'Earn regular rewards just by holding your NFT.',
    image: '/benefits/passive_income.png',
  },
  {
    title: 'Equal Ownership',
    description: 'All NFTs hold equal voting and earning power.',
    image: '/benefits/equal_ownership.png',
  },
  {
    title: 'High Transparency',
    description: 'Full on-chain visibility of all fund activities.',
    image: '/benefits/high_transparency.png',
  },
  {
    title: 'Decentralized Control',
    description: 'Decisions made by the community, not by a single entity.',
    image: '/benefits/decentralized_control.png',
  },
  {
    title: 'Staking System',
    description: 'Stake your NFT to boost your rewards over time.',
    image: '/benefits/staking_system.png',
  },
  {
    title: 'Low Gas Fees',
    description: 'Optimized smart contracts reduce costs on Solana.',
    image: '/benefits/low_gas_fees.png',
  },
  {
    title: 'Real-World Assets',
    description: 'Backed by real investments like crypto, real estate and mining.',
    image: '/benefits/real_world_assets.png',
  },
  {
    title: 'Premium Community',
    description: 'Join a high-value network of long-term investors.',
    image: '/benefits/premium_community.png',
  }
];

export default function MembershipSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center text-white overflow-hidden m-0 p-0">
      {/* بک‌گراند موبایل */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:hidden"
        style={{ backgroundImage: `url('/benefits/bg_mobile.png')` }}
      ></div>

      {/* بک‌گراند دسکتاپ */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden sm:block"
        style={{ backgroundImage: `url('/benefits/bg.png')` }}
      ></div>

      {/* لایه نیمه‌شفاف مشکی */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* محتوا */}
      <div className="relative z-10 px-4 sm:px-6 w-full">
        <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-400">
            Membership Benefits
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            What makes VaultsClub truly unique for long-term holders.
          </p>
        </div>

        {/* موبایل: ۲ ستون × ۴ کارت */}
        <div className="grid grid-cols-2 gap-4 sm:hidden max-w-md mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-black/40 rounded-xl p-4 shadow-lg"
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="h-16 mb-3"
              />
              <h3 className="text-sm font-semibold mb-1">{benefit.title}</h3>
              <p className="text-gray-300 text-xs">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* دسکتاپ: طراحی اصلی ۴ ستون */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-black/30 rounded-2xl p-4 sm:p-6 shadow-xl"
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="h-20 sm:h-24 mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
