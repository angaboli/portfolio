import { useState, useEffect } from "react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div id="contact" className="">
        <div className="container bg-bkgStart rounded-2xl shadow-md">
          <div className="section-wrapper p-15 md:px-20 md:pt-10 lg:px-30 lg:pt-15 xl:pl-60 xl:pr-60 xl:pt-60">
            <div className=" mb-4 text-center">
              <h2 className="title">Contact</h2>
            </div>
          </div>

          <div className="section-wrapper px-4 md:px-10 lg:px-20 xl:px-60 md:mb-20 lg:mb-40 xl:mb-60">
            <div className=" p-6">
              <ContactForm />
            </div>
          </div>

        </div>
        <div className="footer-copyright bg-bkgStart text-center pb-20 pt-6">
          <div className="text-xs text-light">
            <span>
              © {new Date().getFullYear()} All Rights Reserved.
            </span>
          </div>
        </div>
      </div>

    </>
  )
}