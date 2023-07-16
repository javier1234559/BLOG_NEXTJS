import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='mb-8'>
      <Link href="/">Header</Link>
    </div>
  )
}