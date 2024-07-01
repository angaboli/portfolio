import { useState, useEffect } from "react";
import { contactData } from "@/data/contactData";
import Image from "next/image";
import { profileInfo } from "@/data/profileInfo";
import { bioData } from "@/data/bioData";
import { socialMediaData } from "@/data/socials";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import TypingText from "./TypingText";
import { motion } from "framer-motion";

export default function PersonalInfo() {
  const [showTypingText, setShowTypingText] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowTypingText(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const chooseIcon = (iconInput) => {
    switch (iconInput) {
      case "phone":
        return <IoPhonePortraitOutline />;
      case "mail":
        return <CiMail />;
      case "location":
        return <CiLocationOn />;
      case "github":
        return <FaGithub className="w-10 h-10 p-2 drop-shadow-md" />;
      case "linkedin":
        return <FaLinkedin className="w-10 h-10 p-2 drop-shadow-md" />;
      case "instagram":
        return <FaInstagram className="w-10 h-10 p-2 drop-shadow-md" />;
      default:
        return null;
    }
  }

  return (
    <section id="home" className="mt-10">
      <div className="container mx-auto bg-bkgStart py-10 px-8 mb-4 rounded-2xl shadow-md">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="mb-10 text-center">
              <h2 className="title">The Man Behind the Keyboard</h2>
            </div>
          </div>
        </div>

        <div className="about-me-2-wrap">
          <div className="flex flex-col md:flex-row md:justify-between gap-5">
            <div className="lg:w-1/3 md:w-2/3 mr-5">
              <div className="flex justify-center max-w-fit rounded-md backdrop-opacity-10 backdrop-invert bg-neutral/30"
              >
                <Image
                  width={240}
                  height={240}
                  src={profileInfo.imageSrc}
                  alt="profile"
                />
              </div>
            </div>
            <div className="lg:w-2/3 md:w-full">
              <div className="max-w-fit mb-">
                <h4>Hello, I am&nbsp;
                  <span className="subtitle mb-4">
                    {
                      showTypingText ? (
                        <TypingText text="Aimé Olivier NGABONZIZA" />
                      ) : (
                        "Aimé Olivier NGABONZIZA"
                      )}
                  </span>
                </h4>
                <p className="mb-4 break-words whitespace-normal">{bioData.descOne}</p>
                <p className="mb-4 break-words whitespace-normal">{bioData?.descTwo}</p>
                <div className="bostami-personal-info-contact">
                  <div className="flex flex-wrap mb-4">
                    {contactData.map((elm, i) => (
                      <div key={i} className="w-full md:w-1/2 mb-4">
                        <a href={elm.text.href} target="_blank" className="flex items-center py-2.5 gap-2">
                          <div className="text-xl text-secondary bg-neutral rounded-lg shadow flex p-2.5 gap-5 text-center transition duration-300">
                            {chooseIcon(elm.iconClass)}
                          </div>
                          <div className="text">
                            <span className="small">{elm.text.label}</span>
                            <p>{elm.text.value}</p>
                          </div>
                        </a>
                      </div>
                    ))}
                    <ul className="w-full md:w-1/2 flex gap-2.5 mb-4">
                      {socialMediaData.map((elm, i) => (
                        <li key={i} className="w-10 h-10">
                          <a style={{ color: elm.color }} href={elm.href} target="_blank">
                            {chooseIcon(elm.icon)}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="w-full max-w-fit md:w-1/2 ">
                      <div className="rounded-lg bg-neutral text-primary shadow hover:shadow-md hover:from-accent bg-gradient-to-r hover:text-neutral hover:to-secondary ease-in-out duration-300">
                        <a href="/NgabonzizaAOlivier.pdf" download className="flex p-2.5"  >
                          <IoDownloadOutline className="text-secondary hover:text-neutral w-4 h-4 mr-2" />
                          Download CV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}