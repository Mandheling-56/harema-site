import Link from "next/link";
import { notFound } from "next/navigation";
import { getAll, getOne, formatDate } from "@/lib/content";

export function generateStaticParams() {
  return getAll("column").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getOne("column", slug);
  return { title: post?.title ?? "コラム", description: post?.excerpt };
}

export default async function ColumnArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getOne("column", slug);
  if (!post) notFound();

  const others = getAll("column").filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main>
      <div className="page-hero">
        <div className="en-label">COLUMN</div>
        <h1>{post.title}</h1>
        <p style={{ marginTop: 18, fontSize: 13, color: "var(--navy-soft)", letterSpacing: ".1em" }}>
          <span className="font-en">{formatDate(post.date)}</span>
        </p>
      </div>
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="prose-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

          {others.length > 0 && (
            <div className="column-more">
              <div className="sec-head" style={{ marginBottom: 26 }}>
                <span className="en">MORE</span>
                <span className="line" />
              </div>
              <div className="column-grid">
                {others.map((p) => (
                  <Link key={p.slug} className="column-card" href={`/column/${p.slug}`}>
                    <span className="date font-en">{formatDate(p.date)}</span>
                    <h2>{p.title}</h2>
                    <p className="excerpt">{p.excerpt}</p>
                    <span className="more font-en">READ →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <p style={{ textAlign: "center", marginTop: 60 }}>
            <Link href="/column" className="btn-navy">コラム一覧へ戻る</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
