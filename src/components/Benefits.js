import React from 'react';

const benefits = [
  {
    title: 'Passive Income',
    description: 'Earn regular rewards just by holding your NFT.',
    image: '/benefits/income.png',
  },
  {
    title: 'Equal Ownership',
    description: 'All NFTs hold equal voting and earning power.',
    image: '/benefits/ownership.png',
  },
  {
    title: 'High Transparency',
    description: 'Full on-chain visibility of all fund activities.',
    image: '/benefits/transparency.png',
  },
  {
    title: 'Decentralized Control',
    description: 'Decisions made by the community, not by a single entity.',
    image: '/benefits/control.png',
  },
  {
    title: 'Staking System',
    description: 'Stake your NFT to boost your rewards over time.',
    image: '/benefits/staking.png',
  },
  {
    title: 'Low Gas Fees',
    description: 'Optimized smart contracts reduce costs on Solana.',
    image: '/benefits/gas.png',
  },
  {
    title: 'Real-World Assets',
    description: 'Backed by real investments like crypto, real estate and mining.',
    image: '/benefits/assets.png',
  },
  {
    title: 'Premium Community',
    description: 'Join a high-value network of long-term investors.',
    image: '/benefits/community.png',
  }
];

export default function Benefits() {
  return (
    <section
	className="relative text-white pt-4 pb-12"
      style={{
        aspectRatio: '16 / 9',
        backgroundImage: `url('/benefits/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* لایه مشکی نیمه‌شفاف */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* محتوای اصلی */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">Membership Benefits</h2>
          <p className="text-gray-400 text-lg">What makes VaultsClub truly unique for long-term holders.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-black/30 rounded-2xl p-6 shadow-xl"
            >
              <img src={benefit.image} alt={benefit.title} className="h-24 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
