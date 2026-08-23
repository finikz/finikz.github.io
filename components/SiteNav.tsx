import Link from "next/link";

type SiteNavProps = {
  active?: "about" | "works" | "notes";
  home?: boolean;
  locale?: "zh" | "en";
  languageHref?: string;
};

export default function SiteNav({ active, home = false, locale = "zh", languageHref }: SiteNavProps) {
  const english = locale === "en";
  const root = english ? "/en" : "";
  const switchHref = languageHref ?? (english ? "/" : "/en/");

  return (
    <nav className="nav" aria-label={english ? "Main navigation" : "主导航"}>
      <Link className="brand" href={home ? "#top" : `${root}/`}>
        FINIKZ
        <span className="brand-subtitle">AI, CULTURE &amp; STRATEGY</span>
      </Link>
      <div className="nav-links">
        <Link className={active === "works" ? "active" : undefined} href={`${root}/works`}>Works</Link>
        <Link className={active === "notes" ? "active" : undefined} href="/articles" hrefLang={english ? "zh-CN" : undefined}>{english ? "Writing · 中文" : "Notes"}</Link>
        <Link className="language-switch" href={switchHref} hrefLang={english ? "zh-CN" : "en"}>{english ? "中" : "EN"}</Link>
      </div>
    </nav>
  );
}
