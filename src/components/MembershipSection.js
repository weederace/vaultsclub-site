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
    <section
      className="relative w-full text-white min-h-screen snap-start"
      style={{
        backgroundImage: `url('/benefits/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* لایه نیمه‌شفاف مشکی */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* محتوا */}
      <div className="relative z-10 px-4 sm:px-6 py-16 sm:py-24">

        <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-400">
            Membership Benefits
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            What makes VaultsClub truly unique for long-term holders.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
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
