"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";

export default function ContactUs() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center w-full mt-16 mx-auto max-w-[150rem] lg:mt-56 mb-16 lg:mb-[22.5rem]"
    >
      <Container customClasses="flex flex-col items-center justify-center text-center px-4 lg:px-12 xl:px-16">
        <div
          className="flex flex-col items-center text-center max-w-4xl"
          ref={textRef}
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="overflow-hidden">
            <h2
              className={`font-bold text-4xl pb-6 ${
                isInView ? "animate-slideUp" : ""
              }`}
            >
              Kontakt
            </h2>
          </div>
          <p className="text-center text-2xl">
            Jeśli chcesz się z nami skontaktować, wyślij maila na adres{" "}
            <a
              className="text-blue-800 underline underline-offset-4 hover:text-yellow-600"
              href="mailto:cynamoon.band@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              cynamoon.band@gmail.com
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}