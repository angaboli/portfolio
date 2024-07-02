import React, { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {


  return (
    <header className="sticky w-full items-center flex left-0 top-0 z-50 shadow-md bg-bkgEnd/80 backdrop-blur-lg">
      <div className="container mx-auto p-4 flex justify-between items-center h-16">
        <a href="/" className="p-1.5">
          <span className="subtitle">{`< />`}</span>
        </a>
        <div className="cursor-pointer">
          <ThemeSwitch className="text-secondary" />
        </div>
      </div>
    </header>
  );
}