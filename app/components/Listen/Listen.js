"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";
import {
  Spotify,
  SoundCloud,
  Youtube,
  AppleMusic,
} from "@/app/svg-icons/svg-icons";
import AudioPlayer from "@/app/global-components/AudioPlayer/AudioPlayer";

export default function Listen() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <section id="listen" className={`w-full mt-16 lg:mt-56 px-8`}>
      <Container customClasses="flex flex-col lg:flex-row gap-16">
        <div
          className="flex flex-col justify-center basis-2/4 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl self-center"
          ref={textRef}
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <p className="mb-4 text-xl">Posłuchaj naszego najnowszego singla</p>
          <div className="overflow-hidden">
            <h2
              className={`font-bold text-5xl pb-6 translate-y-36 md:translate-y-24 ${
                isInView ? "animate-slideUp" : ""
              }`}
            >
              Nie chcę ufać Ci
            </h2>
          </div>
          <p className="text-justify text-2xl leading-relaxed">
            To opowieść o relacji i zaufaniu – o więzi, która ewoluuje, zmienia
            się i trwa, ale też o zaufaniu, które trudno zdobyć, lecz niezwykle
            łatwo stracić.
          </p>
          {/* TODO chyba zbedne */}
          {/* <div className="flex items-center pt-4 gap-4">
						<Spotify />
						<SoundCloud />
						<Youtube />
						<AppleMusic />
					</div> */}
        </div>
        <div className="flex items-center justify-center pt-5 basis-2/4 mt-20 lg:mt-0 lg:justify-end lg:pt-[60px]">
          <iframe
            src="https://open.spotify.com/embed/track/3waPbqDFZ1VAWvFHHD3YDT?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </section>
  );
}
