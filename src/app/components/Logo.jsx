import Image from 'next/image'
import React from 'react'

const Logo = ({}) => {
  return (
    <div>
        <Image
        src="/logo.avif"
        alt="Logo"
        width={160}
        height={120}
        className='md:w-40 w-24'
        />
    </div>
  )
}

export default Logo