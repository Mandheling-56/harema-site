import type { MetadataRoute } from "next";

// 正式公開（wela-jp.comへの切り替え）までは検索エンジンにインデックスさせない。
// 公開時はこのファイルを削除するか allow に戻す。
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
