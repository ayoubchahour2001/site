export default function Newsletter() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">JOIN THE MOVEMENT</h2>
          <p className="text-gray-400 mb-8">
            Get exclusive drops, limited editions, and behind-the-scenes content straight to your inbox.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-3 hover:bg-red-700 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}