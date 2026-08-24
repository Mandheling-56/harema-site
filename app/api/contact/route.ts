import { NextResponse } from "next/server";

// カテゴリ→通知先Slackチャンネルの振り分け
// ココカラ関連 → SLACK_WEBHOOK_COCOKARA（#オンラインコミュニティ想定）
// それ以外    → SLACK_WEBHOOK_GENERAL（総務チャンネル想定）
const COCOKARA_CATEGORY = "オンラインコミュニティ「ココカラ」について";

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { category, name, org, email, message, website } = body;

  // honeypot：botはこのフィールドを埋める
  if (website) return NextResponse.json({ ok: true });

  if (!category || !name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
  }
  if (String(message).length > 5000 || String(name).length > 100) {
    return NextResponse.json({ ok: false, error: "too long" }, { status: 400 });
  }

  const webhook =
    category === COCOKARA_CATEGORY
      ? process.env.SLACK_WEBHOOK_COCOKARA || process.env.SLACK_WEBHOOK_GENERAL
      : process.env.SLACK_WEBHOOK_GENERAL;

  if (!webhook) {
    console.error("Slack webhook not configured");
    return NextResponse.json({ ok: false, error: "not configured" }, { status: 500 });
  }

  const text = [
    ":love_letter: *サイトからお問い合わせが届きました*",
    `*種類：* ${category}`,
    `*お名前：* ${name}`,
    org ? `*ご所属：* ${org}` : null,
    `*メール：* ${email}`,
    "*内容：*",
    "```" + String(message).slice(0, 3000) + "```",
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    console.error("Slack webhook failed", res.status);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
