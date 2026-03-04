import { useRef } from "react";
import { useInView } from "framer-motion";

export default function NewAlbum({ customClasses }) {
  const comingSoonRef = useRef(null);
  const isInView = useInView(comingSoonRef, { once: true });
  return (
    <a
      href="https://youtu.be/BLVnaNeEtbY"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <div
        className={`flex flex-col items-center justify-center p-4 transition-opacity duration-300 cursor-pointer hover:opacity-80${
          customClasses ? ` ${customClasses}` : ""
        }`}
        ref={comingSoonRef}
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h4 className="text-white font-permanentMarker text-xl">
          Nowy singiel
        </h4>
        <h4 className="text-white font-caveat text-4xl">Miło było</h4>
        <p className="text-orange-500 text-base">Już w streamingu!</p>
      </div>
    </a>
  );
}
