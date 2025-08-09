"use client";

import {Menu, X} from "lucide-react";
import {Button} from "@/src/components/ui/button";
import Image from "next/image";
import {useState} from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#471815] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="A Camponesa Logo"
              width={60}
              height={53}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-camponesa-creme hover:text-camponesa-rose-dark font-semibold transition-colors"
              >
                Inicio
              </a>
              <a
                href="#about"
                className="text-camponesa-creme hover:text-camponesa-rose-dark font-semibold transition-colors"
              >
                Sobre
              </a>
              <a
                href="#products"
                className="text-camponesa-creme hover:text-camponesa-rose-dark font-semibold transition-colors"
              >
                Produtos
              </a>
              <a
                href="#gallery"
                className="text-camponesa-creme hover:text-camponesa-rose-dark font-semibold transition-colors"
              >
                Galeria
              </a>
              <a
                href="#contact"
                className="text-camponesa-creme hover:text-camponesa-rose-dark font-semibold transition-colors"
              >
                Contato
              </a>
              {/* <Button className="bg-camponesa-terracota hover:bg-camponesa-terracota-dark text-white">
                Pedir Agora
              </Button> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-camponesa-creme hover:text-camponesa-rose-dark font-semibold"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-camponesa-creme hover:text-camponesa-rose-dark font-semibold"
            >
              Inicio
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-camponesa-creme hover:text-camponesa-rose-dark font-semibold"
            >
              Sobre
            </a>
            <a
              href="#products"
              className="block px-3 py-2 text-camponesa-creme hover:text-camponesa-rose-dark font-semibold"
            >
              Produtos
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 text-camponesa-creme hover:text-camponesa-rose-dark font-semibold"
            >
              Galeria
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-camponesa-creme hover:text-camponesa-rose-dark font-semibold"
            >
              Contato
            </a>
            {/* <div className="px-3 py-2">
              <Button className="w-full bg-camponesa-terracota hover:bg-camponesa-terracota-dark text-white">
                Pedir Agora
              </Button>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
}
