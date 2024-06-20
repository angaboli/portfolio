"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  const [activeInputBoxes, setActiveInputBoxes] = useState([])
  const form = useRef();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ecafwhm",
        "template_o92fcoc",
        form.current,
        "TXb_tueFmBsYU3b8Z"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success("Message Sent successfully!");
          document.getElementById("contactForm").reset();
        },
        (error) => {
          toast.error("Ops Message not Sent!");
        }
      );
  };

  const handleClick = (inputName) => {
    setActiveInputBoxes((prev) =>
      prev.includes(inputName) ? prev : [...prev, inputName]
    );
  };

  return (
    <form id="contactForm" className="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="form-input-item mb-4">
        <label
          className={`input-label block mb-2 ${activeInputBoxes.includes('name') ? 'text-secondary' : ''}`}
        >
          Name *
        </label>
        <input
          name="user_name"
          className={`input-box border rounded w-full p-2 ${activeInputBoxes.includes('name') ? 'border-accent' : ''}`}
          type="text"
          required
          onClick={() => handleClick('name')}
        />
      </div>
      <div className="form-input-item mb-4">
        <label
          className={`input-label block mb-2 ${activeInputBoxes.includes('gmail') ? 'text-secondary' : ''}`}
        >
          Email *
        </label>
        <input
          name="user_email"
          className={`input-box border rounded w-full p-2 ${activeInputBoxes.includes('gmail') ? 'border-accent' : ''}`}
          type="email"
          required
          onClick={() => handleClick('gmail')}
        />
      </div>
      <div className="form-input-item mb-4">
        <label
          className={`input-label block mb-2 ${activeInputBoxes.includes('message') ? 'text-secondary' : ''}`}
        >
          Message *
        </label>
        <textarea
          name="message"
          className={`input-box border rounded w-full p-2 ${activeInputBoxes.includes('message') ? 'border-accent' : ''}`}
          onClick={() => handleClick('message')}
          cols="30"
          rows="8"
        ></textarea>
      </div>
      <div className="form-btn-wrap">
        <button
          type="submit"
          value="Send"
          className="form-btn bg-neutral flex gap-2 items-center  text-primary border-1 border-accent shadow hover:shadow-md hover:from-accent bg-gradient-to-r hover:text-neutral hover:to-secondary ease-in-out py-2 px-4 rounded-xl transition duration-200 transform hover:-translate-y-1 active:translate-y-0"
        >
          Submit
          <FiSend className="" />
        </button>
      </div>
    </form>
  )
}
