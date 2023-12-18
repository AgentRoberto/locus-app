import React from 'react'
import Link from 'next/link'
import { FaUserCircle } from "react-icons/fa";

export default function NavBar() {

  return (
    <nav className='bg-slate-600 p-12 sticky top-0 drop-shadow-xl z-10'>
      <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
          <Link href={"/"} className='text-white/90 no-underline hover:text-white'>
            Locus
          </Link>
        </h1>
        <div className='flex flex-row justify-center sm:justify-evenly align-middle
          gap-12 text-white text-4xl lg:text-5xl'> 
          <Link href={"/"} className='text-white/90 hover:text-white'>
            <p className='text-sm font-bold text-white grid place-content-center mb-2 md:mb-0'>Browse Spaces</p>
          </Link>
          <Link href={"/"} className='text-white/90 hover:text-white'>
            <p className='text-sm font-bold text-white grid place-content-center mb-2 md:mb-0'>List Your Space</p>
          </Link>
          <Link href={"/"} className='text-white/90 hover:text-white'>
            <p className='text-sm font-bold text-white grid place-content-center mb-2 md:mb-0'>List Your Service</p>
          </Link>
          <Link href={"/"} className='text-white/90 hover:text-white'>
            <p className='text-sm flex justify-between font-bold text-white '>Log-in<FaUserCircle></FaUserCircle></p>
          </Link>
        </div>
      </div>
    </nav>
  )
}
