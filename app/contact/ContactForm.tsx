"use client";

import { useState } from "react";

const CATEGORIES = [
  "タイアップ・PR動画のご相談",
  "講演・執筆・監修のご依頼",
  "取材・出演のご依頼",
  "オンラインコミュニティ「ココカラ」について",
  "その他のお問い合わせ",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div style={{ textAlign: "center", padding: "60px 0" }}>
        <p className="contact-quote">お問い合わせを受け付けました。</p>
        <p style={{ fontSize: 13.5, color: "#5a6276" }}>
          お返事まで少しだけお時間をください。
          <br />
          ご連絡ありがとうございました。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-field">
        <label>
          お問い合わせの種類<span className="req">必須</span>
        </label>
        <select name="category" required defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label>
          お名前<span className="req">必須</span>
        </label>
        <input name="name" required maxLength={100} autoComplete="name" />
      </div>
      <div className="form-field">
        <label>ご所属（会社名・団体名）</label>
        <input name="org" maxLength={200} autoComplete="organization" />
      </div>
      <div className="form-field">
        <label>
          メールアドレス<span className="req">必須</span>
        </label>
        <input name="email" type="email" required maxLength={200} autoComplete="email" />
      </div>
      <div className="form-field">
        <label>
          お問い合わせ内容<span className="req">必須</span>
        </label>
        <textarea name="message" required maxLength={5000} />
      </div>
      {/* honeypot */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", height: 0, opacity: 0 }}
        aria-hidden
      />
      <p style={{ fontSize: 11.5, color: "#8a90a0", marginBottom: 30 }}>
        ご入力いただいた個人情報は、
        <a href="/privacy" style={{ color: "var(--gold)" }}>
          プライバシーポリシー
        </a>
        に基づき、お問い合わせへの対応のためにのみ利用します。
      </p>
      <div style={{ textAlign: "center" }}>
        <button className="btn-contact" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "送信中…" : "送信する"}
        </button>
        {status === "error" && (
          <p style={{ marginTop: 18, fontSize: 13, color: "#b0894a" }}>
            送信に失敗しました。お手数ですが、時間をおいてもう一度お試しください。
          </p>
        )}
      </div>
    </form>
  );
}
