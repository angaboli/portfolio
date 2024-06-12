import { useState } from "react";
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
import { IoDownloadOutline } from "react-icons/io5";

export default function PersonalInfo() {

  const chooseIcon = (iconInput) => {
    switch (iconInput) {
      case "phone":
        return <IoPhonePortraitOutline />;
      case "mail":
        return <CiMail />;
      case "location":
        return <CiLocationOn />;
      case "github":
        return <FaGithub className="w-10 h-10 p-2" />;
      case "linkedin":
        return <FaLinkedin className="w-10 h-10 p-2" />;
      default:
        return null;
    }
  }

  return (
    <section id="">
      <div className="container mx-auto bg-bkgStart py-10 px-8 mb-8 rounded-2xl shadow-md">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="mb-10">
              <h2 className="title">About Me</h2>
            </div>
          </div>
        </div>

        <div className="about-me-2-wrap">
          <div className="flex flex-col md:flex-row md:justify-between gap-5">
            <div className="lg:w-1/3 md:w-2/3 mr-5">
              <div className="flex justify-center mb-10 rounded-md backdrop-opacity-10 backdrop-invert bg-neutral/30">
                <Image
                  width={240}
                  height={240}
                  src={profileInfo.imageSrc}
                  alt="profile"
                />
              </div>
              <div className="text-center">
                <h4 className="title">
                  <a href="#">{profileInfo.name}</a>
                </h4>
                <p className="px-2 py-4 bg-neutral/50 text-center mb-8 rounded-md">{profileInfo.title}</p>

                <ul className="flex justify-evenly mx-auto mb-10">
                  {socialMediaData.map((elm, i) => (
                    <li key={i} className="w-10 h-10">
                      <a style={{ color: elm.color }} href={elm.href} target="_blank">
                        {chooseIcon(elm.icon)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-2/3 md:w-full">
              <div className="max-w-fit mb-10">
                <h4 className="subtitle">Who am I?</h4>
                <p className="mb-4 break-words whitespace-normal">{bioData.descOne}</p>
                <p className="mb-4 break-words whitespace-normal">{bioData.descTwo}</p>
                <div className="bostami-personal-info-contact">
                  <h3 className="subtitle">Personal Info</h3>
                  <div className="flex flex-wrap">
                    {contactData.map((elm, i) => (
                      <div key={i} className="w-full md:w-1/2 ">
                        <div className="flex items-center py-2.5 gap-2">
                          <div className="text-xl text-secondary bg-neutral rounded-lg shadow-md flex p-2.5 gap-5 text-center transition duration-300">
                            {chooseIcon(elm.iconClass)}
                          </div>
                          <div className="text">
                            <span className="small">{elm.text.label}</span>
                            <p>{elm.text.value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="w-full max-w-fit md:w-1/2 ">
                      <div className="rounded-lg p-4 bg-neutral text-primary shadow-md hover:from-accent bg-gradient-to-r hover:text-neutral hover:to-secondary ease-in-out">
                        <a className="flex" href="/NgabonzizaAOlivier.pdf" download >
                          <IoDownloadOutline className="w-5 h-5 mr-2" />
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