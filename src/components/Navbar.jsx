export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between p-6 z-50 bg-black/40 backdrop-blur">

      <h1 className="text-xl font-bold">Dubai Mall</h1>

      <div className="space-x-6 text-sm">

        <a href="#why" className="hover:text-gray-300">Why</a>
        <a href="#retail" className="hover:text-gray-300">Retail</a>
        <a href="#luxury" className="hover:text-gray-300">Luxury</a>
        <a href="#events" className="hover:text-gray-300">Events</a>
        <a href="#contact">Contact</a>

      </div>

    </div>
  );
}