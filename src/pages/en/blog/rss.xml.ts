import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { alleBeitraege, blossId } from "../../../lib/sota";
import { ui, LOCALE_TAG } from "../../../i18n/ui";

const lang = "en" as const;

export async function GET(context: APIContext) {
  const beitraege = await alleBeitraege(lang);
  return rss({
    title: ui[lang].blogIndex.titel,
    description: ui[lang].blogIndex.beschreibung,
    site: context.site!,
    items: beitraege.map((b) => ({
      title: b.data.titel,
      description: b.data.vorspann,
      pubDate: b.data.datum,
      link: `/en/blog/${blossId(b)}/`,
      categories: b.data.schlagworte,
    })),
    customData: `<language>${LOCALE_TAG[lang].toLowerCase()}</language>`,
  });
}
