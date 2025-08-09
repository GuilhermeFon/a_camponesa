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
              A Camponesa nasceu do sonho de uma moça do interior que trouxe para
              a cidade grande não apenas receitas, mas o afeto e as memórias da 
              cozinha de sua avó. 
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Acreditamos que um doce tem o poder de transportar você para os 
              momentos mais felizes. Lembra daquele cheirinho de bolo saindo do 
              forno que trazia um conforto imediato? É exatamente essa sensação 
              que colocamos em tudo o que fazemos. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mais do que bolos e doces, criamos experiências. Cada ingrediente é 
              selecionado com cuidado e cada receita é feita com o carinho de 
              antigamente, para que você receba em sua casa um pedaço de afeto, 
              com sabor de memória.
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
