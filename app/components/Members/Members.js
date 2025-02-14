// "use client";

// import { useRef } from "react";
// import { useInView } from "framer-motion";
// import Image from "next/image";
// import Container from "@/app/global-components/Container/Container";

// export default function Members() {
//   // Oddzielne referencje dla każdej sekcji
//   const jowitaRef = useRef(null);
//   const dawidRef = useRef(null);
//   const dominikRef = useRef(null);
//   const witekRef = useRef(null);
//   const bartekRef = useRef(null);
//   const wiktorRef = useRef(null);
//   const lukaszRef = useRef(null);
//   const szczepanRef = useRef(null);
//   const alekRef = useRef(null);

//   const isJowitaInView = useInView(jowitaRef, { once: true });
//   const isDawidInView = useInView(dawidRef, { once: true });
//   const isDominikInView = useInView(dominikRef, { once: true });
//   const isWitekInView = useInView(dominikRef, { once: true });
//   const isBartekInView = useInView(dominikRef, { once: true });
//   const isWiktorInView = useInView(dominikRef, { once: true });
//   const isLukaszInView = useInView(dominikRef, { once: true });
//   const isSzczepanInView = useInView(dominikRef, { once: true });
//   const isAlekInView = useInView(dominikRef, { once: true });

//   return (
//     <section>
//       {/* Jowita */}
//       <div
//         id="members-jowita"
//         className="relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-40"
//       >
//         <Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
//           <div
//             ref={jowitaRef}
//             className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
//             style={{
//               transform: isJowitaInView ? "none" : "translateX(-100px)",
//               opacity: isJowitaInView ? 1 : 0,
//               transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//             }}
//           >
//             <div className="overflow-hidden">
//               <h2
//                 className={`font-bold text-5xl pb-6 translate-y-20 ${
//                   isJowitaInView ? "animate-slideUp" : ""
//                 }`}
//               >
//                 Jowita Grzebień
//               </h2>
//             </div>
//             <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-justify">
//               <b>Wokalistka.</b> Z muzyką ma styczność od najmłodszych lat,
//               właściwie od kiedy w wieku 3 lat dostała tamburyn na urodziny 🤪
//               tak więc występy publicznie, czy to muzyczne czy też recytatorskie
//               lub konferansjerskie nie są jej obce. Ukończyła Szkołę Muzyczną
//               im. ks. prof. Józefa Tischnera w Domosławicach w klasie gitary
//               (❤️!), jednak od zawsze to śpiew był na pierwszym miejscu pośród
//               jej muzycznych zainteresowań. Dlatego też kontynuowała wokalną
//               drogę w Studiu Rocka Pawła Mazura, gdzie nabrała doświadczenia
//               scenicznego oraz studyjnego, kształciła się również pod okiem
//               wybitnych wokalistek m. in. Margo Zuber oraz Danuty Sendeckiej,
//               zdarzyło jej się śpiewać w chórach. Nie zamyka się na jeden
//               gatunek muzyczny, ale szczególne miejsce w jej sercu mają soul,
//               jazz oraz r&b, co ma bezpośredni wpływ na naszą twórczość 🌸 Aby
//               dać upust swojej artystycznej duszy, pisze wiersze i teksty, które
//               niedługo będziecie mogli usłyszeć 🌷 Na co dzień jest dość
//               zaczytana i zabiegana, ale taka już jej natura 🤓 studiuje również
//               prawo na Uniwersytecie Śląskim w Kato 👩‍🎓
//             </p>
//           </div>
//         </Container>
//         <Image
//           className="w-1/3 max-w-[180px] h-auto object-cover lg:mt-0 lg:max-w-sm xl:max-w-md mr-4 lg:mr-12 xl:mr-16 rounded-lg"
//           src="/Jowita.jpg"
//           width={533}
//           height={533}
//           alt="Jowita photo"
//         />
//       </div>

