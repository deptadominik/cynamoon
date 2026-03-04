"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";

const members = [
  {
    name: "Jowita Grzebień",
    role: "Wokalistka",
    description:
      "Z muzyką ma styczność od najmłodszych lat, właściwie od kiedy w wieku 3 lat dostała tamburyn na urodziny - tak więc występy publicznie, czy to muzyczne czy też recytatorskie lub konferansjerskie nie są jej obce. Ukończyła Szkołę Muzyczną im. ks. prof. Józefa Tischnera w Domosławicach w klasie gitary, jednak od zawsze to śpiew był na pierwszym miejscu pośród jej muzycznych zainteresowań. Nie zamyka się na jeden gatunek muzyczny, ale szczególne miejsce w jej sercu mają soul, jazz oraz r&b, co ma bezpośredni wpływ na naszą twórczość. Aby dać upust swojej artystycznej duszy, pisze wiersze i teksty, które niedługo będziecie mogli usłyszeć. Na co dzień jest dość zaczytana i zabiegana, ale taka już jej natura. Studiuje również prawo na Uniwersytecie Śląskim w Katowicach.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/Jowita.jpg`,
  },
  {
    name: "Dominik Depta",
    role: "Gitarzysta",
    description:
      "Mistrz riffów i rytmicznych partii! Gitarę trzyma lepiej niż pilota do telewizora, a jego granie potrafi sprawić, że nawet sąsiedzi zaczynają tańczyć. Zawsze w drodze do funkowej sławy, nawet jeśli czasem kończy na kanapie z Netflixem. W jego duszy gra przede wszystkim soul, funk, a nawet trochę jazzu, ale co ciekawe nie stroni również od mocniejszych brzmień! Zawodowo zajmuje się programowaniem, a nie tak dawno temu obronił tytuł magistra z informatyki.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/Dominik.jpg`,
  },
  {
    name: "Witek Palusiński",
    role: "Klawiszowiec",
    description:
      "Witek to gość z prawdziwą pasją do muzyki. Jego miłość do dobrego funku sprawia, że na każdej scenie zaraża publiczność pozytywną energią. Człowiek wielu talentów, nie tylko zachwyca swoją grą, ale również doskonale zna się na elektryce, co sprawia, że jest niezastąpiony zarówno w studio, jak i na koncertach. Uwielbia odkrywać nowe brzmienia, dlatego najpierw kupuje przeróżne dziwne instrumenty, a następnie uczy się na nich grać. Jest także miłośnikiem podróży, albowiem w wolnych chwilach zwiedza świat za pomogą Google Street View.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/Witek.jpg`,
  },
  // {
  //   name: "Dawid Karolewski",
  //   role: "Gitarzysta",
  //   description: "Tak, mamy ich dwóch! Dawid to specjalista od solówek i pasjonat aranżacji. Pochodzi z muzykalnej rodziny, więc zostanie gitarzystą było nieuniknione. Totalny samouk nie posiadający żadnych certyfikatów na wykonywanie tego zawodu, więc nie ręczy za swoje partie. Śpiewa również, ale tylko pod prysznicem i w aucie, przynajmniej póki co. Gdy nie spędza czasu na graniu, to dźwiga ciężary na siłce. Ponadto interesuje się psychologią. Zawodowo programista w cyberbezpieczeństwie dla zagranicznego start-up’u.",
  //   image: `${process.env.NEXT_PUBLIC_BASE_PATH}/Dawid.jpg`,
  // },
  {
    name: "Bartosz Papaj",
    role: "Perkusista",
    description:
      "Bartek. Zawodnik wagi ciężkiej, zagrał kilkaset koncertów, nagrał kilka płyt, widnieje w trzech encyklopediach. Prawdziwy profesjonalista. Bartek słynie ze swojego dynamicznego stylu gry i niezwykłej precyzji. Jego kreatywność w kreowaniu groove’u sprawia, że jest niezastąpionym członkiem naszego składu. Kocha gotować (miesza w garach i tłucze się po talerzach), ostatnio wystąpił w roli trenera w narożniku bokserskim. W pracy techniczny, a na próbach rytmiczny. W wolnych chwilach podróżuje.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/Bartek.jpg`,
  },
  {
    name: "Wiktor Waniowski",
    role: "Basista",
    description:
      "Wiktor. Miło mi Wam go przedstawić. Zapoznanie poprzez niskie dźwięki sprawi, że Wszystko będziecie o nim wiedzieć. Nie ufajcie, gdy mówi, że ani razu nie pomylił dźwięku. Lewituje w rytmie. Muzyczny samouk. Gdyby płacili za wyczucie rytmu, byłby milionerem jeszcze przed trzydziestką. Poza graniem na basie słucha muzyki, gra w tenisa, czyta książki, znów słucha muzyki i zastanawia się dlaczego kaczor Donald zakładał ręcznik po wyjściu z prysznica, mimo, że nigdy nie zakładał spodni. Jego nick na Instagramie na to nie wskazuje, ale uwielbia książki Franza Kafki.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/Wiktor.jpg`,
  },
  {
    name: "Łukasz Paduch",
    role: "Saksofonista",
    description:
      "Jak mawiał święty Łukasz... Saksofonu nie oszukasz. Choć w świecie świętego Łukasza jeszcze saksofonu nie było, tak świat naszego Łukasza bez saksofonu nie istnieje. Tenor i baryton to jego częstotliwości. Kocha naturę, święty spokój, sport i motocykle. Naukę gry zaczął w szkole średniej, w orkiestrze szkolnej. Słucha jazzu i uważa, że disco polo powinno zostać zdelegalizowane, a zioło zalegalizowane! Lubi ludzi ale nie tak bardzo jak czekoladę.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/Lukasz.jpg`,
  },
  // {
  //   name: "Szczepan Holeksa",
  //   role: "Puzonista",
  //   description:
  //     "Szczepan ukończył I i II stopień w szkole muzycznej im. Ignacego Paderewskiego w Cieszynie. Aktualnie kształci się na Akademii Muzycznej im. Karola Szymanowskiego w Katowicach. Interesuje się muzyką rozrywkową i grał już w swojej karierze w wielu składach. Poza muzyką uwielbia gotować, pić kawę, wędrować po górskich szlakach i śmigać na nartach!",
  //   image: `${process.env.NEXT_PUBLIC_BASE_PATH}/Szczepan.jpg`,
  // },
  // {
  //   name: "Alek Ostrowski",
  //   role: "Trębacz",
  //   description:
  //     "Wprawdzie studiował grę klasyczną, ale lubi też grać rozrywkę. Nie ogranicza się do jednego gatunku. Ma różne pomysły na sekcję detą w naszych kawałkach, czasem proponuje też nietypowe rozwiązania harmoniczne. Pije kawę hektolitrami. Lubi gotować, czytać i oglądać seriale. Nie jest na Ciebie zły, po prostu musi się skupić na grze i trafianiu wysokich dźwięków.",
  //   image: `${process.env.NEXT_PUBLIC_BASE_PATH}/Alek.jpg`,
  // },
];

export default function Members() {
  return (
    <section id="members">
      {members.map((member, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
        const isOdd = index % 2 === 0;

        return (
          <div
            key={member.name}
            className={`relative flex flex-col items-center justify-between w-full mt-16 mx-auto max-w-[130rem] lg:mt-40 lg:flex-row ${isOdd ? "lg:flex-row-reverse" : ""} gap-8 lg:gap-32 px-8 lg:px-16`}
          >
            <Container customClasses="lg:w-1/2">
              <div
                ref={ref}
                className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
                style={{
                  transform: isInView ? "none" : "translateX(-100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <div className="overflow-hidden">
                  <h2
                    className={`font-bold text-5xl pb-6 translate-y-20 ${isInView ? "animate-slideUp" : ""}`}
                  >
                    {member.name}
                  </h2>
                </div>
                <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-justify">
                  <b>{member.role}.</b> {member.description}
                </p>
              </div>
            </Container>
            <div className="lg:w-1/2 flex justify-center">
              <Image
                className="w-2/3 max-w-[500px] h-auto object-cover lg:max-w-sm xl:max-w-md rounded-lg"
                src={member.image}
                width={500}
                height={500}
                alt={`${member.name} photo`}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
