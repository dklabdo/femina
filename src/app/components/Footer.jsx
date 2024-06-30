import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
    <div className='w-full flex pt-14 flex-col gap-14 '>
        <div className='flex flex-col md:flex-row  items-center'>
        <div className='flex-col justify-center  w-[30%] flex gap-4 items-center'>
            <h1 className='text-xl font-bold text-main text-center'> FEMINA </h1>
           
        </div>
        <div className='md:w-[70%] w-full h-96 justify-evenly items-center flex '>
            <div className='flex flex-col gap-2'>
                <p className='font-bold mb-2 text-lg' >Navigation</p>
                <a className='appearance-none '>Home</a>
                <a className='appearance-none '>Contact</a>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-bold mb-2 text-lg' >Legal</p>
                <a className='appearance-none '>General Info</a>
                <a className='appearance-none '>Privacy Policy</a>
            </div>

        </div>

    </div>
    <p className='font-light text-sm text-center mb-20'>Developed by sayah abdelilah <br /> all right reserved for FEMINA 2024 &copy; </p>

    </div>
  )
}

export default Footer