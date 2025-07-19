import React from 'react';

function Roadmap() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
        🗺️ Roadmap
      </h2>
      <img
        src="/RoadMap.png"
        alt="VaultsClub Roadmap"
        className="w-full rounded-2xl shadow-2xl border border-gray-700"
      />
      <p className="text-center text-gray-400 mt-4 text-sm">
        Transparent & time-based milestones for the VaultsClub community.
      </p>
    </section>
  );
}

export default Roadmap;
