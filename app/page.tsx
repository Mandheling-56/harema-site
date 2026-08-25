import Link from "next/link";
import Hero from "@/components/Hero";
import { getAll, formatDate } from "@/lib/content";

const WORKS = [
  { year: "2024", cat: "著書", t: "『総合診療科の僕が患者さんから教わった70歳からの老いない生き方』", pub: "KADOKAWA" },
  { year: "2026", cat: "監修", t: "『「もしかして認知症？」と不安になったら読むスマホ活用術』", pub: "かんき出版" },
  { year: "2024", cat: "連載", t: "「医師が勧める老いない食材」", pub: "幻冬舎ゴールドオンライン" },
  { year: "2025", cat: "寄稿", t: "「処方箋の出ない保健室」", pub: "北海道医師会『北海道医報』" },
  { year: "2025", cat: "執筆", t: "「けんこう教室 暮らしの保健室」", pub: "全日本民医連『いつでも元気』" },
  { year: "2025", cat: "監修", t: "「70歳を過ぎても病気知らずな『パワフルシニア』の共通点」", pub: "『からだにいいこと』" },
  { year: "継続", cat: "記事監修", t: "医療・健康記事の監修を多数担当", pub: "Medical DOC" },
  { year: "—", cat: "取材", t: "学会公式インタビュー「暮らしの保健室」", pub: "日本プライマリ・ケア連合学会" },
];

