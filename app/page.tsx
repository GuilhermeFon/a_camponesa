"use client";

import {useState} from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({name: "", email: "", message: ""});
  };

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

  const galleryImages = [
    "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-amber-900 font-dancing-script">
                A Camponesa
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-amber-900 hover:text-amber-700 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-amber-900 hover:text-amber-700 transition-colors"
                >
                  About
                </a>
                <a
                  href="#products"
                  className="text-amber-900 hover:text-amber-700 transition-colors"
                >
                  Products
                </a>
                <a
                  href="#gallery"
                  className="text-amber-900 hover:text-amber-700 transition-colors"
                >
                  Gallery
                </a>
                <a
                  href="#contact"
                  className="text-amber-900 hover:text-amber-700 transition-colors"
                >
                  Contact
                </a>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  Order Now
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-amber-900 hover:text-amber-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-amber-900 hover:text-amber-700"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-amber-900 hover:text-amber-700"
              >
                About
              </a>
              <a
                href="#products"
                className="block px-3 py-2 text-amber-900 hover:text-amber-700"
              >
                Products
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-amber-900 hover:text-amber-700"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-amber-900 hover:text-amber-700"
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
            >
              See Our Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 text-lg"
            >
              Order Now
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-dancing-script text-amber-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A Camponesa was born from a love of traditional baking and the
                desire to bring authentic, homemade flavors to our community.
                Our story begins in the countryside, where generations of bakers
                perfected recipes that have been passed down through families.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every morning, we wake before dawn to knead dough, shape loaves,
                and fill our ovens with the aromatic promise of fresh bread. We
                use only the finest ingredients, sourced locally when possible,
                and never compromise on quality or tradition.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When you step into our bakery, you not just buying bread –
                you becoming part of our extended family, sharing in the
                comfort and joy that comes from food made with love.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Baker kneading dough in traditional kitchen"
                className="rounded-lg shadow-xl w-full h-auto"
                width={800}
                height={600}
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-100 p-6 rounded-lg shadow-lg">
                <p className="text-amber-900 font-semibold text-lg">
                  Est. 1985
                </p>
                <p className="text-amber-700">40+ Years of Tradition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-dancing-script text-amber-900 mb-4">
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
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
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
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-dancing-script text-amber-900 mb-4">
              Gallery
            </h2>
            <p className="text-xl text-gray-700">
              A glimpse into our bakery and the magic we create daily
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-dancing-script text-amber-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-700">
              Wed love to hear from you and help with your bakery needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-amber-900 mb-6">
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({...formData, name: e.target.value})
                      }
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({...formData, email: e.target.value})
                      }
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({...formData, message: e.target.value})
                      }
                      required
                      rows={4}
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-amber-900 mb-6">
                    Visit Our Bakery
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-amber-600 mt-1" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">
                          123 Countryside Lane
                          <br />
                          Bakery Village, BV 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="text-amber-600 mt-1" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="text-amber-600 mt-1" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">hello@acamponesa.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="text-amber-600 mt-1" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">
                          Opening Hours
                        </p>
                        <p className="text-gray-600">
                          Mon-Fri: 6:00 AM - 7:00 PM
                          <br />
                          Sat-Sun: 7:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-600 text-white shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-4">
                    Order via WhatsApp
                  </h3>
                  <p className="mb-6">
                    Get your fresh baked goods delivered or ready for pickup
                  </p>
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    <MessageCircle className="mr-2" size={20} />
                    WhatsApp Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-amber-900 text-white">
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
              className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 text-lg"
            >
              Place Your Order
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 text-lg"
            >
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-dancing-script mb-4">A Camponesa</h3>
              <p className="text-amber-100 mb-4 max-w-md">
                Your neighborhood artisanal bakery, committed to bringing you
                the finest traditional baked goods made with love and expertise.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-amber-100">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
              <div className="text-amber-100 space-y-1">
                <p>Monday - Friday</p>
                <p className="font-medium">6:00 AM - 7:00 PM</p>
                <p className="mt-2">Saturday - Sunday</p>
                <p className="font-medium">7:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>
              &copy; 2024 A Camponesa Bakery. All rights reserved. | Artisanal
              breads, traditional pastries, homemade sweets
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
