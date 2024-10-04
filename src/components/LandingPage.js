import React from 'react';

const LandingPage = () => {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?sports)' }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to NETFLEX</h1>
        <p className="text-xl mb-6">Find and Create Sports Events Around You</p>
        <button className="bg-red-500 px-6 py-3 rounded-full text-xl hover:bg-red-600 transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
