"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle 
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";

export default function ContactSection() {
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
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-dancing-script text-camponesa-rose mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700">
            Wed love to hear from you and help with your bakery needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-lg border-camponesa-lavanda">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-camponesa-rose mb-6">
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
                      setFormData({ ...formData, name: e.target.value })
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
                      setFormData({ ...formData, email: e.target.value })
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
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-camponesa-terracota hover:bg-camponesa-terracota-dark text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white shadow-lg border-camponesa-lavanda">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-camponesa-rose mb-6">
                  Visit Our Bakery
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-camponesa-terracota mt-1" size={20} />
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
                    <Phone className="text-camponesa-terracota mt-1" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="text-camponesa-terracota mt-1" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">hello@acamponesa.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="text-camponesa-terracota mt-1" size={20} />
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

            <Card className="bg-camponesa-musgo text-white shadow-lg">
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
  );
}
