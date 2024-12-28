'use client'
import { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Loader duration
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // Stop showing the loader after it's done

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="loader-container">
        <div className="coffee-mug">
          <div className="steam steam-one"></div>
          <div className="steam steam-two"></div>
          <div className="steam steam-three"></div>
          <div className="steam steam-four"></div>
          <div className="mug"></div>
          <div className="handle"></div>
        </div>
        <h2 className="text-3xl font-semibold mt-6">Brewing Ideas...</h2>
      </div>
    </div>
  );
};

export default Loader;
