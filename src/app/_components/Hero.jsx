const Hero = () => {
  return (
    <section className="bg-white text-black min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Find Your <span className="underline decoration-black decoration-4">Dream Home</span> Today
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
          Explore the best properties on the market with ease. Your perfect home is just a few clicks away.
        </p>
        <form className="flex flex-col md:flex-row items-center max-w-xl mx-auto md:mx-0 gap-4">
          <input
            type="text"
            placeholder="Search by city, neighborhood, or address"
            className="w-full md:flex-1 border border-black rounded px-4 py-3 text-black placeholder-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
