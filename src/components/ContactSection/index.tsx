import {Phone, MapPin} from "lucide-react";
import {Card, CardContent} from "@/src/components/ui/card";
import InstagramIcon from "@/src/assets/instagram.svg";
import WhatsAppIcon from "@/src/assets/whatsapp.svg";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-dancing-script text-camponesa-rose mb-4">
            Explore Nossos Sabores
          </h2>
          <p className="text-xl text-gray-700">
            O sabor da infância em cada pedaço
          </p>
        </div>

        <Card className="bg-white shadow-lg border-camponesa-lavanda">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row md:justify-between gap-12">
              <div className="w-full md:max-w-lg">
                <h3 className="text-2xl font-semibold text-camponesa-rose mb-6">
                  Entre em Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin
                      className="text-camponesa-terracota mt-1"
                      size={20}
                    />
                    <div>
                      <p className="text-gray-600 font-semibold">Endereço</p>
                      <p className="text-gray-600">
                        Curitiba - PR
                        <br />
                        Capão Raso
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone
                      className="text-camponesa-terracota mt-1"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold text-gray-600">Telefone</p>
                      <p className="text-gray-600">(41) 98460-2341</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center gap-4">
                      <a
                        href="https://wa.me/5541984602341"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="text-camponesa-terracota hover:text-camponesa-rose transition-colors"
                      >
                        <WhatsAppIcon size={20} />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-camponesa-terracota hover:text-camponesa-rose transition-colors"
                      >
                        <InstagramIcon size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:max-w-lg">
                <div className="w-fit place-items-center">
                  <h3 className="text-2xl font-semibold text-camponesa-rose mb-6">
                    Funcionamento
                  </h3>
                  <div className="flex flex-col items-start space-y-4">
                    <div className="text-center">
                      <p className="text-gray-600 font-semibold">
                        Segunda - Sexta
                      </p>
                      <p className="text-gray-600">8am - 11pm</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 font-semibold">
                        Sabádo - Domingo
                      </p>
                      <p className="text-gray-600">11am - 11pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
