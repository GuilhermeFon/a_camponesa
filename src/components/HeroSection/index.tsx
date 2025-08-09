import {Button} from "@/src/components/ui/button";
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[95vh] flex items-center justify-center mt-10"
    >
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto self-end mb-20 lg:mb-10">
        <h1 className="text-5xl md:text-7xl font-dancing-script mb-6">
          A Camponesa
        </h1>
        <p className="text-xl md:text-3xl mb-8 font-light">
          Confeitaria Artesanal
        </p>
      </div>
    </section>
  );
}
