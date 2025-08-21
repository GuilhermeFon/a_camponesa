import Image from "next/image";
import {Button} from "@/src/components/ui/button";
import {Card, CardContent} from "@/src/components/ui/card";
import BrowniesImage from "@/public/products/Brownies.png";
import BoloTradicionalImage from "@/public/products/BoloTradicional.png";
import AlfajoresImage from "@/public/products/Alfajores.png";
import ChocolateQuenteImage from "@/public/products/ChocolateQuente.png";


  const products = [
  {
    name: "Brownies",
    description:
      "Perfeitamente denso e fudgy por dentro, com uma casquinha crocante e irresistível por fora.",
    image:
      BrowniesImage,
  },
  {
    name: "Bolos Tradicionais",
    description:
      "Bolos com gostinho de infância, feitos com ingredientes selecionados e muito carinho para o seu dia a dia.",
    image:
      BoloTradicionalImage,
  },
  {
    name: "Bolos Gourmet",
    description: "Cada bolo criado com combinações de sabores e texturas inesquecíveis",
    image:
      "https://images.pexels.com/photos/18613264/pexels-photo-18613264.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Cookies Artesanais",
    description: "Biscoitos recheados com generosas gotas de chocolate de alta qualidade.",
    image:
      "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Alfajores",
    description: "Biscoitos leves e amanteigados, unidos por uma camada generosa de doce de leite cremoso e banhados em chocolate.",
    image:
      AlfajoresImage,
  },
  {
    name: "Chocolate Quente Cremoso",
    description: "Feita com chocolate nobre derretido, resultando em uma textura aveludada e um sabor incomparável.",
    image:
      ChocolateQuenteImage,
  }
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 md:py-24 bg-[#582B26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-dancing-script text-camponesa-creme mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-xl text-camponesa-creme-light max-w-3xl mx-auto">
            "Cada producto é feito com carinho, utilizando métodos tradicionais e os melhores ingredientes."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-camponesa-creme-dark shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-camponesa-lavanda"
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
                <h3 className="text-xl font-semibold text-[#582B26] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
