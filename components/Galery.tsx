export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  ]

  return (
    <section className="bg-[#0f4f4f] py-20 px-6 lg:px-16">

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">

        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl break-inside-avoid">
            <img
              src={img}
              className="w-full h-auto object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}

      </div>

    </section>
  )
}