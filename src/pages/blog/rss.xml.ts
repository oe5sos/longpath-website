import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { alleBeitraege } from "../../lib/sota";

export async function GET(context: APIContext) {
  const beitraege = await alleBeitraege();
  return rss({
    title: "Longpath — Blog",
    description: "Fotos und Notizen von den Gipfeln über dem Traunsee. OE5SOS.",
    site: context.site!,
    items: beitraege.map((b) => ({
      title: b.data.titel,
      description: b.data.vorspann,
      pubDate: b.data.datum,
      link: `/blog/${b.id}/`,
      categories: b.data.schlagworte,
    })),
    customData: "<language>de-at</language>",
  });
}
