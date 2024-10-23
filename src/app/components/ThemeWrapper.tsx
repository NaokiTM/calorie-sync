'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { FaRegMoon } from "react-icons/fa";


export default function ThemeWrapper({children, }: Readonly<{ children: React.ReactNode; }>) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);  //prevmode ideal to correctly keep track of asynchronous state toggling 
  };

  return (
    <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}>
        {children}
        <button className='p-4 flex justify-end' onClick={toggleDarkMode}><FaRegMoon className='h-[25px] w-[25px]'/></button>
    </div>
  )
}