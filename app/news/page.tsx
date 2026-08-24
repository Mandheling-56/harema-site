import Link from "next/link";
import { getAllNews, formatDate } from "@/lib/news";

export const metadata = { title: "お知らせ" };

export default function NewsIndex() {
  const news = getAllNews();
  return (
    <main>
      <div className="page-hero">
        <div className="en-label">NEWS</div>
        <h1>お知らせ</h1>
      </div>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="rule-list">
            {news.map((n) => (
              <Link key={n.slug} className="rule-item" href={`/news/${n.slug}`}>
                <span className="date">{formatDate(n.date)}</span>
                <span className="cat">{n.category}</span>
                <span className="t">{n.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
