"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import { MapMapper, Calendar } from "@/app/svg-icons/svg-icons";

const galleryThumbnails = [
  {
    id: 1,
    src: "/gallery/slider-images/thumbnail-2.jpg",
    club: "Klub Studencki Spirala",
    city: "Gliwice",
    date: "6/02/2025",
    slides: [
      { src: "/gallery/slider-images/slider-14.jpg" },
      { src: "/gallery/slider-images/slider-15.jpg" },
      { src: "/gallery/slider-images/slider-16.jpg" },
      { src: "/gallery/slider-images/slider-17.jpg" },
      { src: "/gallery/slider-images/slider-18.jpg" },
      { src: "/gallery/slider-images/slider-19.jpg" },
      { src: "/gallery/slider-images/slider-20.jpg" },
      { src: "/gallery/slider-images/slider-21.jpg" },
      { src: "/gallery/slider-images/slider-22.jpg" },
      { src: "/gallery/slider-images/slider-23.jpg" },
      { src: "/gallery/slider-images/slider-24.jpg" },
      { src: "/gallery/slider-images/slider-25.jpg" },
      { src: "/gallery/slider-images/slider-26.jpg" },
    ],
  },
  {
    id: 2,
    src: "/gallery/slider-images/thumbnail-1.jpg",
    club: "MDK im. Andrzeja Bursy",
    city: "Kraków",
    date: "12/10/2024",
    slides: [
      { src: "/gallery/slider-images/slider-4.jpg" },
      { src: "/gallery/slider-images/slider-1.jpg" },
      { src: "/gallery/slider-images/slider-2.jpg" },
      { src: "/gallery/slider-images/slider-3.jpg" },
      { src: "/gallery/slider-images/slider-5.jpg" },
      { src: "/gallery/slider-images/slider-6.jpg" },
      { src: "/gallery/slider-images/slider-7.jpg" },
      { src: "/gallery/slider-images/slider-8.jpg" },
      { src: "/gallery/slider-images/slider-9.jpg" },
      { src: "/gallery/slider-images/slider-10.jpg" },
      { src: "/gallery/slider-images/slider-11.jpg" },
      { src: "/gallery/slider-images/slider-12.jpg" },
      { src: "/gallery/slider-images/slider-13.jpg" },
    ],
  },
];

export default function PhotoGallery() {
  const [openGallery, setOpenGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const clickHandler = (index) => {
    setOpenGallery(true);
    setGalleryIndex(index);
  };

  return (
    <section
      id="photo-gallery"
      className={`w-full mt-16 pb-14 lg:mt-56 lg:pb-56 lg:mb-[22.5rem]`}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={sectionRef}
    >
      <Container>
        <div className="overflow-hidden">
          <h2
            className={`font-bold text-6xl pb-6 translate-y-24 ${
              isInView ? "animate-slideUp" : ""
            }`}
          >
            Galeria
          </h2>
        </div>
        <p>Nasza koncertowa kronika 📸</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {galleryThumbnails.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center mb-5 leading-none"
                key={item.id}
              >
                <div className="w-full h-full rounded-lg bg-black transition-all">
                  <Image
                    className="rounded-lg cursor-pointer hover:opacity-40 transition-all"
                    src={item.src}
                    width={400}
                    height={400}
                    alt="Gallery gig thumbnail"
                    onClick={() => clickHandler(index)}
                  />
                </div>
                {/* Club name with bigger margin and centered */}
                <h5 className="mt-4 text-sm md:text-lg xl:text-xl font-medium text-center">
                  {item.club}
                </h5>
                <span className="flex items-center">
                  <MapMapper />
                  <h5 className="ml-2 text-sm md:text-lg">{item.city}</h5>
                </span>
                <span className="flex items-center">
                  <Calendar />
                  <h5 className="ml-2 text-sm md:text-lg">{item.date}</h5>
                </span>
              </div>
            );
          })}
          <Lightbox
            open={openGallery}
            close={() => setOpenGallery(false)}
            slides={galleryThumbnails[galleryIndex].slides}
          />
        </div>
      </Container>
    </section>
  );
}
