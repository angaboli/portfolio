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
        <div className="container bg-bkgStart rounded-2xl  shadow-md">
          <div className="flex flex-wrap pt-16">
            <div className="w-1/2 mx-auto">
              <div className="mb-10 text-center">
                <h2 className="title">Contact</h2>
              </div>
            </div>
          </div>
          <div className="mb-20 w-2/3 pb-16 mx-auto">
            <div className="">
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