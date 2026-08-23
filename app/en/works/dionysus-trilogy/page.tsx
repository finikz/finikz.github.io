import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "The Dionysian Trilogy | Finikz Translation Project",
  description: "Three French books on wine, beer and rum, translated into Chinese by Finikz and published by Guangdong People's Publishing House in 2026.",
  alternates: {
    canonical: "/en/works/dionysus-trilogy/",
    languages: { "zh-CN": "/works/dionysus-trilogy/", en: "/en/works/dionysus-trilogy/" },
  },
};

const books = [
  { no: "I", title: "Another History of Wine", original: "Une autre histoire du vin", author: "Pierre Guigui & Sophie Brissaud", color: "wine", note: "A journey through land, climate and human craft—and through the many ways a glass of wine acquires a sense of place." },
  { no: "II", title: "Beer in All Its Forms", original: "La bière dans tous ses états", author: "Guirec Aubert", color: "malt", note: "Malt, yeast and time open onto a wider sensory world and the contemporary revival of beer culture." },
  { no: "III", title: "Rum: The Long Voyage", original: "Rhum au long cours", author: "Christophe Guitard", color: "water", note: "A cultural voyage through rum, maritime routes and the enduring imagination of freedom." },
];

export default function EnglishDionysusTrilogyPage() {
  return (
    <main className="trilogy-page english-page" lang="en">
      <nav className="nav" aria-label="Main navigation"><Link className="brand" href="/en/">FINIKZ</Link><div className="nav-links"><Link className="back-link" href="/en/works">← Back to Works</Link><Link className="language-switch" href="/works/dionysus-trilogy" hrefLang="zh-CN">中</Link></div></nav>
      <header className="trilogy-hero"><p className="eyebrow"><span /> TRANSLATION PROJECT · 2026</p><p className="trilogy-kicker">Guangdong People’s Publishing House</p><h1>The Dionysian<br /><em>Trilogy</em></h1><div className="trilogy-intro"><p>Three books translated from French, using wine and spirits as a path into terroir, craft, travel and freedom—and into the ways we understand the world through the senses.</p><p>Chinese translation by Zhang Fengming / Finikz</p></div></header>
      <section className="book-shelf" aria-label="Books in The Dionysian Trilogy">{books.map((book) => <article className="book-entry" key={book.no}><div className={`book-cover ${book.color}`}><span>{book.no}</span><p>{book.original}</p><h2>{book.title}</h2><i>FINIKZ · CHINESE TRANSLATION</i></div><div className="book-copy"><p className="book-index">VOLUME {book.no} / 2026</p><h2>{book.title}</h2><p className="book-author">{book.author}</p><p>{book.note}</p><p className="book-publisher">Guangdong People’s Publishing House</p></div></article>)}</section>
      <section className="trilogy-statement"><p>Translation is more than replacing one language with another. It preserves texture, rhythm and worldview while opening a new way of feeling for Chinese readers.</p><span>Zhang Fengming / Finikz</span></section>
      <SiteFooter locale="en" />
    </main>
  );
}
