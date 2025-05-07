'use client';

import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

export default function ClientLayoutWrapper({ children }) {
  return (
    <>
      <Header />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
