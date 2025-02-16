"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { MapMapper } from "@/app/svg-icons/svg-icons";

const tourDates = [
  {
    id: 1,
    date: "20.03",
    venue: "Klub Studencki Spirala",
    city: "Gliwice",
  },
  {
    id: 2,
    date: "21.03",
    venue: "Komin Music Cafe",
    city: "Sosnowiec",
  },
  {
    id: 3,
    date: "10.05",
    venue: "Rebel Garden Cafe",
    city: "Chorzów",
  },
];

export default function IntroTourDates() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div
      className="flex flex-col items-center justify-center w-full px-4 lg:pl-[20rem] max-w-6xl mx-auto"
      style={{
        transform: isInView ? "none" : "translateY(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={sectionRef}
    >
      <h2 className="text-white font-permanentMarker text-2xl md:text-3xl lg:text-4xl text-center">
        Najbliższe Koncerty
      </h2>

      {/* Lista koncertów */}
      <ul className="list-none w-full max-w-xl mt-6">
        {tourDates.map((gig) => {
          return (
            <li
              key={gig.id}
              className="grid grid-cols-[6rem_1fr_auto] gap-8 items-center my-10 text-xl md:text-2xl lg:text-xl xl:text-2xl"
            >
              {/* Data */}
              <div className="flex flex-col justify-center items-center w-[5.5rem] h-[5.5rem] p-2 bg-blue-900 text-xl rounded-md border-8 border-white">
                <p className="font-bold text-white leading-none text-center uppercase lg:text-2xl">
                  {gig.date}
                </p>
              </div>

              {/* Godzina + Miejsce */}
              <div className="text-white leading-none flex flex-col justify-center">
                <p>{gig.venue}</p>
              </div>

              {/* Miasto */}
              <div className="text-white flex items-center">
                <MapMapper extraClasses="fill-amber-400 mr-4" />
                <p>{gig.city}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
