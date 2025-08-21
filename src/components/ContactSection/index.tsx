import {Phone, MapPin, MessageCircle} from "lucide-react";
import {Card, CardContent} from "@/src/components/ui/card";
import InstagramIcon from "@/src/assets/instagram.svg";
import WhatsappIcon from "@/src/assets/whatsapp.svg";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-10 md:py-24 relative bg-white"
      style={{
        backgroundImage: "url(/footer-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-dancing-script text-camponesa-creme mb-4">
            Explore Nossos Sabores
          </h2>
          <p className="text-xl text-camponesa-creme">
            O sabor da infância em cada pedaço
          </p>
        </div>

        <div className="bg-transparent shadow-none border-none mb-14 sm:mb-0 flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-32">
          <div className="w-fit place-items-center flex flex-col space-y-4 items-center">
            <h3 className="text-2xl font-semibold text-camponesa-creme">
              Funcionamento
            </h3>
            <div className="text-center">
              <p className="text-camponesa-creme font-semibold">
                Segunda - Sexta
              </p>
              <p className="text-camponesa-creme">8:00 - 18:00</p>
            </div>
            <div className="text-center">
              <p className="text-camponesa-creme font-semibold">Sabádo</p>
              <p className="text-camponesa-creme">8:00 - 12:00</p>
            </div>
          </div>

          <div className="w-fit space-y-4">
            <h3 className="text-2xl font-semibold text-camponesa-creme">
              Entre em Contato
            </h3>

            <div className="flex items-start space-x-3">
              <a
                href="https://share.google/ZRTSwo5x9uQzlISvw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-camponesa-creme hover:text-camponesa-terracota transition-colors"
              >
                <MapPin className="text-camponesa-terracota mt-1" size={20} />
              </a>
              <div>
                <a
                  href="https://share.google/ZRTSwo5x9uQzlISvw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-camponesa-creme hover:text-camponesa-terracota transition-colors"
                >
                  <p className="text-camponesa-creme font-semibold">Endereço</p>
                  <p className="text-camponesa-creme">
                    Capão Raso, Curitiba - PR
                  </p>
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <a
                href="https://wa.me/5541984602341?text=Olá! Gostaria de saber mais sobre os produtos da Camponesa."
                target="_blank"
                rel="noopener noreferrer"
                className="text-camponesa-creme hover:text-camponesa-terracota transition-colors"
              >
                <Phone className="text-camponesa-terracota mt-1" size={20} />
              </a>
              <div>
                <a
                  href="https://wa.me/5541984602341?text=Olá! Gostaria de saber mais sobre os produtos da Camponesa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-camponesa-creme hover:text-camponesa-terracota transition-colors"
                >
                  <p className="font-semibold text-camponesa-creme">Telefone</p>
                  <p>(41) 98460-2341</p>
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <a
                href="https://www.instagram.com/acamponesaconfeitaria/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-camponesa-terracota hover:text-camponesa-creme transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/acamponesaconfeitaria/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-camponesa-terracota hover:text-camponesa-creme transition-colors"
              >
                <p className="font-semibold text-camponesa-creme">Instagram</p>
                <p className="text-camponesa-creme">@acamponesaconfeitaria</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white px-4 w-full">
        <div className="text-sm sm:text-sm text-camponesa-creme text-center flex flex-col sm:block">
          <span>© 2025 A Camponesa | Todos os direitos reservados</span>
          <span className="hidden sm:inline-block mx-2">|</span>
          <span>
            Desenvolvido por{" "}
            <a
              href="https://studiosilo.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-camponesa-creme font-semibold transition-colors duration-200"
            >
              SILO
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
