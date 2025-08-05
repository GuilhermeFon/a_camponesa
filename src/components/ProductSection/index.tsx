import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";

const products = [
  {
    name: "Artisan Sourdough",
    description:
      "Traditional sourdough bread with a perfect crust and tender crumb",
    image:
      "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Homemade Apple Pie",
    description:
      "Classic apple pie made with fresh apples and grandmother's recipe",
    image:
      "https://images.pexels.com/photos/7937035/pexels-photo-7937035.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Fresh Croissants",
    description: "Buttery, flaky croissants baked fresh every morning",
    image:
      "https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Chocolate Chip Cookies",
    description: "Soft, chewy cookies loaded with premium chocolate chips",
    image:
      "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Rustic Country Bread",
    description: "Dense, hearty bread perfect for sandwiches or with butter",
    image:
      "https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Seasonal Fruit Tarts",
    description:
      "Delicate pastry filled with fresh seasonal fruits and cream",
    image:
      "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-dancing-script text-camponesa-rose mb-4">
            Our Specialties
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Each product is lovingly crafted using traditional methods and the
            finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-camponesa-lavanda"
            >
              <div className="aspect-w-16 aspect-h-12">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  width={800}
                  height={600}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-camponesa-rose mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button className="w-full bg-camponesa-terracota hover:bg-camponesa-terracota-dark text-white">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
