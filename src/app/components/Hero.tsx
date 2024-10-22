import React from 'react'
import Link from 'next/link'
import { instrumentserif } from '../layout'

export default function Hero() {

  return (
    <div className='flex flex-col items-center h-[60vh] justify-center'>
        <div className='text-9xl font-medium tracking-tighter leading-none bg-white'>CalorieSync</div>
        <h2 className={`${instrumentserif.className} italic text-5xl`}>Dynamic fitness data at your fingertips.</h2>
        <Link className='bg-blue-600 text-white p-2 mt-4 rounded-md text-lg' href=''>launch CalorieSync</Link>
    </div>
  )
}