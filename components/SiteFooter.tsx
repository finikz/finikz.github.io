import Link from "next/link";

type SiteFooterProps = {
  locale?: "zh" | "en";
};

export default function SiteFooter({ locale = "zh" }: SiteFooterProps) {
  const english = locale === "en";
  const root = english ? "/en" : "";

  return (
    <footer className="site-footer">
      <p>© FINIKZ</p>
      <nav aria-label={english ? "Footer navigation" : "页脚导航"}>
        <Link href={`${root}/about`}>{english ? "About" : "关于"}</Link>
        <a href="mailto:mail@finikz.com">{english ? "Contact" : "联系方式"}</a>
        <Link href={`${root}/privacy`}>{english ? "Privacy" : "隐私政策"}</Link>
        <Link href={`${root}/terms`}>{english ? "Terms" : "服务条款"}</Link>
      </nav>
    </footer>
  );
}
