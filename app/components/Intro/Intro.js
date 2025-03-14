"use client";

import { useRef, useState, useEffect } from "react";
import BandIdentity from "../BandIdentity/BandIdentity";
import Container from "@/app/global-components/Container/Container";
import IntroTourDates from "../IntroTourDates/IntroTourDates";
import NewAlbum from "../NewAlbum/NewAlbum";
import BackToTop from "../BackToTop/BackToTop";
import { useInView } from "framer-motion";
import CookieConsent from "react-cookie-consent";

const observerOptions = {
  rootMargin: "0px",
  threshold: 0,
};

export default function Intro() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  useEffect(() => {
    const { scrollY } = window;
    if (scrollY > 50 && !isInView) {
      setIsScrollTopVisible(true);
    } else {
      setIsScrollTopVisible(false);
    }
  }, [isInView]);

  return (
    <section
      id="intro"
      className={`relative flex flex-col items-center h-[100svh] w-full overflow-hidden max-h-[93rem] min-h-[43rem] lg:h-screen lg:flex-row lg:justify-start`}
      ref={sectionRef}
    >
      <BandIdentity />
      <div className="absolute w-full h-full top-0 left-0">
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black to-blue-900 opacity-40"></div>
        <video
          autoPlay
          muted
          loop
          poster="/background.jpg"
          className="object-cover w-full h-full z-10"
          playsInline
          preload="auto"
        >
          <source
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/video-band.webm`}
            type="video/webm"
          />
          <source
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/video-band.mp4`}
            type="video/mp4"
          />
          <p>
            Your browser doesn&#8217;t support HTML video. Here is a
            <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/video-band.mp4`}>
              link to the video
            </a>{" "}
            instead.
          </p>
        </video>
      </div>
      <Container customClasses="flex flex-col justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:justify-end lg:items-end">
        <IntroTourDates />
      </Container>
      <BackToTop
        customClasses={`reveal${isScrollTopVisible ? " visible" : ""}`}
      />
<CookieConsent
  disableStyles={true}
  buttonText="Jasne!"
  cookieName="cookie_consent"
  buttonClasses="bg-yellow-btn-primary rounded-full p-2 px-4 text-sm text-white mt-2 self-center"
  containerClasses="fixed bottom-2 left-8 z-[50] bg-stone-300/70 backdrop-blur-lg rounded-md p-3 flex flex-col items-center max-w-xs text-center"
  contentClasses="text-sm leading-none text-white"
  expires={20}
>
  Ta strona używa plików cookies.
</CookieConsent>


    </section>
  );
}
