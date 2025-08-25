import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "General",
      items: [
        {
          question: "Who are these custom code snippets and sections for?",
          answer:
            "Our snippets and sections are designed for developers, entrepreneurs, and business owners who want to speed up their project builds. Whether you’re building a Shopify store, a React web app, or a static landing page, our snippets integrate easily and save you hours of coding. They are simple enough for beginners, yet flexible enough for advanced developers who want clean, reusable solutions.",
        },
        {
          question: "Can I use these snippets on non-Shopify websites?",
          answer:
            "Absolutely. Unlike typical Shopify-only solutions, Markefy snippets are platform-agnostic. You can use them on Shopify, WordPress, React projects, or even plain HTML/CSS websites. As long as your environment supports HTML, CSS, or JavaScript, you can use our code.",
        },
        {
          question: "How are these snippets installed?",
          answer:
            "We provide step-by-step documentation with each snippet. Installation usually involves copying the code into your project, adjusting a few variables (like colors, fonts, or content), and pasting it where you want it to appear. For Shopify sections, you simply upload the provided `.liquid` file and enable it in the theme editor.",
        },
        {
          question: "Do you have a Shopify App?",
          answer:
            "No, we don’t rely on apps. Instead, our sections are built as pure code blocks you can install directly into your theme. This makes them faster, lighter, and avoids app dependency or subscription costs.",
        },
        {
          question: "Do I need any coding experience?",
          answer:
            "Not at all! Our snippets are made to be copy-paste friendly. If you know how to copy code and paste it into your project, you’re good to go. For advanced users, the code is clean and customizable if you’d like to extend it.",
        },
        {
          question: "Will these work on Shopify 2.0 themes?",
          answer:
            "Yes. All our Shopify sections are built for Online Store 2.0, ensuring compatibility with the latest Shopify features. At the same time, our snippets are also usable outside Shopify in any web project.",
        },
      ],
    },
    {
      category: "Purchasing a section",
      items: [
        {
          question: "Why are the prices higher than other solutions?",
          answer:
            "We don’t sell low-quality templates. Every snippet is handcrafted, tested, and optimized for performance. Our code is reusable, well-documented, and designed for real business needs — saving you weeks of development time and costly developer hours.",
        },
        {
          question: "Can I use purchased snippets multiple times?",
          answer:
            "Yes! Once you purchase a snippet, you can reuse it across multiple projects or stores you manage. We only ask that you don’t redistribute or resell our snippets as your own.",
        },
        {
          question: "Do you offer returns or exchanges on purchased products?",
          answer:
            "Since our products are digital downloads, we cannot offer refunds once a snippet has been accessed or downloaded. However, if you face an issue or need adjustments, our team is happy to help resolve it.",
        },
      ],
    },
    {
      category: "How we can help",
      items: [
        {
          question: "How do I get customer support?",
          answer:
            "We provide dedicated support via email and chat. If you face installation issues, need clarification, or run into bugs, just reach out — we respond quickly to get you back on track.",
        },
        {
          question: "Can you customize the snippets for us?",
          answer:
            "Yes. If you’d like a snippet tailored for your business, we offer customization services. This could include adding advanced features, adapting it to your branding, or optimizing it for your exact use case.",
        },
        {
          question: "Can you help with the installation?",
          answer:
            "Of course! Our snippets are easy to install, but if you prefer, we can install them for you. This ensures everything is set up properly in your project or Shopify theme.",
        },
        {
          question: "Can I request a snippet to be built by you?",
          answer:
            "Yes, we accept custom requests. If you need a specific component or feature that we don’t already offer, we can design and code it for you. Just contact us with your requirements.",
        },
      ],
    },
  ];

  return (
    <section className="w-[80%] mx-auto py-16">
      <h1
        className="text-4xl font-bold mb-12 text-center"
        style={{ color: "#0071bc", fontFamily: "'Nunito Sans', sans-serif" }}
      >
        FAQ
      </h1>

      {faqs.map((section, secIndex) => (
        <div key={secIndex} className="mb-12">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: "#0071bc", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            {section.category}
          </h2>

          <div className="divide-y divide-gray-200">
            {section.items.map((faq, index) => {
              const currentIndex = `${secIndex}-${index}`;
              return (
                <div key={currentIndex} className="py-4">
                  <button
                    className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 focus:outline-none"
                    onClick={() =>
                      setOpenIndex(openIndex === currentIndex ? null : currentIndex)
                    }
                  >
                    {faq.question}
                    <ChevronDown
                      className={`w-5 h-5 transform transition-transform ${
                        openIndex === currentIndex ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === currentIndex && (
                    <p
                      className="mt-3 text-gray-600 text-base pl-6 border-l-2 border-[#0071bc]/50 transition-all duration-500 ease-in-out"
                      style={{ fontFamily: "'Inconsolata', monospace" }}
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQPage;
