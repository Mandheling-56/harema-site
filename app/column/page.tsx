import Link from "next/link";
import { getAll, formatDate } from "@/lib/content";

export const metadata = {
  title: "コラム",
  description: "医療と暮らしのあいだにある話を、やさしい言葉で。",
};

export default function ColumnIndex() {
  const posts = getAll("column");
  return (
    <main>
      <div className="page-hero">
        <div className="en-label">COLUMN</div>
        <h1>コラム</h1>
        <p
          style={{
            marginTop: 22,
            fontSize: 14,
            color: "#4c5468",
            letterSpacing: ".06em",
            maxWidth: 560,
            marginInline: "auto",
          }}
        >
          医療と暮らしのあいだにある話を、やさしい言葉で。
        </p>
      </div>
      <section className="section" style={{ paddingTop: 30 }}>
        <div
          className="glow"
          style={{ width: 460, height: 320, top: 0, left: "50%", transform: "translateX(-50%)", background: "rgba(255,240,200,.45)" }}
        />
        <div className="wrap">
          {posts.length === 0 ? (
            <p style={{ textAlign: "center", color: "#8a90a0", fontSize: 13.5 }}>
              記事を準備しています。
            </p>
          ) : (
            <div className="column-grid">
              {posts.map((p) => (
                <Link key={p.slug} className="column-card" href={`/column/${p.slug}`}>
                  <span className="date font-en">{formatDate(p.date)}</span>
                  <h2>{p.title}</h2>
                  <p className="excerpt">{p.excerpt}</p>
                  <span className="more font-en">READ →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
