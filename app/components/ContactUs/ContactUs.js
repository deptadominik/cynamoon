"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import ContactForm from "@/app/global-components/ContactForm/ContactForm";

export default function ContactUs() {
	const textRef = useRef(null);
	const isInView = useInView(textRef, { once: true });

	return (
		<section
			id="contacts"
			className={`relative flex flex-col-reverse items-center w-full mt-16 mx-auto max-w-[150rem] lg:mt-56 lg:flex-row`}>
			<Image
				className="mt-5 max-h-96 object-cover lg:mt-0 lg:max-h-none lg:max-w-lg lg:block xl:max-w-xl rounded-lg ml-4 lg:ml-12 xl:ml-16"
				src={`${process.env.NEXT_PUBLIC_BASE_PATH}/P1022275-2.jpg`}
				width={450}
				height={233}
				alt="Cynamoon group photo"
			/>
			<Container customClasses="flex flex-col overflow-hidden lg:items-end lg:justify-end lg:absolute lg:left-1/2 lg:-translate-x-1/2 px-4 lg:px-12 xl:px-16">
				<div
					className="flex justify-end flex-col lg:items-end lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
					ref={textRef}
					style={{
						transform: isInView ? "none" : "translateX(100px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}>
					<div className="flex flex-col max-w-4xl lg:text-center">
						<div className="overflow-hidden">
							<h2
								className={`font-bold text-4xl pb-6 translate-y-24 ${
									isInView ? "animate-slideUp" : ""
								}`}>
								Kontakt
							</h2>
						</div>
						<p className="text-justify text-2xl">
							Chcesz nasz koncert w swoim lokalu? Wypełnij poniższy formularz lub wyślij bezpośrednio maila na:{" "}
							<br></br>
							<a
								className="text-blue-800 underline underline-offset-4 hover:text-yellow-600"
								href="https://www.paninopanini.co.uk/"
								target="_blank"
								rel="noreferrer">
								{" "}
								cynamoon.band@gmail.com{" "}
							</a>{" "}
						</p>
					</div>
					<ContactForm/>
				</div>
			</Container>
		</section>
	);
}
