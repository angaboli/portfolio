"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  // use Email js for recive message

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n4mkhz9",
        "template_ugoztxr",
        form.current,
        "user_vYmDSd9PwIuRXUQEDjYwN"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success("Message Sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myFormOne").reset();
        },
        (error) => {
          toast.error("Ops Message not Sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  const handleClick = (inputName) => {
    setActiveInputBoxes((prev) =>
      prev.includes(inputName) ? prev : [...prev, inputName]
    );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="form-input-item mb-4">
        <label
          className={`input-label block mb-2 ${activeInputBoxes.includes('name') ? 'text-secondary' : ''}`}
        >
          Name *
        </label>
        <input
          name="name"
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
          name="email"
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
          rows="10"
        ></textarea>
      </div>
      <div className="form-btn-wrap">
        <button
          type="submit"
          value="Send"
          className="form-btn bg-neutral text-primary shadow hover:shadow-md hover:from-accent bg-gradient-to-r hover:text-neutral hover:to-secondary ease-in-out py-2 px-4 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
