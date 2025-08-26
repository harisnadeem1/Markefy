import React from "react";

const InstallSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Get the code",
      description: "After your purchase, you'll get a link.",
    },
    {
      number: "2",
      title: "Copy & paste the code",
      description: "Don't worry, it's easy. We'll guide you.",
    },
    {
      number: "3",
      title: "Add & style your content",
      description: "Customize the new section to your liking.",
    },
  ];

  return (
    <section
      className="py-12 bg-white"
      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
    >
      <div className="w-[100%] mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-2xl md:text-3xl font-bold mb-6"
          style={{ color: "#0071bc" }}
        >
          Custom Hero Section Templates for your Shopify Store
        </h2>

        {/* Intro blue text */}
        <div className="max-w-6xl mx-auto mb-6 text-lg text-[#0071bc] space-y-2">
          <p>
            Are you looking for new and unique hero sections for your Shopify
            website pages?
          </p>
          <p>
            Or maybe you need one with just a few more options and more
            flexibility than the current section you have with your existing
            theme?
          </p>
          <p>
            We have a variety of custom Liquid section templates for your Shopify
            store.
          </p>
        </div>

        {/* Gray larger text */}
        <div className="max-w-3xl mx-auto mb-5 text-base text-gray-700 space-y-2">
          <p>
            Our custom premium Liquid section blocks are exactly what you've been
            missing to improve your Shopify store. They're really easy to install
            (just a little copy/pasting) and they're packed with settings so that
            you can customize all of the elements.
          </p>
          <p>
            Not finding exactly what you need?{" "}
            <a
              href="/shop/suggestion-form"
              className="underline text-[#0071bc] hover:text-[#005a94]"
            >
              Let us know
            </a>{" "}
            and we can help.
          </p>
        </div>

        {/* Black subheading */}
        <p className="font-semibold text-black mb-12">
          Customize your Shopify website with a quick, intuitive 3-step setup:
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div
                className="w-28 h-28 flex items-center justify-center rounded-full text-6xl font-semibold mb-4"
                style={{
                  fontFamily: "'Inconsolata', monospace",
                  color: "#0071bc",
                  backgroundColor: "#f5f5f5",
                }}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p
                className="text-gray-600 text-base"
                style={{ fontFamily: "'Inconsolata', monospace" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallSteps;
