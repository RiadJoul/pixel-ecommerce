'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext('en');

export const LanguageProvider = ({ children }) => {
  
  const [language, setLanguage] = useState<"en" | "nl">('en');

  const toggleLanguage = (lang: "en" | "nl") => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};