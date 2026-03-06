export default function Footer() {
  return (
    <footer className="bg-[#082c2c] px-6 lg:px-16 py-16 text-sm text-gray-300">

      <div className="grid md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-white font-bold text-lg mb-4">SUMMER</h3>
          <p>
            Surf lessons, trips, and camps for beginners and wave chasers.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>

          <ul className="space-y-2">
            <li>Home</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <ul className="space-y-2">
            <li>Andalusia, Spain</li>
            <li>+1 840 841 25 69</li>
            <li>info@email.com</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs">
        © 2025 Summer Surf School
      </div>

    </footer>
  );
}