import React from "react";

const steps = [
  {
    number: "01",
    title: "Project Kickoff",
    desc: "Initial planning and project scoping to set the foundation.",
    color: "bg-teal-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 2a8 8 0 016.32 12.906L22 21.59 20.59 23l-5.68-5.68A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Development Phase",
    desc: "Core feature development and initial testing of modules.",
    color: "bg-green-400",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a9 9 0 019 9c0 5-4 7-9 11-5-4-9-6-9-11a9 9 0 019-9z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Beta Launch",
    desc: "Release the beta version for initial user feedback and testing.",
    color: "bg-gray-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L15 8l7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Public Release",
    desc: "Launching the project with full functionalities.",
    color: "bg-red-400",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 2h4v2h-4V2zm1 20h2v-2h-2v2zm9-9h2v2h-2v-2zm-18 0h2v2H2v-2zm13.07-5.07l1.41 1.41-1.41 1.41-1.41-1.41 1.41-1.41zm-10.95 0l1.41 1.41L4.12 10.7 2.7 9.29l1.41-1.41zM18.36 18.36l1.41 1.41-1.41 1.41-1.41-1.41 1.41-1.41zm-12.73 0l1.41 1.41-1.41 1.41-1.41-1.41 1.41-1.41z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Expansion",
    desc: "Introduce new features and integrations for growth.",
    color: "bg-yellow-400",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Future Plans",
    desc: "Continuous improvement and new roadmap milestones.",
    color: "bg-purple-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 12h10l-1 10L22 12h-10l1-10z" />
      </svg>
    ),
  },
];

export default function Roadmap() {
  return (
    <section
      className="relative w-screen flex justify-center items-center aspect-[16/9]"
      style={{
        backgroundColor: "#003366",
        backgroundImage: "url('/images/roadmap_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-6xl mx-auto relative z-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex items-center gap-6 mb-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold shadow-lg ${step.color}`}
                >
                  {step.number}
                </div>
                <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-xl px-6 py-5 w-1/2 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                  </div>
                  <div className="ml-4 text-2xl text-gray-500">{step.icon}</div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-xl px-6 py-5 w-1/2 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                  </div>
                  <div className="ml-4 text-2xl text-gray-500">{step.icon}</div>
                </div>
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold shadow-lg ${step.color}`}
                >
                  {step.number}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
