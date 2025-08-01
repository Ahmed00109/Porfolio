import React, { useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
} from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

const skills = [
  {
    icon: <FaReact className="text-cyan-400 text-5xl mb-3" />,
    name: 'React',
    description: 'Built multiple frontend apps using components, hooks, and routing.',
  },
  {
    icon: <FaNodeJs className="text-green-500 text-5xl mb-3" />,
    name: 'Node.js',
    description: 'Experience in building REST APIs and server-side logic with Express.',
  },
  {
    icon: <SiJavascript className="text-yellow-400 text-5xl mb-3" />,
    name: 'JavaScript',
    description: 'Proficient in ES6+, async programming, and DOM manipulation.',
  },
  {
    icon: <SiTailwindcss className="text-blue-300 text-5xl mb-3" />,
    name: 'Tailwind CSS',
    description: 'Styled fully responsive UIs rapidly using utility-first classes.',
  },
  {
    icon: <FaHtml5 className="text-orange-500 text-5xl mb-3" />,
    name: 'HTML',
    description: 'Strong understanding of semantic HTML and accessibility best practices.',
  },
  {
    icon: <FaCss3Alt className="text-blue-500 text-5xl mb-3" />,
    name: 'CSS',
    description: 'Comfortable with Flexbox, Grid, animations, and media queries.',
  },
];

const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative text-white py-16 px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b] overflow-hidden"
    >
      {/* Floating light */}
      <div
        className="pointer-events-none absolute w-60 h-60 bg-cyan-500 opacity-20 blur-3xl rounded-full z-0"
        style={{
          left: mousePosition.x - 120,
          top: mousePosition.y - 120,
        }}
      />

      <h2 className="text-4xl font-bold text-center mb-12 relative z-10 text-cyan-400 drop-shadow-md">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-[#1e293b] hover:bg-[#0f172a] transition-colors duration-300 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/30 border border-gray-700 hover:border-cyan-500"
          >
            <div className="flex flex-col items-center">
              {skill.icon}
              <h3 className="text-xl font-semibold mt-3 mb-2 group-hover:text-cyan-400 transition">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-400 text-center group-hover:text-gray-200 transition">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
