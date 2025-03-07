"use client";

import { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 bg-purple-500 text-white rounded-full shadow-lg transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUpCircle size={32} />
    </button>
  );
};

export default ScrollToTop;
