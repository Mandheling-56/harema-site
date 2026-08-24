import ContactForm from "./ContactForm";

export const metadata = { title: "お問い合わせ" };

export default function ContactPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="en-label">CONTACT</div>
        <h1>お問い合わせ</h1>
        <p style={{ marginTop: 20, fontSize: 13.5, color: "#5a6276" }}>
          タイアップのご相談、講演・執筆のご依頼、コミュニティのこと、取材のお申し込みなど。
          <br />
          内容を問わず、お気軽にご連絡ください。通常2〜3営業日以内にお返事いたします。
        </p>
      </div>
      <section className="section" style={{ paddingTop: 30, paddingBottom: 160 }}>
        <div className="wrap" style={{ maxWidth: 640 }}>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
