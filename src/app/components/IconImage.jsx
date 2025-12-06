import React from 'react'
import Image from 'next/image'

const IconImage = ({ src, width, height, alt = 'icon', rotate }) => {
  return (
   <div className='p-3 rounded-md shadow w-fit bg-white' style={{...(rotate !== undefined ? { transform: `rotate(${rotate}deg)` } : {})}}>
     <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      style={{ 
        objectFit: 'contain',
      }}
    />
   </div>
  )
}

export default IconImage