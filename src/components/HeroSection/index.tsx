import { Button } from "@/src/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-dancing-script mb-6">
          A Camponesa
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Bringing the taste of home to your table
        </p>
        <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          Experience the warmth of traditional baking with our handcrafted
          breads, pastries, and sweets made from time-honored family recipes
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button
            size="lg"
            className="bg-camponesa-terracota hover:bg-camponesa-terracota-dark text-white px-8 py-3 text-lg"
          >
            See Our Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-camponesa-rose px-8 py-3 text-lg"
          >
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}
