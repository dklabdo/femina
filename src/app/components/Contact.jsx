"use client";
import React, { useState , useRef} from "react";
import Image from "next/image";


function Contact() {
  

  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('test');

    // emailjs
    //   .sendForm('service_uvetook', 'template_74f7lyo', form.current, {
    //     publicKey: 'GArKB6b7_WO8H-F0Z',
    //   })
    //   .then(
    //     () => {
    //       Swal.fire({
    //         icon: "success",
    //         title: "Votre message est envoyé avec succes",
    //         showConfirmButton: false,
    //         timer: 1500
    //       });
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     },
    //   );
  };


  return (
    <form method="POST" onSubmit={(e) => sendEmail(e)} ref={form} className="flex flex-col gap-8 ">
      <input
        className="focus:outline-none transition-all focus:border-main border-b-2 py-4 px-3 bg-white appearance-none  shadow-sm shadow-gray-500"
        type="text"
        placeholder="Your name"
        name="name"
      />
      <input
        className="focus:outline-none transition-all focus:border-main border-b-[3px] focus:border-b-[3px]   py-4 px-3 bg-white appearance-none  shadow-sm shadow-gray-500"
        type="email"
        placeholder="Your email"
        name="email"
      />
      <textarea
        className="focus:outline-none transition-all py-4 px-3 focus:border-main border-b-[3px]  h-32 bg-white appearance-none  shadow-sm shadow-gray-500"
        placeholder="Your msg"
        name="msg"
      />
      <button type="submit" className="w-full py-4 bg-main rounded-2xl hover:scale-105 transition text-white ">
        Envoyer un message
      </button>
    </form>
  );
}

export default Contact;
