import React, { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {team} from '../Multiplearray/Drteam.js'

const Drdetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = useMemo(
    () => team.find((item) => item.id === Number(id)),
    [id]
  );

  if (!doctor) {
    return (
      <div className="min-h-screen  flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Doctor Not Found
          </h1>

          <Link
            to="/ourteam"
            className="inline-block mt-5 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Back to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
   <section className="min-h-screen  lg:pt-5 pt-30 py-5 md:py-5">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Profile Card */}
        <div className="rounded-3xl border border-[var(--secondary)] overflow-hidden batchcolor">

          <div className="bg-[var(--batchcolor)] border-[var(--secondary)] flex flex-col lg:flex-row justify-between">

          {/* LEFT - IMAGE */}
{/* LEFT - IMAGE */}
<div className="w-full lg:w-[40%] flex justify-center items-center px-4 sm:px-6 lg:px-6 py-6 lg:py-8">
  <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px]">
    <img
      src={doctor.image}
      alt={doctor.name}
      loading="lazy"
      decoding="async"
      className="w-full h-auto max-h-[420px] object-cover object-top rounded-2xl shadow-md"
    />
  </div>
</div>

            {/* RIGHT - DETAILS */}
            <div className="p-6 sm:p-10 w-full lg:w-[60%] lg:px-10 flex flex-col justify-center">

              {/* Small label */}
              <span className="inline-block batchcolortwo w-fit px-4 py-2 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-sm font-semibold mb-5">
                agrident the dental studio
              </span>

              {/* Name */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight break-words">
                {doctor.name}
              </h1>

              {/* Role */}
              <p className="mt-3 text-lg sm:text-xl text-[var(--secondary)] font-semibold">
                {doctor.role}
              </p>

              {/* Description */}
              <p className="mt-6 text-gray-600 text-base  leading-8">
                {doctor.description}
              </p>

           {/* Area experties */}
   <div className="border-t border-gray-300 pt-10">

            <h2 className="text-xl sm:text-3xl font-bold text-gray-900">
              Areas of Expertise
            </h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 mt-6 w-full">
  {doctor.specialties?.map((specialty, index) => (
    <span
      key={index}
      className="px-4 py-1.5 w-full text-center rounded-full batchcolortwo border border-[var(--secondary)] text-[var(--secondary)] text-sm"
    >
      {specialty}
    </span>
  ))}
</div>

          </div>
              {/* Appointment Button */}
              <button
                onClick={()=>{navigate("/contact#contact-form")}}
                className="mt-8 w-full text-center px-7 py-4 rounded-2xl cursor-pointer backgroundcol text-white font-semibold hover:backgroundcol transition duration-300"
              >
                Book an Appointment
              </button>

            </div>
          </div>

          {/* ABOUT SECTION */}
          <div className="border-t border-gray-100 p-6 sm:p-10 lg:p-12 w-full flex justify-center">

            <div className="w-full sm:w-[95%]">

              {/* About */}
            

              {/* Clinic Hours */}
<div className="relative overflow-hidden rounded-3xl bg-white border border-[#ebbb90] shadow-[0_15px_50px_rgba(111,63,40,0.08)] p-5 sm:p-7">

  {/* Decorative background */}
  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full batchcolor" />
  <div className="absolute -bottom-16 -left-10 w-28 h-28 rounded-full batchcolortwo" />

  <div className="relative">

    {/* Header */}
    <div className="flex items-start justify-between gap-4 flex-wrap">

      <div className="flex items-center gap-3">

        <div className="w-12 h-12 shrink-0 rounded-2xl backgroundcol flex items-center justify-center text-white text-xl shadow-lg shadow-[#d9c2b2]">
          🕒
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[var(--heading)]">
            Clinic Hours
          </h3>

          <p className="text-sm text-[var(--text)] mt-1">
            We're here to care for your smile
          </p>
        </div>

      </div>

      {/* Open badge */}
      <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8F3EF] text-[var(--secondary)] text-xs font-semibold">
        <span className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
        Open
      </span>

    </div>

    {/* Divider */}
    <div className="my-6 h-px bg-[#f3ebe4]" />

    {/* Days */}
    <div className="space-y-4">

      <div className="flex items-center justify-between flex-wrap gap-1">
        <span className="text-[var(--text)] font-medium">
          Monday – Saturday
        </span>

        <span className="text-[var(--heading)] font-semibold">
          2:00 PM – 9:00 PM
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[var(--text)] font-medium">
          Sunday
        </span>

        <span className="text-[var(--secondary)] font-semibold">
          Closed
        </span>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-7 p-4 rounded-2xl batchcolor border border-[#f3ebe4]">

      <p className="text-sm text-[var(--text)]">
        Need an appointment?
      </p>

      <div className="flex items-center justify-between gap-3 mt-2 flex-wrap">

        <p className="font-semibold text-[var(--heading)]">
          Book your visit today
        </p>

        <button
          onClick={() => {
            navigate("/contact#contact-form");
          }}
          className="px-4 py-2 rounded-xl backgroundcol text-white text-sm font-semibold hover:opacity-90 transition"
        >
          Book Now
        </button>

      </div>
    </div>

  </div>
</div>

            </div>
          </div>

          {/* Info boxes */}


        </div>
      </div>
    </section>
  );
};

export default Drdetail;