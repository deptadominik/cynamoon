"use client";

import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import NewAlbum from "../NewAlbum/NewAlbum";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";
import {
  SiInstagram,
  SiTiktok,
  SiYoutube,
  SiFacebook,
  SiSpotify,
} from "react-icons/si";

export default function BandIdentity() {
  return (
    <>
      <div className="w-full py-3 z-50 lg:hidden">
        <Container customClasses="px-2.5 flex items-center justify-between font-sm">
          <Image
            className="max-w-[6rem] h-auto "
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo-portrait.png`}
            width={324}
            height={324}
            alt="Cynamoon logo"
          />
          <ScrollTo toId="shows" duration={1500}>
            <ButtonPrimary customClasses="text-sm">Koncerty</ButtonPrimary>
          </ScrollTo>
        </Container>
      </div>
      <div className="hidden h-full flex-col justify-start grow-0 shrink-0 bg-black z-10 bg-opacity-50 lg:flex">
        <div className="logo-container py-4 opacity-1">
          <Image
            className="px-12 py-3 max-w-[18.75rem] h-auto"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo-portrait.png`}
            width={324}
            height={236}
            alt="Cynamoon logo"
          />
        </div>
        <NewAlbum />
        <div className="flex flex-col justify-center items-center h-full gap-20 md:gap-16">
          <a
            href="https://www.facebook.com/cynamoon.official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFacebook className="text-white hover:text-gray-300 w-10 h-10 transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/cynamoon.official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram className="text-white hover:text-gray-300 w-10 h-10 transition-colors" />
          </a>
          <a
            href="https://open.spotify.com/artist/5dEQVavGCkBiNSVahYbUND"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiSpotify className="text-white hover:text-gray-300 w-10 h-10 transition-colors" />
          </a>
          <a
            href="https://www.youtube.com/@cynamoon_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiYoutube className="text-white hover:text-gray-300 w-10 h-10 transition-colors" />
          </a>
          <a
            href="https://www.tiktok.com/@_cynamoon_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTiktok className="text-white hover:text-gray-300 w-10 h-10 transition-colors" />
          </a>
        </div>
      </div>
    </>
  );
}
