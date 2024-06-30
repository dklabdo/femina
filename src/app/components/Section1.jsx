"use client"
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
function Section1() {
  useEffect(() =>{Aos.init();} , [])
  return (
    <div id='home' data-aos="zoom-in-up" className="w-full flex-col gap-10 md:gap-4 flex px-6 md:px-0 md:flex-row items-center py-20  justify-between">
      <div className="md:w-1/2  w-full flex justify-center  ">
        <Image src="/section1.png" width={400} height={400} alt="..." />
      </div>
      <div className="w-full  md:w-1/2">
        <h2 className="text-xl font-semibold my-6 pr-4 text-main">
          {" "}
          Qui nous somme{" "}
        </h2>
        <p>
          {" "}
          Femina est une entreprise dédiée à offrir des services de transport et
          de livraison sécurisés exclusivement pour les femmes. Notre mission
          est de garantir la sécurité et le confort de chaque cliente grâce à
          des conductrices qualifiées et des protocoles de sécurité stricts.{" "}
        </p>
      </div>
    </div>
  );
}

export default Section1;
