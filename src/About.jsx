import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen relative z-10 flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-xl transition-all duration-300 hover:shadow-purple-500/30">
        <h2 className="text-4xl font-bold mb-6 text-purple-300 animate-pulse text-center">About Me</h2>

        <p className="text-lg mb-4 leading-relaxed text-white/90">
          Hi, I'm <span className="text-purple-400 font-semibold">Ahmed</span> — a passionate web developer from Pakistan. I specialize in building sleek, responsive, and interactive web applications.
        </p>

        <p className="text-lg mb-4 leading-relaxed text-white/90">
          I'm skilled in <span className="text-blue-400 font-semibold">React, Node.js, Tailwind CSS</span>, and modern JavaScript. I enjoy turning complex problems into beautiful, functional user experiences.
        </p>

        <p className="text-lg mb-4 leading-relaxed text-white/90">
          I started my journey during my university years and have since built several meaningful projects including 
          <span className="text-pink-400 font-semibold"> Shyra.net</span> — a blockchain-powered social media platform based on Steem.
        </p>

        <p className="text-lg mb-4 leading-relaxed text-white/90">
          I'm currently open to <span className="text-green-400 font-semibold">freelance work, internships</span>, and collaborations on creative open-source or blockchain projects.
        </p>

        <p className="text-lg leading-relaxed italic text-purple-200 mt-6 text-center">
          “Code is like humor. When you have to explain it, it’s bad.” — Cory House
        </p>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/your-github" // replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 transition duration-300 text-white py-3 px-6 rounded-xl shadow-lg text-lg"
          >
            View My GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
