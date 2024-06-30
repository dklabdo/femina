import React from 'react'
import Contact from './Contact'
import Image from 'next/image'
function Section3() {
  return (
    <div
      id="contact"
      className="w-full pt-14 flex flex-col xs2:px-4 px-8 md:px-8 lg:px-14 xl:px-32 gap-20"
    >
      <h1 className="text-center my-6  text-main text-xl font-semibold" > Contact us </h1>
      <div className="flex items-center flex-col lg:flex-row">
        <div className="w-full lg:w-[60%] xs2:px-2 px-6 lg:px-12 ">
          <Contact />
        </div>
        <div className="lg:w-[40%] my-14  md:my-32 lg:my-0 items-center w-full flex flex-col  lg:flex-col gap-6 ">
          <div className="flex  w-full px-6 flex-col justify-start items-start gap-2 lg:gap-8">
            <div className="flex gap-4 my-2 items-center">
              <Image
                alt="..."
                src="/icons/local.svg"
                className="inline"
                width={25}
                height={30}
              />
              <p className="text-base">sidi djilali sidi bel abbes</p>
            </div>
            <div className="flex gap-6 my-2 items-center">
              <Image
                alt="..."
                src="/icons/phone.svg"
                className="inline"
                width={25}
                height={30}
              />
              <p className="text-base">+213 6 59 79 40 99</p>
            </div>
            <div className="flex gap-6 my-2 items-center">
              <Image
                alt="..."
                src="/icons/mail.svg"
                className="inline"
                width={25}
                height={30}
              />
              <p className="text-base">testeuse@gmail.com</p>
            </div>
            <div className="flex gap-6 my-2 items-center">
              <Image
                alt="..."
                src="/icons/insta.svg"
                className="inline"
                width={25}
                height={30}
              />
              <p className="text-base">testeuse.startup</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Section3