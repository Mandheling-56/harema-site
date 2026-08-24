import Link from "next/link";

export const metadata = { title: "採用情報" };

export default function RecruitPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="en-label">RECRUIT</div>
        <h1>いっしょに、晴れ間をつくる。</h1>
      </div>
      <section className="section" style={{ paddingTop: 30, paddingBottom: 160 }}>
        <div className="wrap">
          <div className="prose-body">
            <p>
              WeLaは、医療の「わからない」をほどき、暮らしに晴れ間を届ける小さなチームです。動画・コンテンツ制作、コミュニティ運営、事業づくり——医療の知識がなくても、「誰かの不安がすこし軽くなる仕事」に共感してくれる方と、いつか一緒に働けたらと思っています。
            </p>
            <p>
              現在、具体的な募集職種は定めていませんが、私たちの活動に興味を持ってくださった方からのご連絡は、いつでも歓迎です。あなたがどんなことをしてきて、どんなことをしてみたいか。まずは気軽に聞かせてください。
            </p>
          </div>
          <p style={{ textAlign: "center", marginTop: 60 }}>
            <Link className="btn-contact" href="/contact">話を聞いてみる</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
