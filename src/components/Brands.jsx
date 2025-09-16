import brandLogos from "../assets/logos.jpg";

export default function Brands() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 uppercase tracking-wide">
          COLLABORATED BRANDS
        </h3>

        <div className="flex justify-center">
          <div className="bg-white rounded-xs overflow-hidden max-w-5xl w-full">
            <img
              src={brandLogos}
              alt="Collaborated Brands"
              className="w-full h-auto  p-8 md:p-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
