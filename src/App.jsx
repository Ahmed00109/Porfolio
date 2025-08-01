import React from 'react';
import Hero from './Hero';
import Contact from './Contact';
import About from './About';
import CursorGlow from './CursorGlow.JSX';
import './App.css';

const App = () => {
  return (
    
        <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-black to-purple-900 text-white">
         <CursorGlow />
        <Hero />
      </div>
  );
};

export default App;
