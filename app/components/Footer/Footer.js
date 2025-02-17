import Container from "@/app/global-components/Container/Container";
import {
  SiInstagram,
  SiTiktok,
  SiYoutube,
  SiFacebook,
  SiSpotify,
} from "react-icons/si";

export default function Footer() {
  return (
    <section
      id="footer"
      className="bg-black w-full lg:fixed lg:bottom-0 lg:z-[-1] lg:h-[6rem]"
    >
      <footer className="w-full">
        <div className="bg-blue-900 pt-2 relative z-[100]">
          <Container customClasses="flex justify-between items-center w-full">
            {/* Social media */}
            <div className="flex justify-center items-center w-full gap-3 md:gap-8">
              <a
                href="https://www.facebook.com/cynamoon.official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFacebook className="text-white hover:text-gray-300 w-8 h-8 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/cynamoon.official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram className="text-white hover:text-gray-300 w-8 h-8 transition-colors" />
              </a>
              <a
                href="https://open.spotify.com/artist/5dEQVavGCkBiNSVahYbUND"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiSpotify className="text-white hover:text-gray-300 w-8 h-8 transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@cynamoon_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiYoutube className="text-white hover:text-gray-300 w-8 h-8 transition-colors" />
              </a>
              <a
                href="https://www.tiktok.com/@_cynamoon_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTiktok className="text-white hover:text-gray-300 w-8 h-8 transition-colors" />
              </a>
            </div>
          </Container>

          <div className="bg-black text-white mt-2 py-2">
            <p className="text-[0.7rem] text-center leading-tight mb-1">
              Stronka zasilana przez naszych gitarzystów (programistów) -{" "}
              <a
                className="text-blue-400 underline underline-offset-4 hover:text-yellow-600"
                href="https://github.com/deptadominik"
                target="_blank"
                rel="noreferrer"
              >
                Dominika
              </a>{" "}
              i{" "}
              <a
                className="text-blue-400 underline underline-offset-4 hover:text-yellow-600"
                href="https://github.com/dkarolew"
                target="_blank"
                rel="noreferrer"
              >
                Dawida
              </a>{" "}
              😎
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
