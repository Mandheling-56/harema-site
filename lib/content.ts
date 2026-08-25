import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type Collection = "news" | "column";

export type Entry = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: string;
  excerpt: string;
};

export type EntryDetail = Entry & { contentHtml: string };

const dirFor = (c: Collection) => path.join(process.cwd(), "content", c);

const defaultCategory: Record<Collection, string> = {
  news: "お知らせ",
  column: "コラム",
};

/** frontmatterのexcerptが無いときは本文の冒頭から要約を組み立てる */
function buildExcerpt(body: string, len = 78) {
  const plain = body
    .replace(/^#{1,6}\s+.*$/gm, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`>-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return plain.length > len ? `${plain.slice(0, len)}…` : plain;
}

export function getAll(collection: Collection): Entry[] {
  const dir = dirFor(collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        category: data.category ?? defaultCategory[collection],
        excerpt: data.excerpt ?? buildExcerpt(content),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getOne(collection: Collection, slug: string): Promise<EntryDetail | null> {
  const file = path.join(dirFor(collection), `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const processed = await remark().use(html).process(content);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    category: data.category ?? defaultCategory[collection],
    excerpt: data.excerpt ?? buildExcerpt(content),
    contentHtml: processed.toString(),
  };
}

export function formatDate(d: string) {
  return d.replaceAll("-", ".");
}
