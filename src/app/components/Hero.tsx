import React from 'react'
import { librebaskerville } from '../layout'

export default function Hero() {

  return (
    <div className='flex flex-col items-center h-[60vh] justify-center'>
        <div className='text-9xl font-medium tracking-tighter leading-none bg-white'>CalorieSync</div>
        <div>
            <h2 className={`${librebaskerville.className} italic text-3xl font-medium`}>Dynamic fitness data at your fingertips.</h2>
        </div>
    </div>
  )
}