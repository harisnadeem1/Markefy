import React from "react";

const ComingSoonSection = () => {
  return (
    <section
      className="w-[calc(100%-2rem)] sm:w-[calc(100%-2rem)] lg:w-[calc(100%-4rem)] mx-auto my-12 sm:my-12 lg:my-12 py-12 sm:py-12 px-4 sm:px-8 bg-[#0071bc] text-center rounded-lg"
      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-3xl font-bold text-white mb-4">
        More coming soon!
      </h2>

      {/* Subtext */}
      <p className="text-white mb-2 text-lg md:text-lg">
        Be sure to check back as we are constantly working to add new sections
        to our collection.
      </p>
      <p className="text-white mb-10 text-lg md:text-lg">
        Signup below to receive updates from us AND get{" "}
        <span className="font-bold">15% off</span> your first order.
      </p>

      {/* Email Input + Button */}
      <form
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
       <input
  type="email"
  placeholder="Enter email"
  className="min-w-[250px] sm:min-w-[280px] flex-1 bg-transparent border-0 border-b-2 border-white px-2 py-2 text-white placeholder-white focus:outline-none focus:border-white"
  style={{ fontFamily: "'Inconsolata', monospace" }}
/>


        <button
          type="submit"
          className="px-6 py-3 bg-white text-[#0071bc] font-bold tracking-wide text-sm uppercase"
          style={{ fontFamily: "'Inconsolata', monospace" }}
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default ComingSoonSection;
