import React, { useState, useRef, useEffect } from "react";

const ShopAboutPage = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  // Intersection Observer for lazy loading video
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
            // Add a small delay before starting video to ensure smooth rendering
            setTimeout(() => {
              setShouldPlayVideo(true);
            }, 100);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading slightly before the element comes into view
        threshold: 0.1
      }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle video loading and playback
  useEffect(() => {
    if (videoRef.current && shouldPlayVideo) {
      const video = videoRef.current;
      
      // Preload metadata first
      video.preload = 'metadata';
      
      const handleCanPlay = () => {
        video.play().catch(console.error);
      };
      
      video.addEventListener('canplay', handleCanPlay);
      
      return () => video.removeEventListener('canplay', handleCanPlay);
    }
  }, [shouldPlayVideo]);

  return (
    <div className="font-sans">
      {/* ---------- HERO SECTION ---------- */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Content */}
        <div
          className="flex flex-col justify-center px-12 py-16 text-white"
          style={{ backgroundColor: "#0071bc" }}
        >
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            We're Markefy, Shopify experts creating unique experiences
          </h1>
          <p className="text-lg opacity-90">
            Don't limit yourself to what your theme provided, you can now make it
            more unique.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full h-full">
          <img
            src="/shop/about/hero.webp"
            alt="About Markefy"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* ---------- WHY MARKEFY SECTIONS ---------- */}
      <section className="w-[80%] mx-auto py-16">
        <h2
          className="text-3xl font-bold mb-6"
          style={{ color: "#0071bc" }}
        >
          Why Markefy sections?
        </h2>

        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Setting up a custom shop with Shopify is meant to be so easy and quick.
        </p>

        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Just create a Shopify account, choose a theme to install, and start adding your products and other content.{" "}
          <em>Voilà</em>, your storefront is ready for customers!
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          But more often than not, you run into a problem. Even though Shopify is a
          fantastic e-commerce platform, the themes available to choose from have a
          variety of content blocks to add to your site, but each theme is
          different. And if there's no option to add a certain layout or a
          particular functionality that your store needs, you might be forced into{" "}
         finding a workaround via a
          third-party app or custom code developed just for you. And both solutions
          come at a high cost.
        </p>
      </section>

      {/* ---------- INTEGRATION vs CUSTOM CODE (VIDEO) ---------- */}
      <section className="w-[80%] mx-auto py-16 grid grid-cols-1 md:grid-cols-[70%_30%] gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "#0071bc" }}
          >
            Integrating apps
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Shopify offers integrations with hundreds of apps designed to fill in
            missing functionalities of the basic storefront. But these apps are
            developed by third parties, which sometimes leads to server issues,
            workflow-breaking updates, clunky code, and slow loading time.
          </p>

          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            A better alternative is to get custom code created specifically for your
            Shopify store. While this solution tends to be better fine-tuned to your
            shop needs and could affect your website's loading speed much less, it
            usually turns out to be expensive, labor-intensive, and time-consuming.
          </p>

          <h3
            className="text-2xl font-bold mt-8 mb-4"
            style={{ color: "#0071bc" }}
          >
            Using pre-built Liquid templates for your store
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            All Shopify merchants come across this issue sooner than later. Both
            experienced website designers and beginner merchants have a choice to
            make: either settle for less than what they imagined or spend time and
            money on custom code.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            But now you don't have to choose between potentially flawed and clunky
            functionality and a costly developer. Instead, display the information
            the way you like for less with the help of our customizable{" "}
            <a href="/shop/collection" className="underline text-[#0071bc]">
              pre-built Liquid Shopify section blocks
            </a>.
          </p>
        </div>

        {/* RIGHT SIDE (VIDEO) */}
        <div 
          ref={videoContainerRef}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          {isVideoVisible ? (
            <video
              ref={videoRef}
              src="/shop/about/sections.mp4"
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              preload="none"
              onLoadStart={() => {
                // Reduce video quality for better performance if needed
                if (videoRef.current) {
                  videoRef.current.playbackRate = 1;
                }
              }}
            />
          ) : (
            // Placeholder with same aspect ratio to prevent layout shift
            <div 
              className="w-full bg-gray-200 flex items-center justify-center"
              style={{ aspectRatio: '16/9' }}
            >
              <div className="text-gray-500 text-center">
                <div className="w-12 h-12 mx-auto mb-2 opacity-50">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l7-5z"/>
                  </svg>
                </div>
                <p className="text-sm">Video will load when visible</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ShopAboutPage;