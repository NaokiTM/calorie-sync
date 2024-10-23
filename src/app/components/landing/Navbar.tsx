import React from 'react';
import Link from 'next/link'
import logo from '../../../../public/logo.svg'
import Image from 'next/image'

export default function Navbar() {
  return (
    <>
        <div className='flex justify-between p-2'>
          <div className='space-x-6 flex items-center pl-2'>
              <Link href = '/'>
                <Image src={logo} alt="caloriesync logo" width={50} height={50} />
              </Link>
          </div>
          <div className='space-x-6 flex items-center p-6'>
              <Link href = '/login'>Log in</Link>
              <Link href = '/dashboard'>Dashboard</Link>
              <Link href = '/contact'>Contact</Link>
          </div>
        </div>
      </>
  )
}