export default function MapSection() {
  return (
    <section className="py-24 px-6 lg:px-16 bg-[#0c3f3f]">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-xs tracking-widest text-gray-400">
            LOCATION
          </p>

          <h2 className="text-4xl font-bold mt-3 mb-6">
            Visit Our Surf Spot
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Our surf school is located in the beautiful coast of Andalusia.
            Perfect waves, warm weather, and a great community of surfers.
          </p>

          <div className="mt-6 text-sm text-gray-200">
            <p>Andalusia, Spain</p>
            <p>+1 840 841 25 69</p>
            <p>info@email.com</p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden h-[400px]">

          <iframe
            src="https://maps.google.com/maps?q=andalusia%20spain&t=&z=6&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />

        </div>

      </div>

    </section>
  );
}