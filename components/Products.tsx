export default function Products() {
  const products = [
    {
      name: "Surf Lesson",
      price: "$80",
      img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f",
    },
    {
      name: "Surf Camp",
      price: "$250",
      img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    },
    {
      name: "Surf Trip",
      price: "$180",
      img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    },
    {
      name: "Board Rental",
      price: "$30",
      img: "https://images.unsplash.com/photo-1526406915894-6e0c4b0b8a5c",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-16 bg-[#0f4f4f]">

      <div className="mb-16 text-center">
        <p className="text-xs tracking-widest text-gray-400">OUR PRODUCTS</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Surf Experiences
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((p, i) => (
          <div key={i} className="group">

            <div className="overflow-hidden rounded-xl">
              <img
                src={p.img}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="mt-4 flex justify-between items-center">
              <h3 className="font-semibold">{p.name}</h3>
              <span className="text-gray-300">{p.price}</span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}