import { Button } from "@/src/components/ui/button";

export default function CallToActionSection() {
  return (
    <section className="py-16 md:py-24 bg-camponesa-rose text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-dancing-script mb-6">
          Order Your Homemade Delight Now
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Dont wait – our fresh baked goods are available for order today.
          Experience the difference that traditional baking makes.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button
            size="lg"
            className="bg-camponesa-terracota hover:bg-camponesa-terracota-dark text-white px-8 py-3 text-lg"
          >
            Place Your Order
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-camponesa-rose px-8 py-3 text-lg"
          >
            Call Now: (555) 123-4567
          </Button>
        </div>
      </div>
    </section>
  );
}
