'use client'

import React, { createContext, useContext, useState, useEffect } from "react";

const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [vw, setVw] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setVw(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      handleResize(); // Set initial values
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile, vw }}>
      {children}
    </MobileContext.Provider>
  );
};

export const useMobile = () => {
  const context = useContext(MobileContext);
  if (!context) {
    throw new Error("useMobile must be used within a MobileProvider");
  }
  return context;
};
