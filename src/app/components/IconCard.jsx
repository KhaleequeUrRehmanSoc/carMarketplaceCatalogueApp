import Image from 'next/image'
import React from 'react'

const IconCard = ({src,title}) => {
    
  return (
    <>
        <div className='text-center'>
            <div className='w-[0.958rem] h-[0.958rem] mx-auto'>
                <Image src={`/assets/images/${src && src}`} alt={src} width={10} height={10} className="w-full h-auto" />
            </div>
            <p className='mt-2 font-normal text-[0.671rem] text-newgrey'>{title && title}</p>
        </div>
    </>
  )
}

export default IconCard