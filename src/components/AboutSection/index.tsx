import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-dancing-script text-camponesa-rose mb-6">
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
            <div className="absolute -bottom-6 -right-6 bg-camponesa-creme-light p-6 rounded-lg shadow-lg border border-camponesa-lavanda">
              <p className="text-camponesa-rose font-semibold text-lg">
                Est. 1985
              </p>
              <p className="text-camponesa-rose-dark">40+ Years of Tradition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
