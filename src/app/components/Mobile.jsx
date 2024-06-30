"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Aos from "aos";
import 'aos/dist/aos.css';

function Mobile() {
    useEffect(() => {Aos.init();} , [])
  return (
    <div data-aos="zoom-in-up" className='w-full flex px-2 justify-center py-20'>
        <Image src="/section2.png" alt='....' width={500} height={500} />
    </div>
  )
}

export default Mobile