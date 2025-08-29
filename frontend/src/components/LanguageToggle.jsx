import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`px-3 py-1 text-sm rounded-full ${
          i18n.language === "en" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage("ro")}
        className={`px-3 py-1 text-sm rounded-full ${
          i18n.language === "ro" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        RO
      </button>
    </div>
  );
};

export default LanguageToggle;
