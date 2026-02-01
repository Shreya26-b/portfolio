import React from "react";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full bg-[#FAF1E3] py-20 px-[5%]"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3b2f2f]">
          Experience
        </h2>
        <p className="mt-3 text-[#6b5b5b] max-w-2xl">
          Professional roles focused on frontend engineering, system
          reliability, and user-centric solutions.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">

        {/* Vertical Line (only between experiences) */}
        <div className="hidden md:block absolute left-1/2 top-10 h-60 w-[2px] bg-[#e2d6c3] -translate-x-1/2" />

        {/* ACCENTURE (RIGHT) */}
        <div className="relative mb-20 flex justify-start md:justify-end">
          <div className="w-full md:w-1/2 md:pl-12">
            <h3 className="text-lg font-semibold text-[#3b2f2f]">
              Accenture
            </h3>
            <p className="text-sm text-[#6b5b5b]">
              Frontend / Application Support Engineer · Bangalore
            </p>
            <p className="text-sm text-[#6b5b5b] mb-4">
              Jun 2024 – Present
            </p>

            <div className="space-y-2 text-sm text-[#5a4747] text-justify">
              <p>➢ Resolved UI-impacting production issues by analyzing SQL / PL-SQL workflows, improving frontend reliability.</p>
              <p>➢ Supported fixes for user-facing applications, enhancing stability, responsiveness, and UX.</p>
              <p>➢ Collaborated in bug triage, root cause analysis, and UAT validation before releases.</p>
            </div>
          </div>

          {/* Center Dot */}
          <span className="hidden md:block absolute left-1/2 top-2 w-3 h-3 bg-[#3b2f2f] rounded-full -translate-x-1/2" />
        </div>

        {/* QUANTUM AI GLOBAL (LEFT) */}
        <div className="relative flex justify-start">
          <div className="w-full md:w-1/2 md:pr-12 md:text-right">
            <h3 className="text-lg font-semibold text-[#3b2f2f]">
              Quantum AI Global
            </h3>
            <p className="text-sm text-[#6b5b5b]">
              Frontend Developer (Intern) · Remote
            </p>
            <p className="text-sm text-[#6b5b5b] mb-4">
              Aug 2023 – Mar 2024
            </p>

            <div className="space-y-2 text-sm text-[#5a4747]">
              <p>➢ Built scalable frontend interfaces using React, Tailwind CSS, and Bootstrap.</p>
              <p>➢ Integrated FastAPI REST APIs and MySQL for end-to-end data-driven workflows.</p>
              <p>➢ Contributed to AI-assisted UI features, improving operational efficiency and usability.</p>
            </div>
          </div>

          {/* Center Dot */}
          <span className="hidden md:block absolute left-1/2 top-2 w-3 h-3 bg-[#3b2f2f] rounded-full -translate-x-1/2" />
        </div>

      </div>
    </section>
  );
};

export default Experience;
