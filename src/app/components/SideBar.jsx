import React from 'react'
import { X } from 'lucide-react'
function SideBar({open, close}) {
  return (
    <>
    {open && (
      <div className="fixed top-0 z-50 w-full h-screen bg-black/60 ">
          <div className="w-[80%] xs:w-[90%] justify-between flex flex-col openAnimation p-6 h-screen fixed  top-0 right-0  bg-white  ">
        <div className="flex w-full  flex-col gap-16">
          <div onClick={() => close()}>
            <X color='#C50808' size={35} />
          </div>
          <div className='flex flex-col   gap-6'>
          <a className='hover:text-main text-center transition hover:scale-105' href=''>Home</a>
          <a className='hover:text-main text-center transition hover:scale-105' href=''>Services</a>
          <a className='hover:text-main text-center transition hover:scale-105' href=''>About us</a>

      </div>
          
        </div>
        <div>
          <p className="text-center">nous service client  <a href='tel:+1234567890' className="underline text-main/50">contacté</a> </p>
        </div>
      </div>

      </div>
    )}
  </>
  )
}

export default SideBar