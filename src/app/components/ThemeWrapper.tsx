'use client'
import React from 'react'
import { useState, useEffect } from 'react';

export default function ThemeWrapper({children, }: Readonly<{ children: React.ReactNode; }>) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);  //prevmode ideal to correctly keep track of asynchronous state toggling 
  };

  return (
    <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}>
        {children}
        <button onClick={toggleDarkMode}>Toggle Theme</button>
    </div>
  )
}