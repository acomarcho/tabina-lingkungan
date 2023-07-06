"use client";

import React, { useState, useEffect } from "react";

export function useLanguage(): [string | null, React.Dispatch<React.SetStateAction<string | null>>] {
  const [language, setLanguage] = useState<string | null>("en");

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang === "id" || lang === "en") {
      setLanguage(lang);
    } else {
      setLanguage("en");
      localStorage.setItem("language", "en");
    }
  }, []);

  useEffect(() => {
    if (language) {
      localStorage.setItem("language", language)
    }
  }, [language])

  return [language, setLanguage];
}
