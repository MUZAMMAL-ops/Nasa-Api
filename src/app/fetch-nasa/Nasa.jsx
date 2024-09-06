'use client'

import Image from 'next/image'
import React from 'react'

const Nasa = ({ NasaData}) => {
  return (
   <>
           <h3 className='flex justify-center mt-4 mb-0 text-zinc-500'>{NasaData.title}</h3>

     <div className='flex justify-center mt-20'> 
     <Image  src={NasaData.url} width={500} height={500}/>
     <explanation >
        <p className='w-96 ml-4'>{NasaData.explanation}</p>
        </explanation>
     </div>
   </>
  )
}

export default Nasa