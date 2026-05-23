"use client";
import NewAlbum from "../NewAlbum/NewAlbum";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { MapMapper } from "@/app/svg-icons/svg-icons";

const tourDates = [
  {
    id: 1,
    date: "21.03",
    venue: "Komin Music Cafe",
    city: "Sosnowiec",
    eventRef: "https://www.facebook.com/events/4038454276391813",
    ticketsRef:
      "https://www.kupbilecik.pl/imprezy/156853/sosnowiec/trzy.wymiary.dzwieku",
  },
  {
    id: 2,
    date: "22.03",
    venue: "Centrum Kultury",
    city: "Kluczbork",
    eventRef: "https://fb.me/e/5Y77J19Jo",
    ticketsRef: "",
  },
  {
    id: 3,
    date: "23.04",
    venue: "Klubokawiarnia Piąty Dom",
    city: "Katowice",
    eventRef: "https://www.facebook.com/events/3063580227127992",
    ticketsRef: "",
  },
  {
    id: 4,
    date: "21.06",
    venue: "Rebel Garden Cafe",
    city: "Chorzów",
    eventRef: "https://www.facebook.com/events/1004595918433278",
    ticketsRef: "",
  },
  {
    id: 5,
    date: "28.06",
    venue: "Improwizacja Jazz Club",
    city: "Kraków",
    eventRef: "https://www.facebook.com/events/4179251509066894",
    ticketsRef: "https://www.facebook.com/events/4179251509066894",
  },
  {
    id: 6,
    date: "26.07",
    venue: "Festiwal Zespołów",
    city: "Tarnowiec",
    eventRef: "https://www.facebook.com/tarnogranie",
    ticketsRef: "",
  },
  {
    id: 7,
    date: "16.08",
    venue: "JACKBAR KATO",
    city: "Katowice",
    eventRef: "https://www.facebook.com/events/1208589157235340",
    ticketsRef: "https://www.facebook.com/events/1208589157235340",
  },
  {
    id: 8,
    date: "22.10",
    venue: "33. Giełda Piosenki Studenckiej",
    city: "SCK Opole",
    eventRef: "https://www.facebook.com/zimowagieldapiosenki",
    ticketsRef: "",
  },
  {
    id: 9,
    date: "26.10",
    venue: "Chicago Bar",
    city: "Kraków",
    eventRef: "https://www.facebook.com/events/1745009162868182",
    ticketsRef: "https://www.facebook.com/events/1745009162868182",
  },
  {
    id: 10,
    date: "11.07",
    venue: "Warta Glow Festival",
    city: "Śliwaków",
    eventRef: "https://www.facebook.com/events/721007477616060",
    ticketsRef:
      "https://www.wartaglowfestival.pl/event-details/warta-glow-festival-2026-1",
  },
];

export default function IntroTourDates() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const isSlider = tourDates.length > 3;

  const getOpacityClass = (index) => {
    const opacities = [
      "opacity-100",
      "opacity-100",
      "opacity-100",
      "opacity-80",
      "opacity-60",
      "opacity-40",
      "opacity-20",
    ];
    return opacities[index] || "opacity-10";
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full px-4 lg:pl-[20rem] max-w-6xl mx-auto mt-16 md:mt-0 overflow-x-hidden"
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

      <ul
        className={`list-none w-full max-w-2xl lg:mt-6 ${
          isSlider
            ? "overflow-y-auto overflow-x-hidden max-h-[340px] snap-y snap-mandatory pr-4 scrollbar-dark"
            : ""
        }`}
      >
        {tourDates
          .slice()
          .reverse()
          .map((gig, index) => (
            <li
              key={gig.id}
              className={`min-w-0 grid grid-cols-2 md:grid-cols-[6rem_1fr_10rem_8rem] gap-6 items-center my-10 text-xl md:text-2xl lg:text-xl xl:text-2xl ${
                isSlider ? "snap-start" : ""
              } ${getOpacityClass(index)} transition-opacity duration-500`}
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
              <div className="text-white items-center hidden md:flex">
                <MapMapper extraClasses="fill-amber-400 mr-2" />
                <p>{gig.city}</p>
              </div>

              {/* Tickets */}
              <div
                className="hidden md:flex items-center justify-center"
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
                {gig.ticketsRef === "" ? (
                  <p>Free</p>
                ) : (
                  <a
                    href={gig.ticketsRef}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Bilety</p>
                  </a>
                )}
              </div>
            </li>
          ))}
      </ul>

      <div className="lg:hidden md:hidden">
        <NewAlbum />
      </div>
    </div>
  );
}
