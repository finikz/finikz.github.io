"use client";

import Link from "next/link";
import { useEffect } from "react";

const storageKey = "finikz-language";

const routePairs: Record<string, { zh: string; en: string }> = {
  "/": { zh: "/", en: "/en/" },
  "/about/": { zh: "/about/", en: "/en/about/" },
  "/projects/": { zh: "/projects/", en: "/en/projects/" },
  "/works/": { zh: "/works/", en: "/en/works/" },
  "/works/dionysus-trilogy/": { zh: "/works/dionysus-trilogy/", en: "/en/works/dionysus-trilogy/" },
  "/privacy/": { zh: "/privacy/", en: "/en/privacy/" },
  "/terms/": { zh: "/terms/", en: "/en/terms/" },
};

const routeByPath = new Map(
  Object.values(routePairs).flatMap((pair) => [[pair.zh, pair], [pair.en, pair]]),
);

function normalizedPath(pathname: string) {
  if (pathname === "/" || pathname.endsWith("/")) return pathname;
  return `${pathname}/`;
}

export function LanguagePreference() {
  useEffect(() => {
    const path = normalizedPath(window.location.pathname);
    const pair = routeByPath.get(path);
    if (!pair) return;

    try {
      const stored = window.localStorage.getItem(storageKey);
      const locale = stored === "zh" || stored === "en"
        ? stored
        : (navigator.languages[0] || navigator.language).toLowerCase().startsWith("zh") ? "zh" : "en";
      window.localStorage.setItem(storageKey, locale);
      if (path !== pair[locale]) window.location.replace(`${pair[locale]}${window.location.search}${window.location.hash}`);
    } catch {
      // Keep the requested page when browser storage is unavailable.
    }
  }, []);

  return null;
}

type LanguageSwitchProps = {
  href: string;
  locale: "zh" | "en";
  children: React.ReactNode;
};

export function LanguageSwitch({ href, locale, children }: LanguageSwitchProps) {
  function rememberLanguage() {
    try {
      window.localStorage.setItem(storageKey, locale);
    } catch {
      // The link still works when browser storage is unavailable.
    }
  }

  return (
    <Link
      className="language-switch"
      href={href}
      hrefLang={locale === "en" ? "en" : "zh-CN"}
      onClick={rememberLanguage}
    >
      {children}
    </Link>
  );
}
