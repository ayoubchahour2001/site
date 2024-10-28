export default function Categories() {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative h-[400px] group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Matchday"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">MATCHDAY</h3>
              <button className="text-white border-b-2 border-red-600 pb-1 hover:text-red-500 transition-colors">
                Explore Collection
              </button>
            </div>
          </div>
          
          <div className="relative h-[400px] group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Street"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">STREET</h3>
              <button className="text-white border-b-2 border-red-600 pb-1 hover:text-red-500 transition-colors">
                Explore Collection
              </button>
            </div>
          </div>
          
          <div className="relative h-[400px] group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Ultras"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">ULTRAS</h3>
              <button className="text-white border-b-2 border-red-600 pb-1 hover:text-red-500 transition-colors">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}