import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNews, getNews, formatDate } from "@/lib/news";

export function generateStaticParams() {
  return getAllNews().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getNews(slug);
  return { title: post?.title ?? "お知らせ" };
}

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getNews(slug);
  if (!post) notFound();

  return (
    <main>
      <div className="page-hero">
        <div className="en-label">NEWS</div>
        <h1>{post.title}</h1>
        <p style={{ marginTop: 18, fontSize: 13, color: "var(--navy-soft)", letterSpacing: ".1em" }}>
          <span className="font-en">{formatDate(post.date)}</span>
          <span style={{ margin: "0 12px" }}>|</span>
          {post.category}
        </p>
      </div>
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="prose-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          <p style={{ textAlign: "center", marginTop: 60 }}>
            <Link href="/news" className="btn-navy">お知らせ一覧へ戻る</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
