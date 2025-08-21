import Image from "next/image";
import Pascoa01Image from "@/public/collections/Pascoa01.png";
import Pascoa02Image from "@/public/collections/Pascoa02.png";
import Natal01Image from "@/public/collections/Natal01.png";
import Natal02Image from "@/public/collections/Natal02.png";
import Namorados01Image from "@/public/collections/Namorados01.png";
import Namorados02Image from "@/public/collections/Namorados02.png";
import Button from "@/src/components/Button";

const galleryImages = [
  Pascoa01Image,
  Natal01Image,
  Namorados01Image,
  Pascoa02Image,
  Natal02Image,
  Namorados02Image,
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-camponesa-creme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-dancing-script text-[#582B26] mb-6">
            Coleções
          </h2>
          <p className="text-xl text-gray-700">
            "Para cada ocasião especial, uma coleção exclusiva de sabores feitos
            para encantar."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={image}
                alt={`Bakery gallery image ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                width={800}
                height={600}
              />
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center items-center space-x-3">
          <a
            href="https://wa.me/5541984602341?text=Olá! Gostaria de saber mais sobre os produtos da Camponesa."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#582B26] hover:bg-[#471815] text-white font-semibold transition-colors px-4 mt-4 w-96 h-16 text-2xl text-center content-center rounded-md"
          >
            Quero algo especial
          </a>
        </div>
      </div>
    </section>
  );
}
