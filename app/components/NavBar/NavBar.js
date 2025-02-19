"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  if (!hasMounted) return null;

  return (
    <nav
      className={`fixed top-6 md:top-4 z-50 flex items-center justify-center px-6 py-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-lg bg-blue-950/80 border border-gray-200 ${
        isScrolled ? "left-1/2 transform -translate-x-1/2 w-[60%] max-w-2xl" : "left-[36%] transform -translate-x-0 w-[50%] max-w-3xl"
      }`}
    >
      <div className="hidden md:flex gap-6 text-white font-medium text-lg">
        <NavItem to="about" label="O nas" />
        <NavItem to="members" label="Skład zespołu" />
        <NavItem to="gallery" label="Galeria" />
        <NavItem to="contact" label="Kontakt" />
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className='text-white'/> : <Menu size={28} className='text-white'/>}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm bg-white shadow-md flex flex-col items-center justify-center py-4 space-y-4 text-center md:hidden rounded-lg">
          <NavItem to="about" label="O nas" onClick={() => setIsOpen(false)} />
          <NavItem to="members" label="Skład zespołu" onClick={() => setIsOpen(false)} />
          <NavItem to="gallery" label="Galeria" onClick={() => setIsOpen(false)} />
          <NavItem to="contact" label="Kontakt" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
}

function NavItem({ to, label, onClick }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="cursor-pointer hover:text-black transition"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
