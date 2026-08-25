import Link from "next/link";

const SNS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@YouTubeMedical",
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z",
  },
  {
    label: "X",
    href: "https://x.com/Dr_mandheling",
    path: "M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.4l-5.8-7.6-6.7 7.6H.4l8.7-9.9L0 1.2h7.6l5.3 7 6-7zm-1.3 19.5h2L6.5 3.3h-2.2l13.3 17.4z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dr.mandheling/",
    path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 7.4a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8zM17.8 5a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot-wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="mark">harema</div>
            <div className="co">株式会社WeLa</div>
            <div className="tag">暮らしに、晴れ間を。</div>
            <div className="sns-row">
              {SNS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
            <p className="sns-note">
              ※ X・Instagramは代表・舛森（Dr.マンデリン）のアカウントです。
            </p>
          </div>
          <div className="foot-nav">
            <div>
              <h5>ABOUT</h5>
              <Link href="/#purpose">私たちについて</Link>
              <Link href="/#founder">代表紹介</Link>
              <Link href="/#company">会社概要</Link>
              <Link href="/recruit">採用情報</Link>
            </div>
            <div>
              <h5>BUSINESS</h5>
              <Link href="/#phases">予防に晴れ間を。</Link>
              <Link href="/#phases">治療に晴れ間を。</Link>
              <Link href="/#phases">心に晴れ間を。</Link>
            </div>
            <div>
              <h5>MEDIA</h5>
              <a
                href="https://www.youtube.com/@YouTubeMedical"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube医療大学
              </a>
              <Link href="/#works">実績</Link>
              <Link href="/column">コラム</Link>
              <Link href="/news">お知らせ</Link>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 WeLa Inc. All rights reserved.</span>
          <Link href="/privacy">プライバシーポリシー</Link>
        </div>
      </div>
    </footer>
  );
}
