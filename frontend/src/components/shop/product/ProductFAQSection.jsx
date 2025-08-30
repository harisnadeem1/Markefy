import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ProductFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need any coding experience?",
      answer:
        "No, you do not! All you need to know is how to download a file, copy its contents and paste it. The installation process is extremely easy, quick, and intuitive, and does not require any coding knowledge. And we provide guidance for you of course.",
    },
    {
      question: "Can I use these sections on any theme?",
      answer:
        "Our sections should work with any theme. However, if your theme is heavily customized and you face issues, just reach out to us for help.",
    },
    {
      question: "How do I install it?",
      answer:
        "Simply upload the provided files and enable the section in your Shopify theme editor.",
    },
    {
      question: "Why is the price higher than other solutions?",
      answer:
        "Because we provide premium, customizable, and fully supported code blocks that save you time and deliver long-term value.",
    },
  ];

  return (
    <section className="w-[80%] mx-auto py-16 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 shadow-xl">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Questions about this section?
      </h2>

      <div className="max-w-3xl mx-auto divide-y divide-white/40">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              className="flex justify-between items-center w-full text-left text-white font-semibold text-lg md:text-xl focus:outline-none"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-white/90 text-base pl-6 border-l-2 border-white/40 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFAQSection;
