import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-900" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <div className="mb-8 inline-block">
              <span className="bg-red-600 text-white px-4 py-1 text-sm font-medium">NEW COLLECTION</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              STAND
              <br />
              <span className="text-red-600">TOGETHER</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Authentic streetwear for the real supporters. Made by ultras, for ultras.
            </p>
            <button className="group bg-red-600 text-white px-8 py-4 rounded-none font-medium flex items-center space-x-2 hover:bg-white hover:text-black transition-all duration-300">
              <span>SHOP NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}