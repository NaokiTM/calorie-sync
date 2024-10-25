'use client'
import React from 'react'
import { useState } from 'react'

export default function CalorieProgress() {
  const [calories, setCalories] = useState(3210)
  const [isRemaining, setIsRemaining] = useState<boolean>(true)   //either calories remaning or calories over daily limit

  return (
    <>
      <div className='outerCircle'>
        <div className='innerCircle'>
          <div className='calories'>{calories}</div>
          <div className='remaining'>remaining</div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="150" cy="150" r="130" strokeLinecap="round" />
      </svg>
    </>
  )
}