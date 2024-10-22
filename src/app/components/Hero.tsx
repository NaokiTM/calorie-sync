import React from 'react'
import { Libre_Baskerville } from 'next/font/google';

export default function Hero() {

    const libreBaskerville = Libre_Baskerville({
        subsets: ['latin'],
        weight: ['400'],
    })

  return (
    <div className='flex flex-col items-center h-[60vh] justify-center'>
        <div className='text-9xl font-medium tracking-tighter leading-none bg-white'>CalorieSync</div>
        <div>
            <h2 className={`${libreBaskerville.className} italic text-3xl font-medium`}>Dynamic fitness data at your fingertips.</h2>
        </div>
    </div>
  )
}