//       {/* Dawid */}
//       <div
//         id="members-dawid"
//         className="relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-40"
//       >
//         <Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
//           <div
//             ref={dawidRef}
//             className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
//             style={{
//               transform: isDawidInView ? "none" : "translateX(-100px)",
//               opacity: isDawidInView ? 1 : 0,
//               transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//             }}
//           >
//             <div className="overflow-hidden">
//               <h2
//                 className={`font-bold text-5xl pb-6 translate-y-20 ${
//                   isDawidInView ? "animate-slideUp" : ""
//                 }`}
//               >
//                 Dawid Karolewski
//               </h2>
//             </div>
//             <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-justify">
//               <b>Gitarzysta.</b> Dawid to specjalista od solówek i pasjonat
//               aranżacji. Pochodzi z muzykalnej rodziny, więc zostanie gitarzystą
//               było nieuniknione. Totalny samouk nie posiadający żadnych
//               certyfikatów na wykonywanie tego zawodu, więc nie ręczy za swoje
//               partie 🫣 Śpiewa również, ale tylko pod prysznicem i w aucie,
//               przynajmniej póki co. Gdy nie spędza czasu na graniu, to dźwiga
//               ciężary na siłce 💪 Ponadto interesuje się psychologią. Zawodowo
//               programista w cyberbezpieczeństwie dla zagranicznego start-up’u 👨‍💻
//             </p>
//           </div>
//         </Container>
//         <Image
//           className="w-1/3 max-w-[180px] mt-5 h-auto object-cover lg:mt-0 lg:max-w-sm xl:max-w-md mr-4 lg:mr-12 xl:mr-16 rounded-lg"
//           src="/Dawid.jpg"
//           width={533}
//           height={533}
//           alt="Dawid photo"
//         />
//       </div>

