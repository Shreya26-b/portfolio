import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  // FaPython,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiFastapi,
  SiMysql,
  // SiTensorflow,
  // SiKeras,
  // SiScikitlearn,
  // SiCplusplus,
  SiNetlify,
  SiVercel,
  SiOpenai,
  SiGoogle,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";

const AboutMe: React.FC = () => {
  return (
    <section
      id="skills"
      className="w-full bg-[#FAF1E3] py-20 px-[5%]"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3b2f2f]">
          Skills & Expertise
        </h2>
        <p className="mt-3 text-[#6b5b5b] max-w-2xl">
          A blend of frontend craftsmanship, backend engineering, and
          data-driven problem solving — built for real-world impact.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Frontend */}
        <SkillCard title="Frontend Development">
          <Skill icon={<FaReact />} label="React" />
          <Skill icon={<FaHtml5 />} label="HTML5" />
          <Skill icon={<FaCss3Alt />} label="CSS3" />
          <Skill icon={<FaJs />} label="JavaScript" />
          <Skill icon={<SiTypescript />} label="TypeScript" />
          <Skill icon={<FaBootstrap />} label="Bootstrap" />
        </SkillCard>

        {/* Backend */}
        <SkillCard title="Backend & Databases">
          <Skill icon={<SiFastapi />} label="FastAPI" />
          <Skill icon={<SiMysql />} label="MySQL" />
          <Skill icon={<FaDatabase />} label="SQL" />
        </SkillCard>

        {/* Programming */}
        {/* <SkillCard title="Programming & CS Fundamentals">
          <Skill icon={<SiCplusplus />} label="C / C++" />
          <Skill icon={<FaPython />} label="Python" />
          <Skill label="Data Structures" />
          <Skill label="Algorithms" />
          <Skill label="Databases" />
        </SkillCard> */}

        {/* Machine Learning */}
        {/* <SkillCard title="Machine Learning">
          <Skill icon={<SiTensorflow />} label="TensorFlow" />
          <Skill icon={<SiKeras />} label="Keras" />
          <Skill icon={<SiScikitlearn />} label="Scikit-learn" />
          <Skill label="Neural Networks" />
          <Skill label="Model Development" />
          <Skill label="Data Preprocessing" />
        </SkillCard> */}

        {/* Deployment */}
        <SkillCard title="Deployment & Version Control">
          <Skill icon={<SiVercel />} label="Vercel" />
          <Skill icon={<SiNetlify />} label="Netlify" />
          <Skill icon={<FaGithub />} label="GitHub" />
        </SkillCard>

        {/* Productivity */}
        <SkillCard title="Productivity Tools">
          <Skill icon={<SiOpenai />} label="ChatGPT" />
          <Skill icon={<SiGoogle />} label="Gemini" />
          <Skill icon={<BiLogoVisualStudio />} label="VS Code" />
        </SkillCard>

      </div>
    </section>
  );
};

export default AboutMe;

/* ---------- Reusable Components ---------- */

const SkillCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-[#fff8ee] rounded-2xl p-6 shadow-sm hover:shadow-md transition">
    <h3 className="text-lg font-semibold text-[#3b2f2f] mb-4">
      {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {children}
    </div>
  </div>
);

const Skill = ({
  icon,
  label,
}: {
  icon?: React.ReactNode;
  label: string;
}) => (
  <span className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#FAF1E3] text-sm text-[#3b2f2f]">
    {icon && <span className="text-lg">{icon}</span>}
    {label}
  </span>
);