export default function Home() {
  const news = getAll("news").slice(0, 3);
  const latest = news[0];
  const columns = getAll("column").slice(0, 3);

  return (
    <main>
      <Hero />

      {/* 最新のお知らせ1件だけを細く通知する行 */}
      {latest && (
        <Link className="ticker" href={`/news/${latest.slug}`}>
          <span className="tag font-en">NEWS</span>
          <span className="date font-en">{formatDate(latest.date)}</span>
          <span className="t">{latest.title}</span>
          <span className="arw font-en">→</span>
        </Link>
      )}

      {/* PURPOSE */}
      <section className="section purpose" id="purpose" style={{ textAlign: "center", paddingTop: 150 }}>
        <div className="glow" style={{ width: 480, height: 320, top: -40, left: "50%", transform: "translateX(-50%)", background: "rgba(255,240,200,.5)" }} />
        <div className="wrap">
          <div className="en-label">PURPOSE</div>
          <blockquote>
            つながりを、処方する。
            <br />
            不安の雲間に、ひとすじの光を。
          </blockquote>
          <p className="sec-lead" style={{ margin: "0 auto" }}>
            株式会社WeLaは、医師・舛森悠が代表を務める、医療コンテンツとコミュニティの会社です。「正しさ」と「楽しさ」を両立させ、誰もが安心して人生を選べる情報のインフラを。病院の中だけでは完結しない「生活」や「人生」を支え、医療の情報格差をなくす。その先に届けたいものを、私たちは「晴れ間」と呼んでいます。
          </p>
        </div>
      </section>

      {/* BUSINESS */}
      <section className="section" id="phases">
        <div className="wrap">
          <div className="sec-head"><span className="en">BUSINESS</span><span className="line" /></div>
          <h2 className="sec-title">3つの晴れ間</h2>
          <p className="sec-lead">予防から治療、そして心へ。人生のフェーズに合わせて、それぞれの晴れ間をお届けします。</p>
          <div className="phase-grid">
            <div className="phase">
              <div className="num">01</div>
              <h3>予防に晴れ間を。</h3>
              <div className="en">PREVENTION</div>
              <p>「難しい」を「楽しい」へ。正しい医療情報をエンターテイメントの力で翻訳し、毎日の暮らしに届けます。</p>
              <div className="items">
                <span>YouTube医療大学</span>
                <span>SNS・記事・健康教育</span>
                <span>企業タイアップ・PR動画制作</span>
                <span>講演・産業医・コンサルティング</span>
              </div>
            </div>
            <div className="phase">
              <div className="num">02</div>
              <h3>治療に晴れ間を。</h3>
              <div className="en">TREATMENT</div>
              <p>選ぶ力を、その人に返す。迷ったとき、そばで一緒に考える医療のかたちを構想しています。</p>
              <div className="items">
                <span>オンライン診療（構想中）</span>
              </div>
              <span className="badge">COMING SOON</span>
            </div>
            <div className="phase">
              <div className="num">03</div>
              <h3>心に晴れ間を。</h3>
              <div className="en">WELL-BEING</div>
              <p>孤立を防ぎ、社会とのつながりを処方する。伴走とは、その人の力が戻るまで隣にいること。</p>
              <div className="items">
                <span>オンラインコミュニティ「ココカラ」</span>
                <span>公式LINE</span>
                <span>地域の居場所づくり（はこだて暮らしの保健室）</span>
                <span>グッズ・ものづくり（準備中）</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section" id="logos">
        <div className="glow" style={{ width: 400, height: 280, top: 20, right: -60, background: "rgba(210,228,240,.55)" }} />
        <div className="wrap">
          <div className="sec-head"><span className="en">PARTNERS</span><span className="line" /></div>
          <h2 className="sec-title">タイアップ実績</h2>
          <p className="sec-lead">医学的な誠実さを軸に、企業の皆さまと予防啓発のコンテンツをつくっています。</p>
          <div className="logo-marquee">
            <div className="logo-track">
              {/* 同じ列を2周させてシームレスにループ（translateX(-50%)前提） */}
              {[0, 1].map((dup) =>
                ["COMPANY A", "COMPANY B", "COMPANY C", "COMPANY D", "COMPANY E", "COMPANY F"].map((c) => (
                  <span key={`${dup}-${c}`} className="logo-item" aria-hidden={dup === 1}>{c}</span>
                ))
              )}
            </div>
          </div>
          <p className="logo-note">※掲載許諾をいただいた企業様のロゴが入ります（順次追加）</p>
        </div>
      </section>

      {/* OUR MEDIA */}
      <section className="section">
        <div className="glow" style={{ width: 520, height: 340, top: 60, left: -80, background: "rgba(255,240,200,.45)" }} />
        <div className="wrap">
          <div className="sec-head"><span className="en">OUR MEDIA</span><span className="line" /></div>
          <h2 className="sec-title">発信のこと</h2>
          <div className="media-panel">
            <a
              className="yt-thumb"
              href="https://www.youtube.com/@YouTubeMedical"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube医療大学を開く"
            >
              <div className="play" />
            </a>
            <div className="media-text">
              <h3>YouTube医療大学</h3>
              <p>現役医師が、健康と医療の「わからない」をやさしくほどく医療教育チャンネル。シニア世代を中心に、多くの方の暮らしのそばでご覧いただいています。</p>
              <a
                className="btn-navy"
                href="https://www.youtube.com/@YouTubeMedical"
                target="_blank"
                rel="noopener noreferrer"
              >
                チャンネルを見る →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section className="section" id="works">
        <div className="glow" style={{ width: 420, height: 300, top: 80, right: -40, background: "rgba(255,244,214,.5)" }} />
        <div className="wrap">
          <div className="sec-head"><span className="en">WORKS &amp; MEDIA</span><span className="line" /></div>
          <h2 className="sec-title">実績</h2>
          <p className="sec-lead">出版・連載・監修・メディア掲載。</p>
          <div className="rule-list">
            {WORKS.map((w, i) => (
              <div key={i} className="rule-item">
                <span className="year">{w.year}</span>
                <span className="cat">{w.cat}</span>
                <span className="t">{w.t}</span>
                <span className="pub">{w.pub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section" id="founder">
        <div className="glow" style={{ width: 500, height: 340, top: 40, left: -70, background: "rgba(255,240,200,.5)" }} />
        <div className="wrap">
          <div className="sec-head"><span className="en">FOUNDER</span><span className="line" /></div>
          <h2 className="sec-title">代表紹介</h2>
          <div className="founder-panel">
            <div className="founder-photo">PHOTO</div>
            <div className="founder-text">
              <h3>舛森 悠</h3>
              <div className="en-name">YU MASUMORI — REPRESENTATIVE DIRECTOR / PHYSICIAN</div>
              <p>総合診療専門医として現場に立ちながら、情報発信を行う「架け橋」。病気だけでなく、その人の人生（Narrative）を診る医療を実践しています。</p>
              <h4>資格</h4>
              <p className="quals">
                総合診療専門医 / 新・家庭医療専門医 / 認知症予防専門医 /<br />
                日本医師会認定産業医 / 日本プライマリ・ケア連合学会認定指導医
              </p>
              <h4>著書・監修</h4>
              <div className="books">
                <span>『総合診療科の僕が患者さんから教わった70歳からの老いない生き方』（著書・KADOKAWA）</span>
                <span>『「もしかして認知症？」と不安になったら読むスマホ活用術』（監修・かんき出版）</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLUMN */}
      {columns.length > 0 && (
        <section className="section" id="column">
          <div className="glow" style={{ width: 460, height: 320, top: 40, left: "-60px", background: "rgba(255,240,200,.45)" }} />
          <div className="wrap">
            <div className="sec-head"><span className="en">COLUMN</span><span className="line" /></div>
            <h2 className="sec-title">コラム</h2>
            <p className="sec-lead">医療と暮らしのあいだにある話を、やさしい言葉で。</p>
            <div className="column-grid">
              {columns.map((c) => (
                <Link key={c.slug} className="column-card" href={`/column/${c.slug}`}>
                  <span className="date font-en">{formatDate(c.date)}</span>
                  <h3>{c.title}</h3>
                  <p className="excerpt">{c.excerpt}</p>
                  <span className="more font-en">READ →</span>
                </Link>
              ))}
            </div>
            <p style={{ marginTop: 40 }}>
              <Link href="/column" className="btn-navy">コラム一覧 →</Link>
            </p>
          </div>
        </section>
      )}

      {/* NEWS */}
      <section className="section" id="news">
        <div className="glow" style={{ width: 380, height: 260, bottom: -30, right: "10%", background: "rgba(255,244,214,.5)" }} />
        <div className="wrap">
          <div className="sec-head"><span className="en">NEWS</span><span className="line" /></div>
          <h2 className="sec-title">お知らせ</h2>
          <div className="rule-list">
            {news.map((n) => (
              <Link key={n.slug} className="rule-item" href={`/news/${n.slug}`}>
                <span className="date">{formatDate(n.date)}</span>
                <span className="cat">{n.category}</span>
                <span className="t">{n.title}</span>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 30 }}>
            <Link href="/news" className="btn-navy">お知らせ一覧 →</Link>
          </p>
        </div>
      </section>

      {/* COMPANY */}
      <section className="section" id="company">
        <div className="glow" style={{ width: 440, height: 300, top: 60, left: "50%", transform: "translateX(-50%)", background: "rgba(210,228,240,.5)" }} />
        <div className="wrap">
          <div className="sec-head"><span className="en">COMPANY</span><span className="line" /></div>
          <h2 className="sec-title">会社概要</h2>
          <dl className="company-table">
            <div className="company-row"><dt>会社名</dt><dd>株式会社 WeLa（ウィーラ）</dd></div>
            <div className="company-row"><dt>代表者</dt><dd>舛森 悠</dd></div>
            <div className="company-row"><dt>設立</dt><dd>2024年7月</dd></div>
            <div className="company-row"><dt>資本金</dt><dd>1,000,000円</dd></div>
            <div className="company-row"><dt>所在地</dt><dd>〒060-0062 北海道札幌市中央区南2条西5丁目31番地1 RM Bld. 701</dd></div>
            <div className="company-row"><dt>事業内容</dt><dd>メディア運用・動画制作・出版・医療コンサルティング</dd></div>
          </dl>
          <p className="sec-lead" style={{ marginTop: 30, fontSize: 12.5 }}>
            税務・法務・経営それぞれの専門家と連携し、誠実な事業運営に努めています。
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact" style={{ textAlign: "center", paddingBottom: 170 }}>
        <div className="glow" style={{ width: 560, height: 360, top: 40, left: "50%", transform: "translateX(-50%)", background: "rgba(255,238,196,.55)" }} />
        <div className="wrap">
          <div className="en-label">CONTACT</div>
          <blockquote className="contact-quote">晴れ間を、ご一緒に。</blockquote>
          <p style={{ fontSize: 13, color: "#5a6276", marginBottom: 44 }}>
            タイアップのご相談、講演・執筆のご依頼、コミュニティのこと、取材のお申し込みなど。
            <br />
            内容を問わず、こちらからお気軽にご連絡ください。
          </p>
          <Link className="btn-contact" href="/contact">お問い合わせ</Link>
        </div>
      </section>
    </main>
  );
}
