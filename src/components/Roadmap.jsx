import React from "react";

function Roadmap() {
  return (
    <section className="w-full bg-black text-white py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
          🗺️ Roadmap
        </h2>

        <img
          src="/RoadMap.png"
          alt="VaultsClub Roadmap"
          className="w-full rounded-xl sm:rounded-2xl shadow-2xl border border-gray-700 mb-6 sm:mb-8"
        />

        <p className="text-center text-gray-400 text-base sm:text-lg px-2">
          Transparent & time-based milestones for the VaultsClub community.
        </p>
      </div>
    </section>
  );
}

export default Roadmap;
