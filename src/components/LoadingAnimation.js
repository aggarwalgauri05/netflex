// src/components/LoadingAnimation.js
import React, { useEffect } from 'react';

const LoadingAnimation = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onAnimationEnd();
    }, 3000); // Duration of the animation (3 seconds)

    return () => clearTimeout(timeout);
  }, [onAnimationEnd]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
      <div className="animate-pulse">
        {/* You can replace this with any animation or image you want */}
        <h1 className="text-white text-4xl">Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingAnimation;
