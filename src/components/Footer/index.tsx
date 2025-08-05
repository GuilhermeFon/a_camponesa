import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-camponesa-musgo text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-dancing-script mb-4">A Camponesa</h3>
            <p className="text-camponesa-creme mb-4 max-w-md">
              Your neighborhood artisanal bakery, committed to bringing you
              the finest traditional baked goods made with love and expertise.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-camponesa-creme hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-camponesa-creme hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-camponesa-creme hover:text-white transition-colors"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-camponesa-creme">
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
            <div className="text-camponesa-creme space-y-1">
              <p>Monday - Friday</p>
              <p className="font-medium">6:00 AM - 7:00 PM</p>
              <p className="mt-2">Saturday - Sunday</p>
              <p className="font-medium">7:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-camponesa-musgo-light mt-8 pt-8 text-center text-camponesa-creme">
          <p>
            &copy; 2024 A Camponesa Bakery. All rights reserved. | Artisanal
            breads, traditional pastries, homemade sweets
          </p>
        </div>
      </div>
    </footer>
  );
}
