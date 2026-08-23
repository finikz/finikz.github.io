"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

const storageKey = "finikz-cookie-consent";

type Consent = "accepted" | "declined" | null | undefined;

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(undefined);
  const pathname = usePathname();
  const english = pathname.startsWith("/en");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const stored = window.localStorage.getItem(storageKey);
      setConsent(stored === "accepted" || stored === "declined" ? stored : null);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function choose(value: "accepted" | "declined") {
    window.localStorage.setItem(storageKey, value);
    setConsent(value);
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-WWPWFYB8TE" strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-WWPWFYB8TE');`}</Script>
        </>
      )}
      {consent === null && (
        <aside className="cookie-consent" aria-label={english ? "Cookie settings" : "Cookie 设置"}>
          <p>{english ? "With your consent, we use Google Analytics to understand how the site is visited and used. See our " : "我们在获得你的同意后使用 Google Analytics，了解网站的访问和使用情况。详见 "}<Link href={english ? "/en/privacy" : "/privacy"}>{english ? "Privacy Policy" : "隐私政策"}</Link>{english ? "." : "。"}</p>
          <div>
            <button type="button" onClick={() => choose("declined")}>{english ? "Necessary only" : "仅必要"}</button>
            <button type="button" className="primary" onClick={() => choose("accepted")}>{english ? "Allow analytics" : "同意分析"}</button>
          </div>
        </aside>
      )}
    </>
  );
}
