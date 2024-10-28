import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Newsletter from './components/Newsletter';
import Categories from './components/Categories';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
    </div>
  );
}

export default App;