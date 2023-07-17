import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Header({ }: Props) {
  return (
    <>
    <div className='mt-8 flex justify-center items-center text-white text-xl'>
      <Link className="mx-4 text-xl mt-10 mb-6 relative w-max two" href="/">
        <span>Home</span>
        <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-75  h-[5px] bg-blue-300"></span>
        <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-75  h-[5px] bg-blue-300"></span>
      </Link>
      <Link className="mx-4 text-xl mt-10 mb-6 relative w-max two" href="/about">
        <span>About</span>
        <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-75  h-[5px] bg-blue-300"></span>
        <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-75  h-[5px] bg-blue-300"></span>
      </Link>
      <Link className="mx-4 text-xl mt-10 mb-6 relative w-max two" href="/contact">
        <span>Contact</span>
        <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-75  h-[5px] bg-blue-300"></span>
        <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-75  h-[5px] bg-blue-300"></span>
      </Link>
    </div>
    <div className="flex">
      <span className='border bg-gray-300 w-[50%] m-auto'></span>
    </div>
    </>
  )
}