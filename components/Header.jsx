import React, { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

export default function Header() {


  return (
    <header id="home" className="sticky w-full items-center flex left-0 top-0 shadow-md bg-bkgEnd/50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center h-24">
        <a href="/" className="p-1.5">
          <span className="subtitle">Aimé<br /> Olivier</span>
        </a>
        <div className="cursor-pointer">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}