//       {/* Dominik */}
//       <div
//         id="members-dominik"
//         className="relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-40"
//       >
//         <Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
//           <div
//             ref={dominikRef}
//             className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
//             style={{
//               transform: isDominikInView ? "none" : "translateX(-100px)",
//               opacity: isDominikInView ? 1 : 0,
//               transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//             }}
//           >
//             <div className="overflow-hidden">
//               <h2
//                 className={`font-bold text-5xl pb-6 translate-y-20 ${
//                   isDominikInView ? "animate-slideUp" : ""
//                 }`}
//               >
//                 Dominik Depta
//               </h2>
//             </div>
//             <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-justify">
//               <b>Gitarzysta.</b> Mistrz riffów i rytmicznych partii! 😎 Gitarę
//               trzyma lepiej niż pilota do telewizora, a jego granie potrafi
//               sprawić, że nawet sąsiedzi zaczynają tańczyć 🕺 Zawsze w drodze do
//               funkowej sławy, nawet jeśli czasem kończy na kanapie z Netflixem
//               📺 Swoją przygodę z muzyką rozpoczął daaawno temu w szkole
//               podstawowej od gitary klasycznej, a w swojej karierze trochę sobie
//               też pośpiewał 🎤 Ukończył (podobnie jak Jowita!) Państwową Szkołę
//               Muzyczną w klasie gitary 🎸 W jego duszy gra przede wszystkim
//               soul, funk, a nawet trochę jazzu, ale co ciekawe nie stroni
//               również od mocniejszych brzmień! Zawodowo zajmuje się
//               programowaniem, a nie tak dawno temu obronił tytuł magistra z
//               informatyki 🥸💻
//             </p>
//           </div>
//         </Container>
//         <Image
//           className="w-1/3 max-w-[180px] h-auto object-cover lg:mt-0 lg:max-w-sm xl:max-w-md mr-4 lg:mr-12 xl:mr-16 rounded-lg"
//           src="/Dominik.jpg"
//           width={533}
//           height={533}
//           alt="Dominik photo"
//         />
//       </div>
//       {/* Witek Palusiński */}
//       <div
//         id="members-witek"
//         className="relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-40"
//       >
//         <Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
//           <div
//             ref={witekRef}
//             className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
//             style={{
//               transform: isWitekInView ? "none" : "translateX(-100px)",
//               opacity: isWitekInView ? 1 : 0,
//               transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//             }}
//           >
//             <div className="overflow-hidden">
//               <h2
//                 className={`font-bold text-5xl pb-6 translate-y-20 ${
//                   isWitekInView ? "animate-slideUp" : ""
//                 }`}
//               >
//                 Witek Palusiński
//               </h2>
//             </div>
//             <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-justify">
//               <b>Klawiszowiec.</b> Witek to klawiszowiec z prawdziwą pasją do
//               muzyki. Jego miłość do dobrego funku sprawia, że na każdej scenie
//               zaraża publiczność pozytywną energią ⚡️Człowiek wielu talentów,
//               nie tylko zachwyca swoją grą, ale również doskonale zna się na
//               elektryce, co sprawia, że jest niezastąpiony zarówno w studio, jak
//               i na koncertach 🎹 Uwielbia odkrywać nowe brzmienia, dlatego
//               najpierw kupuje przeróżne dziwne instrumenty, a następnie uczy się
//               na nich grać 💪 Jest także miłośnikiem podróży, albowiem w wolnych
//               chwilach zwiedza świat za pomogą Google Street View 🌍
//             </p>
//           </div>
//         </Container>
//         <Image
//           className="w-1/3 max-w-[180px] h-auto object-cover lg:mt-0 lg:max-w-sm xl:max-w-md mr-4 lg:mr-12 xl:mr-16 rounded-lg"
//           src="/Witek.jpg"
//           width={533}
//           height={533}
//           alt="Witek photo"
//         />
//       </div>
//       {/* Bartosz Papaj */}
//       <div
//         id="members-bartek"
//         className="relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-40"
//       >
//         <Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
//           <div
//             ref={bartekRef}
//             className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
//             style={{
//               transform: isBartekInView ? "none" : "translateX(-100px)",
//               opacity: isBartekInView ? 1 : 0,
//               transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//             }}
//           >
//             <div className="overflow-hidden">
//               <h2
//                 className={`font-bold text-5xl pb-6 translate-y-20 ${
//                   isBartekInView ? "animate-slideUp" : ""
//                 }`}
//               >
//                 Bartosz Papaj
//               </h2>
//             </div>
//             <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-justify">
//               <b>Perkusista.</b> Bartek. Zawodnik wagi ciężkiej, zagrał kilkaset
//               koncertów, nagrał kilka płyt, widnieje w trzech encyklopediach 🤯
//               Prawdziwy profesjonalista. Bartek słynie ze swojego dynamicznego
//               stylu gry i niezwykłej precyzji 🥁 Jego kreatywność w kreowaniu
//               groove’u sprawia, że jest niezastąpionym członkiem naszego składu.
//               Kocha gotować (miesza w garach i tłucze się po talerzach),
//               ostatnio wystąpił w roli trenera w narożniku bokserskim 🥊 W pracy
//               techniczny, a na próbach rytmiczny. W wolnych chwilach podróżuje z
//               Córką. ✈️
//             </p>
//           </div>
//         </Container>
//         <Image
//           className="w-1/3 max-w-[180px] h-auto object-cover lg:mt-0 lg:max-w-sm xl:max-w-md mr-4 lg:mr-12 xl:mr-16 rounded-lg"
//           src="/Bartek.jpg"
//           width={533}
//           height={533}
//           alt="Bartek photo"
//         />
//       </div>
//       {/* Wiktor Waniowski */}
//       <div
//         id="members-wiktor"
//         className="relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-40"
//       >
//         <Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
//           <div
//             ref={wiktorRef}
//             className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
//             style={{
//               transform: isWiktorInView ? "none" : "translateX(-100px)",
//               opacity: isWiktorInView ? 1 : 0,
//               transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//             }}
//           >
//             <div className="overflow-hidden">
//               <h2
//                 className={`font-bold text-5xl pb-6 translate-y-20 ${
//                   isWiktorInView ? "animate-slideUp" : ""
//                 }`}
//               >
//                 Wiktor Waniowski
//               </h2>
//             </div>
//             <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-justify">
//               <b>Basista.</b> Wiktor. Miło mi Wam go przedstawić. Zapoznanie
//               poprzez niskie dźwięki sprawi, że Wszystko będziecie o nim
//               wiedzieć. Nie ufajcie, gdy mówi, że ani razu nie pomylił dźwięku.
//               Lewituje w rytmie 🎵 Muzyczny samouk. Gdyby płacili za wyczucie
//               rytmu, byłby milionerem jeszcze przed trzydziestką 💰 Poza graniem
//               na basie słucha muzyki, gra w tenisa, czyta książki, znów słucha
//               muzyki i zastanawia się dlaczego kaczor Donald zakładał ręcznik po
//               wyjściu z prysznica, mimo, że nigdy nie zakładał spodni 🦆 Jego
//               nick na Instagramie na to nie wskazuje, ale uwielbia książki
//               Franza Kafki 📚
//             </p>
//           </div>
//         </Container>
//         <Image
//           className="w-1/3 max-w-[180px] h-auto object-cover lg:mt-0 lg:max-w-sm xl:max-w-md mr-4 lg:mr-12 xl:mr-16 rounded-lg"
//           src="/Wiktor.jpg"
//           width={533}
//           height={533}
//           alt="Wiktor photo"
//         />
//       </div>
//       {/* Łukasz Paduch */}
//       <div
//         id="members-lukasz"
//         className="relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-40"
//       >
//         <Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
//           <div
//             ref={lukaszRef}
//             className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
//             style={{
//               transform: isLukaszInView ? "none" : "translateX(-100px)",
//               opacity: isLukaszInView ? 1 : 0,
//               transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//             }}
//           >
//             <div className="overflow-hidden">
//               <h2
//                 className={`font-bold text-5xl pb-6 translate-y-20 ${
//                   isLukaszInView ? "animate-slideUp" : ""
//                 }`}
//               >
//                 Łukasz Paduch
//               </h2>
//             </div>
//             <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-justify">
//               <b>Saksofonista.</b> Jak mawiał święty Łukasz... Saksofonu nie
//               oszukasz 🎷 Choć w świecie świętego Łukasza jeszcze saksofonu nie
//               było, tak świat naszego Łukasza bez saksofonu nie istnieje. Tenor
//               i baryton to jego częstotliwości 🎼 Kocha naturę, święty spokój,
//               sport i motocykle 🏍️ Naukę gry zaczął w szkole średniej, w
//               orkiestrze szkolnej. Słucha jazzu i uważa, że disco polo powinno
//               zostać zdelegalizowane, a zioło zalegalizowane 🌿 Lubi ludzi ale
//               nie tak bardzo jak czekoladę! 🍫
//             </p>
//           </div>
//         </Container>
//         <Image
//           className="w-1/3 max-w-[180px] h-auto object-cover lg:mt-0 lg:max-w-sm xl:max-w-md mr-4 lg:mr-12 xl:mr-16 rounded-lg"
//           src="/Lukasz.jpg"
//           width={533}
//           height={533}
//           alt="Lukasz photo"
//         />
//       </div>
//       {/* Szczepan Holeksa */}
//       <div
//         id="members-szczepan"
//         className="relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-40"
//       >
//         <Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
//           <div
//             ref={szczepanRef}
//             className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
//             style={{
//               transform: isSzczepanInView ? "none" : "translateX(-100px)",
//               opacity: isSzczepanInView ? 1 : 0,
//               transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//             }}
//           >
//             <div className="overflow-hidden">
//               <h2
//                 className={`font-bold text-5xl pb-6 translate-y-20 ${
//                   isSzczepanInView ? "animate-slideUp" : ""
//                 }`}
//               >
//                 Szczepan Holeksa
//               </h2>
//             </div>
//             <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-justify">
//               <b>Puzonista.</b> Szczepan ukończył I i II stopień w szkole
//               muzycznej im. Ignacego Paderewskiego w Cieszynie 🏆 Aktualnie
//               kształci się na Akademii Muzycznej im. Karola Szymanowskiego w
//               Katowicach 🎵Interesuje się muzyką rozrywkową i grał już w swojej
//               karierze w wielu składach 😎 Poza muzyką uwielbia gotować, pić
//               kawę, wędrować po górskich szlakach i śmigać na nartach! ⛷️🏔️
//             </p>
//           </div>
//         </Container>
//         <Image
//           className="w-1/3 max-w-[180px] h-auto object-cover lg:mt-0 lg:max-w-sm xl:max-w-md mr-4 lg:mr-12 xl:mr-16 rounded-lg"
//           src="/Szczepan.jpg"
//           width={533}
//           height={533}
//           alt="Szczepan photo"
//         />
//       </div>
//       {/* Alek Ostrowski */}
//       <div
//         id="members-alek"
//         className="relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-40"
//       >
//         <Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
//           <div
//             ref={alekRef}
//             className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
//             style={{
//               transform: isAlekInView ? "none" : "translateX(-100px)",
//               opacity: isAlekInView ? 1 : 0,
//               transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//             }}
//           >
//             <div className="overflow-hidden">
//               <h2
//                 className={`font-bold text-5xl pb-6 translate-y-20 ${
//                   isAlekInView ? "animate-slideUp" : ""
//                 }`}
//               >
//                 Alek Ostrowski
//               </h2>
//             </div>
//             <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-justify">
//               <b>Trębacz.</b> Wprawdzie studiował grę klasyczną, ale lubi też
//               grać rozrywkę. Nie ogranicza się do jednego gatunku. Ma różne
//               pomysły na sekcję detą w naszych kawałkach, czasem proponuje też
//               nietypowe rozwiązania harmoniczne 🤓 Piję kawę hektolitrami. Lubi
//               gotować, czytać i oglądać seriale. 📺 Nie jest na Ciebie zły, po
//               prostu musi się skupić na grze i trafianiu wysokich dźwięków 💯
//             </p>
//           </div>
//         </Container>
//         <Image
//           className="w-1/3 max-w-[180px] h-auto object-cover lg:mt-0 lg:max-w-sm xl:max-w-md mr-4 lg:mr-12 xl:mr-16 rounded-lg"
//           src="/Alek.jpg"
//           width={533}
//           height={533}
//           alt="Alek photo"
//         />
//       </div>
//     </section>
//   );
// }
"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";

