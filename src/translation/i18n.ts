import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import uk from "./uk/uk.json";
import en from "./en/en.json";
import de from "./de/de.json";

const resources = {
    uk,
    en,
    de
}

export const availableLanguages = Object.keys(resources)

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        defaultNS: "common",
        fallbackLng: "uk",
    });
