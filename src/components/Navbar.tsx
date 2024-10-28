import { ShoppingBag, Menu, Search, User, X, Flame } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 border-b border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="hidden sm:flex space-x-8">
              <a href="#new" className="text-white hover:text-red-500 transition">Matchday</a>
              <a href="#men" className="text-white hover:text-red-500 transition">Street</a>
              <a href="#women" className="text-white hover:text-red-500 transition">Ultras</a>
              <a href="#sale" className="text-red-500 hover:text-red-400 transition">Limited</a>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-2xl font-bold text-white">
            <Flame className="w-6 h-6 text-red-500" />
            <span>ULTRAS</span>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer text-white hover:text-red-500 transition" />
            <User className="w-5 h-5 cursor-pointer text-white hover:text-red-500 transition" />
            <div className="relative">
              <ShoppingBag className="w-5 h-5 cursor-pointer text-white hover:text-red-500 transition" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90">
          <a href="#new" className="block px-3 py-2 text-white hover:bg-red-600/20 rounded-md">Matchday</a>
          <a href="#men" className="block px-3 py-2 text-white hover:bg-red-600/20 rounded-md">Street</a>
          <a href="#women" className="block px-3 py-2 text-white hover:bg-red-600/20 rounded-md">Ultras</a>
          <a href="#sale" className="block px-3 py-2 text-red-500 hover:bg-red-600/20 rounded-md">Limited</a>
        </div>
      </div>
    </nav>
  );
}