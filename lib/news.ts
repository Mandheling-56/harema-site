import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const newsDir = path.join(process.cwd(), "content", "news");

export type NewsMeta = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: string;
};

export function getAllNews(): NewsMeta[] {
  if (!fs.existsSync(newsDir)) return [];
  return fs
    .readdirSync(newsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(newsDir, f), "utf8"));
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        category: data.category ?? "お知らせ",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getNews(slug: string) {
  const file = path.join(newsDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const processed = await remark().use(html).process(content);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    category: data.category ?? "お知らせ",
    contentHtml: processed.toString(),
  };
}

export function formatDate(d: string) {
  return d.replaceAll("-", ".");
}
