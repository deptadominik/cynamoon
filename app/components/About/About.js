"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import { SiInstagram, SiTiktok, SiYoutube, SiFacebook } from "react-icons/si"; // Import ikon

export default function About() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-40"
    >
      <Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
        <div
          className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
          ref={textRef}
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="overflow-hidden">
            <h2
              className={`font-bold text-5xl pb-6 translate-y-20 ${
                isInView ? "animate-slideUp" : ""
              }`}
            >
              O nas
            </h2>
          </div>

          <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-justify">
            <b>Cynamoon.</b> Pop z elementami funkowej energii oraz lirycznymi
            tekstami, okraszone soulowym feelingiem momentami nawet w rytmie
            disco, co sprawia, że nasza muzyka – choć osadzona w konkretnej
            estetyce – posiada różne oblicza. Pochodzimy ze śląska. W obecnym
            składzie, na który składa się aż 9 muzycznych osobowości, gramy od
            maja 2024 roku. Uwielbiamy eksperymentować, tworzyć niebanalne
            melodie, a także improwizować. Jam session to obowiązkowa pozycja
            każdej naszej próby.
          </p>

          {/* Ikony społecznościowe */}
          <div className="flex justify-center pt-8 gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/cynamoon.official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="text-gray-800 hover:text-gray-500 w-8 h-8 transition-colors" />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@_cynamoon_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTiktok className="text-gray-800 hover:text-gray-500 w-8 h-8 transition-colors" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@cynamoon_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiYoutube className="text-gray-800 hover:text-gray-500 w-8 h-8 transition-colors" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/cynamoon.official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFacebook className="text-gray-800 hover:text-gray-500 w-8 h-8 transition-colors" />
            </a>
          </div>
        </div>
      </Container>

      <Image
        className="w-full mt-5 max-w-md h-auto object-cover lg:mt-0 lg:max-w-sm xl:max-w-md mr-4 lg:mr-12 xl:mr-16 rounded-lg"
        src="/about.jpg"
        width={533}
        height={533}
        alt="Group photo"
      />
    </section>
  );
}
