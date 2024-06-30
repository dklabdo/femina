import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { DownloadIcon } from "lucide-react";
import 'animate.css';

function Hero() {
  return (
    <div className="lg:flex-row  overflow-x-hidden flex flex-col gap-20 w-full items-center py-14">
      <div className="animate__animated animate__backInRight animate__delay-4s w-full lg:w-[60%] px-2 md:px-10 2xl:px-20 flex flex-col gap-4 ">
        <h1>
          Femina Le Service de Transport et de Livraison Exclusif pour Femmes
        </h1>
        <p className="text-base text-center lg:text-start text-black/70">
          Sécurité, Confiance et Confort à Chaque Trajet
        </p>
        <a href="https://www.mediafire.com/file/o8dnp823zmefsxt/app-release.apk/file" className="primaryButton xs:scale-90 mx-auto lg:mx-0 flex items-center gap-3 mt-2 w-82 md:hover:gap-4">
          Telecharger <DownloadIcon size={20} />{" "}
        </a>
        <div className="my-12 hidden overflow-y-hidden lg:flex  gap-5">
          <Image src="/hero2.png" alt="..." width={120} height={200} />
          <div>
            <h3 className="text-base font-semibold">Customer review</h3>
            <div className="flex gap-1 mt-2 items-center">
              {" "}
              <Star className="fill-[#FBC400] " color="#FBC400" />
              4.8{" "}
              <span className="text-sm text-black/80 font-normal">
                {" "}
                (5k review){" "}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className=" animate__animated animate__backInLeft animate__delay-4s w-full overflow-y-hidden scale-90 md:scale-110 lg:w-[40%] flex justify-center ">
        <Image src="/hero.png" alt="..." width={500} height={500} />
      </div>
      <div className="my-12 overflow-y-hidden lg:hidden w-fit flex px-4 xs:scale-90  gap-5">
        <Image src="/hero2.png" alt="..." width={120} height={200} />
        <div>
          <h3 className="text-base font-semibold">Customer review</h3>
          <div className="flex gap-1 mt-2 items-center">
            {" "}
            <Star className="fill-[#FBC400] " color="#FBC400" />
            4.8{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
