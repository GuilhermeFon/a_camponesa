import Image from "next/image";
import AboutImage from "@/public/about.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-camponesa-creme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-dancing-script text-[#582B26] mb-6">
              Nossa História
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A Camponesa was born from a love of traditional baking and the
              desire to bring authentic, homemade flavors to our community. Our
              story begins in the countryside, where generations of bakers
              perfected recipes that have been passed down through families.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Every morning, we wake before dawn to knead dough, shape loaves,
              and fill our ovens with the aromatic promise of fresh bread. We
              use only the finest ingredients, sourced locally when possible,
              and never compromise on quality or tradition.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When you step into our bakery, you not just buying bread – you
              becoming part of our extended family, sharing in the comfort and
              joy that comes from food made with love.
            </p>
          </div>
          <div className="relative">
            <Image
              src={AboutImage}
              alt="Bolos e Doces sobre a mesa em um lugar aconchegante"
              className="rounded-lg w-full h-auto"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
