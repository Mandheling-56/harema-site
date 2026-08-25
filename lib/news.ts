// 既存の呼び出し互換のための薄いラッパー。実体は lib/content.ts。
import { getAll, getOne, formatDate } from "./content";

export type NewsMeta = ReturnType<typeof getAll>[number];

export const getAllNews = () => getAll("news");
export const getNews = (slug: string) => getOne("news", slug);
export { formatDate };
