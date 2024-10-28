import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'ULTRA BOMBER JACKET',
    price: 199,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80'
  },
  {
    id: 2,
    name: 'PYRO HOODIE',
    price: 89,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80'
  },
  {
    id: 3,
    name: 'TERRACE CREW',
    price: 79,
    image: 'https://images.unsplash.com/photo-1626948683848-1e505e91c06b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1005&q=80'
  },
  {
    id: 4,
    name: 'AWAY DAYS TEE',
    price: 49,
    image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1033&q=80'
  },
];

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">LIMITED DROPS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`} />
                <button
                  className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-2 transform transition-all duration-300 ${
                    hoveredId === product.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  ADD TO CART
                </button>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-white">{product.name}</h3>
                <p className="text-red-500">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}