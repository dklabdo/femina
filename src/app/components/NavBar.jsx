"use client"
import React from "react";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import SideBar from "./SideBar";
function NavBar() {
  const [open,setopen] = useState(false)
  function close(){
    setopen(false);
  }
  return (
    <>
      <nav className="w-full ">
        <h4 className="logo"> Femina </h4>
        <ul className="hidden px-6 md:flex">
          <li>
            <a href="#home" >Home</a>
          </li>
          <li>
            <a href="#service" >Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
       
        <MenuIcon onClick={() => setopen(true)} className="cursor-pointer  md:hidden " color="#BE1B7D" />
      </nav>
    <SideBar close={close} open={open} />
    </>
  );
}

export default NavBar;
