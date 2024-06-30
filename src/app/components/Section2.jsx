"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Section2() {
  useEffect(() => {Aos.init()} , [])
  return (
    <section id="service" className="w-full py-20 px-2 md:px-6 2xl:px-12 ">
      <div className=" 2xl:bg-white w-fit mx-auto flex flex-col gap-6 ">
        <div className="md:flex gap-6">
          <Card
            icon={1}
            title="Transport Sécurisé"
            content="Des courses en toute sécurité avec des conductrices qualifiées."
          />
          <Card
            icon={2}
            title="Livraison de Nourriture"
            content="Recevez vos repas préférés directement chez vous, préparés et livrés avec soin."
          />
        </div>
        <div className="md:flex gap-6">
          <Card
            icon={3}
            title="Livraison Rapide"
            content="Livraison rapide et fiable de vos colis et achats."
          />
          <Card
            icon={4}
            title="Services Spéciaux"
            content="Services personnalisés pour répondre à vos besoins spécifiques"
          />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, content }) {
  return (
    <div  data-aos="zoom-in-up" className="h-[360px] scale-95 cursor-pointer md:hover:scale-105 transition w-full md:w-1/2  2xl:w-[600px] md:mx-10   py-4  ">
      <div>
        <Image
          
          src={`/icons/icon${icon}.svg`}
          alt="..."
          width={70}
          height={70}
        />
      </div>
      <h2 className="text-lg my-6 font-medium "> {title} </h2>
      <p className="text-base  font-light"> {content} </p>
    </div>
  );
}

export default Section2;