const members = [
  {
    name: "Jowita Grzebień",
    role: "Wokalistka",
    description: "Z muzyką ma styczność od najmłodszych lat, właściwie od kiedy w wieku 3 lat dostała tamburyn na urodziny 🤪 tak więc występy publicznie, czy to muzyczne czy też recytatorskie lub konferansjerskie nie są jej obce. Ukończyła Szkołę Muzyczną im. ks. prof. Józefa Tischnera w Domosławicach w klasie gitary (❤️!), jednak od zawsze to śpiew był na pierwszym miejscu pośród jej muzycznych zainteresowań. Dlatego też kontynuowała wokalną drogę w Studiu Rocka Pawła Mazura, gdzie nabrała doświadczenia scenicznego oraz studyjnego, kształciła się również pod okiem wybitnych wokalistek m. in. Margo Zuber oraz Danuty Sendeckiej, zdarzyło jej się śpiewać w chórach. Nie zamyka się na jeden gatunek muzyczny, ale szczególne miejsce w jej sercu mają soul, jazz oraz r&b, co ma bezpośredni wpływ na naszą twórczość 🌸 Aby dać upust swojej artystycznej duszy, pisze wiersze i teksty, które niedługo będziecie mogli usłyszeć 🌷 Na co dzień jest dość zaczytana i zabiegana, ale taka już jej natura 🤓 studiuje również prawo na Uniwersytecie Śląskim w Kato 👩‍🎓",
    image: "/Jowita.jpg",
  },
  {
    name: "Dominik Depta",
    role: "Gitarzysta",
    description: "Mistrz riffów i rytmicznych partii! 😎 Gitarę trzyma lepiej niż pilota do telewizora, a jego granie potrafi sprawić, że nawet sąsiedzi zaczynają tańczyć 🕺 Zawsze w drodze do funkowej sławy, nawet jeśli czasem kończy na kanapie z Netflixem 📺 W jego duszy gra przede wszystkim soul, funk, a nawet trochę jazzu, ale co ciekawe nie stroni również od mocniejszych brzmień! Zawodowo zajmuje się programowaniem, a nie tak dawno temu obronił tytuł magistra z informatyki 🥸💻",
    image: "/Dominik.jpg",
  },
  {
    name: "Witek Palusiński",
    role: "Klawiszowiec",
    description: "Witek to gość z prawdziwą pasją do muzyki. Jego miłość do dobrego funku sprawia, że na każdej scenie zaraża publiczność pozytywną energią ⚡️Człowiek wielu talentów, nie tylko zachwyca swoją grą, ale również doskonale zna się na elektryce, co sprawia, że jest niezastąpiony zarówno w studio, jak i na koncertach 🎹 Uwielbia odkrywać nowe brzmienia, dlatego najpierw kupuje przeróżne dziwne instrumenty, a następnie uczy się na nich grać 💪 Jest także miłośnikiem podróży, albowiem w wolnych chwilach zwiedza świat za pomogą Google Street View 🌍",
    image: "/Witek.jpg",
  },
  {
    name: "Dawid Karolewski",
    role: "Gitarzysta",
    description: "Tak, mamy ich dwóch! Dawid to specjalista od solówek i pasjonat aranżacji. Pochodzi z muzykalnej rodziny, więc zostanie gitarzystą było nieuniknione. Totalny samouk nie posiadający żadnych certyfikatów na wykonywanie tego zawodu, więc nie ręczy za swoje partie 🫣 Śpiewa również, ale tylko pod prysznicem i w aucie, przynajmniej póki co. Gdy nie spędza czasu na graniu, to dźwiga ciężary na siłce 💪 Ponadto interesuje się psychologią. Zawodowo programista w cyberbezpieczeństwie dla zagranicznego start-up’u 👨‍💻",
    image: "/Dawid.jpg",
  },
  {
    name: "Bartosz Papaj",
    role: "Perkusista",
    description: "Bartek. Zawodnik wagi ciężkiej, zagrał kilkaset koncertów, nagrał kilka płyt, widnieje w trzech encyklopediach 🤯 Prawdziwy profesjonalista. Bartek słynie ze swojego dynamicznego stylu gry i niezwykłej precyzji 🥁 Jego kreatywność w kreowaniu groove’u sprawia, że jest niezastąpionym członkiem naszego składu. Kocha gotować (miesza w garach i tłucze się po talerzach), ostatnio wystąpił w roli trenera w narożniku bokserskim 🥊 W pracy techniczny, a na próbach rytmiczny. W wolnych chwilach podróżuje z Córką. ✈️",
    image: "/Bartek.jpg",
  },
  {
    name: "Wiktor Waniowski",
    role: "Basista",
    description: "Wiktor. Miło mi Wam go przedstawić. Zapoznanie poprzez niskie dźwięki sprawi, że Wszystko będziecie o nim wiedzieć. Nie ufajcie, gdy mówi, że ani razu nie pomylił dźwięku. Lewituje w rytmie 🎵 Muzyczny samouk. Gdyby płacili za wyczucie rytmu, byłby milionerem jeszcze przed trzydziestką 💰 Poza graniem na basie słucha muzyki, gra w tenisa, czyta książki, znów słucha muzyki i zastanawia się dlaczego kaczor Donald zakładał ręcznik po wyjściu z prysznica, mimo, że nigdy nie zakładał spodni 🦆 Jego nick na Instagramie na to nie wskazuje, ale uwielbia książki Franza Kafki 📚",
    image: "/Wiktor.jpg",
  },
  {
    name: "Łukasz Paduch",
    role: "Saksofonista",
    description: "Jak mawiał święty Łukasz... Saksofonu nie oszukasz 🎷 Choć w świecie świętego Łukasza jeszcze saksofonu nie było, tak świat naszego Łukasza bez saksofonu nie istnieje. Tenor i baryton to jego częstotliwości 🎼 Kocha naturę, święty spokój, sport i motocykle 🏍️ Naukę gry zaczął w szkole średniej, w orkiestrze szkolnej. Słucha jazzu i uważa, że disco polo powinno zostać zdelegalizowane, a zioło zalegalizowane 🌿 Lubi ludzi ale nie tak bardzo jak czekoladę! 🍫",
    image: "/Lukasz.jpg",
  },
  {
    name: "Szczepan Holeksa",
    role: "Puzonista",
    description: "Szczepan ukończył I i II stopień w szkole muzycznej im. Ignacego Paderewskiego w Cieszynie 🏆 Aktualnie kształci się na Akademii Muzycznej im. Karola Szymanowskiego w Katowicach 🎵 Interesuje się muzyką rozrywkową i grał już w swojej karierze w wielu składach 😎 Poza muzyką uwielbia gotować, pić kawę, wędrować po górskich szlakach i śmigać na nartach! ⛷️🏔️",
    image: "/Szczepan.jpg",
  },
  {
    name: "Alek Ostrowski",
    role: "Trębacz",
    description: "Wprawdzie studiował grę klasyczną, ale lubi też grać rozrywkę. Nie ogranicza się do jednego gatunku. Ma różne pomysły na sekcję detą w naszych kawałkach, czasem proponuje też nietypowe rozwiązania harmoniczne 🤓 Piję kawę hektolitrami. Lubi gotować, czytać i oglądać seriale 📺 Nie jest na Ciebie zły, po prostu musi się skupić na grze i trafianiu wysokich dźwięków 💯",
    image: "/Alek.jpg",
  }
];

export default function Members() {
  return (
    <section>
      {members.map((member, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
        const isOdd = index % 2 === 0;

        return (
          <div key={member.name} className={`relative flex flex-col items-center justify-between w-full mt-16 mx-auto max-w-[130rem] lg:mt-40 lg:flex-row ${isOdd ? "lg:flex-row-reverse" : ""} gap-24 lg:gap-32 px-8 lg:px-16`}>
            <Container customClasses="lg:w-1/2">
              <div ref={ref} className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl" style={{ transform: isInView ? "none" : "translateX(-100px)", opacity: isInView ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s" }}>
                <div className="overflow-hidden">
                  <h2 className={`font-bold text-5xl pb-6 translate-y-20 ${isInView ? "animate-slideUp" : ""}`}>{member.name}</h2>
                </div>
                <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-justify"><b>{member.role}.</b> {member.description}</p>
              </div>
            </Container>
            <div className="lg:w-1/2 flex justify-center">
              <Image className="w-2/3 max-w-[500px] h-auto object-cover lg:max-w-sm xl:max-w-md rounded-lg" src={member.image} width={500} height={500} alt={`${member.name} photo`} />
            </div>
          </div>
        );
      })}
    </section>
  );
}
