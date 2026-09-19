import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { IoCallOutline, IoTimeOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import logo  from '../assets/images/logo.webp'
import { MdEmail } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
const treatments = [
  "Teeth Extraction",
  "Composite Veneer",
  "GIC Filling",
  "Composite Filling",
  "Scaling",
  "Polishing",
  "Orthodontic Treatment",
  "Complete Denture",
  "Dental Implants",
  "Porcelain Crowns",
  "Surgical Extraction",
  "Root Canal",
  "Bleaching",
  "Partial Denture",
  "Zirconia Crowns"
];
  const navborlinks = [
    {
        links : "/",
        label :"Home",
    },
    {
        links : "/about",
        label : "About"
    },
    {
        links : "/services",
        label : "Services",
    },
    {
        links : "/pricing",
        label : "Pricing"
    },
    {
        links : "cases",
        label : "Cases"
    },
    {
        links : "contact",
        label : "Contact"
    }
]
export default function Footer() {

const [showAll, setShowAll] = useState(false);


  return (
    <>
        <section className="w-[100%] flex justify-center  ">
  <footer className="w-[95%]  lg:w-[100%] relative bg-black text-slate-300 mt-15 rounded-t-2xl">
      {/* Top accent line */}
      {/* <div className="h-1 w-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400" /> */}

      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand column */}
          <div className="lg:pr-6">
            <div className="flex items-center gap-3">
              {/* <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-400"> */}
                {/* Tooth icon */}
               <img src={logo} alt="" className=' w-[200px] h-[80px]'/>     
              {/* </div> */}
              {/* <span className="font-serif text-2xl font-bold text-white">
                SmilePro
              </span> */}
            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
            We are dedicated to providing exceptional dental care with compassion, precision, and modern treatment techniques, helping every patient achieve a healthier, brighter, and more confident smile.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-teal-400 hover:text-teal-400"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-teal-400 hover:text-teal-400"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navborlinks.map((items , index) => (
             <div key={index}>
<Link to={items.links}>{items.label}</Link>
             </div>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-lg font-bold text-white">Treatments</h3>
        <ul className="mt-5 space-y-3 text-sm">
  {treatments
    .slice(0, showAll ? treatments.length : 6)
    .map((item) => (
      <li key={item}>
        <Link
          to = "/services"
          className="text-slate-300 transition-colors hover:text-[var(--secondary)]"
        >
          {item}
        </Link>
      </li>
    ))}
</ul>

<button
  onClick={() => setShowAll(!showAll)}
  className="mt-4 text-sm font-medium text-[var(--secondary)] hover:underline"
>
  {showAll ? "Show Less" : "Show More"}
</button>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white">Contact Info</h3>

            <div className="mt-5 space-y-5 text-sm">
              <div className="flex gap-3">
                <FaLocationDot className="mt-0.5 h-4 w-4 shrink-0 text-[var(--secondary)]" />
                <div>
                  <p className="text-xs font-bold tracking-wide text-white">
                   Best DENTAL CLINIC in whole KARACHI, 
                  </p>
                  <p className="mt-1 text-slate-400">
                    Block 15 Gulistan-e-Johar, Karachi, 75290, Pakistan
                  </p>
                  <a
                    href="tel:03206953562"
                    className="mt-1 inline-block  hover:underline"
                  >
                  +92******
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MdEmail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--secondary)]" />
                <div>
                  <p className="text-xs font-bold tracking-wide text-slate-400">
                    Email
                  </p>
                  <a
                    href="tel:+92320-6953562"
                    className="mt-1 block font-medium text-white hover:text-[var(--secondary)]"
                  >
                    @example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="h-4 w-4 shrink-0 text-[var(--secondary)]" />
                <p className="text-slate-300">12:00 PM - 10:00 PM (Daily)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cursor-pointer w-full mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 flex justify-between  gap-10">
      <p>© {new Date().getFullYear()} Royal Dental And Aesthetic Clinic. All rights reserved.</p>    
          <div className="flex justify-center gap-5">
            <p>Privacy Policy</p>
            <p>Terms of</p>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/92****"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-900/40 transition-transform hover:scale-105"
      >
        <FaWhatsapp className="h-7 w-7" fill="white" />
      </a>
    </footer>
    </section>

    </>

  );
}