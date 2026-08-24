"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#purpose", label: "私たちについて" },
  { href: "/#phases", label: "事業内容" },
  { href: "/#works", label: "実績" },
  { href: "/#founder", label: "代表紹介" },
  { href: "/news", label: "お知らせ" },
  { href: "/recruit", label: "採用情報" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <Link className="brand" href="/">
          <span className="mark">harema</span>
          <span className="co">株式会社WeLa</span>
        </Link>
        <nav className="site-nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <a className="shop-soon" href="#" onClick={(e) => e.preventDefault()}>
            SHOP<small>準備中</small>
          </a>
          <Link href="/contact" className="nav-cta">
            お問い合わせ
          </Link>
        </nav>
        <button
          className="menu-btn"
          aria-label="メニュー"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </header>
      {open && (
        <div className="mobile-menu" onClick={() => setOpen(false)}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact">お問い合わせ</Link>
        </div>
      )}
    </>
  );
}
