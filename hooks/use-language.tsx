"use client";

import { atom, useAtom } from "jotai";
import React, { useState, useEffect } from "react";

export const languageAtom = atom<string | null>("en");

export interface Language {
  [language: string]: string;
}

export function useLanguage(): [
  string | null,
  React.Dispatch<React.SetStateAction<string | null>>
] {
  const [language, setLanguage] = useAtom(languageAtom);

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang === "id" || lang === "en") {
      setLanguage(lang);
    } else {
      setLanguage("en");
      localStorage.setItem("language", "en");
    }
  }, [setLanguage]);

  useEffect(() => {
    if (language) {
      localStorage.setItem("language", language);
    }
  }, [language]);

  return [language, setLanguage];
}
