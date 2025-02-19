"use client";
import NewAlbum from "../NewAlbum/NewAlbum";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { MapMapper } from "@/app/svg-icons/svg-icons";

const tourDates = [
  {
    id: 1,
    date: "20.03",
    venue: "Klub Studencki Spirala",
    city: "Gliwice",
    eventRef: "",
    ticketsRef: "",
  },
  {
    id: 2,
    date: "21.03",
    venue: "Komin Music Cafe",
    city: "Sosnowiec",
    eventRef: "https://www.facebook.com/events/4038454276391813",
    ticketsRef:
      "https://www.kupbilecik.pl/imprezy/156853/sosnowiec/trzy.wymiary.dzwieku",
  },
  {
    id: 3,
    date: "10.05",
    venue: "Rebel Garden Cafe",
    city: "Chorzów",
    eventRef: "",
    ticketsRef: "",
  },
];

export default function IntroTourDates() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div
      className="flex flex-col items-center justify-center w-full px-4 lg:pl-[20rem] max-w-6xl mx-auto mt-8 md:mt-0"
      style={{
        transform: isInView ? "none" : "translateY(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={sectionRef}
    >
      <h2 className="text-white font-permanentMarker text-2xl md:text-3xl lg:text-4xl text-center">
        Koncerty
      </h2>

      {/* Lista koncertów */}
      <ul className="list-none w-full max-w-2xl lg:mt-6">
        {tourDates.map((gig) => {
          return (
            <li
              key={gig.id}
              className="grid grid-cols-[6rem_20rem_10rem_10rem] gap-10 items-center my-10 text-xl md:text-2xl lg:text-xl xl:text-2xl"
            >
              {/* Data */}
              <div className="flex flex-col justify-center items-center w-[5.5rem] h-[5.5rem] p-2 bg-blue-900 text-xl rounded-md border-8 border-white">
                <p className="font-bold text-white leading-none text-center uppercase lg:text-2xl">
                  {gig.date}
                </p>
              </div>

              {/* Miejsce */}
              <div className="text-white leading-none flex flex-col justify-center">
                {gig.eventRef !== "" ? (
                  <a
                    href={gig.eventRef}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>{gig.venue}</p>
                  </a>
                ) : (
                  <p>{gig.venue}</p>
                )}
              </div>

              {/* Miasto */}
              <div className="text-white flex items-center">
                <MapMapper extraClasses="fill-amber-400 mr-4" />
                <p>{gig.city}</p>
              </div>

              {/* Tickets */}
              <div className="flex items-center">
                <a
                  href={gig.ticketsRef}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "20px",
                    border: "4px solid #db9a18",
                    color: "#db9a18",
                    backgroundColor: "transparent",
                    padding: "5px 10px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    transition:
                      "background-color 0.3s ease-in, color 0.3s ease-in",
                  }}
                >
                  <p>{gig.ticketsRef === "" ? "Free" : "Bilety"}</p>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="lg:hidden md:hidden">
        <NewAlbum />
      </div>
    </div>
  );
}
