import { PrismicRichText } from "@prismicio/react";
import type { Content } from "@prismicio/client";

// Typed against the library's own SharedSlice shape rather than a generated namespace: the
// generated `Content` types only exist after `prismic gen` has run inside a project, which
// never happens in a template.
type HeroSlice = {
  slice_type: "hero";
  variation: string;
  primary: { heading: Content.RichTextField; body: Content.RichTextField };
};

export default function Hero({ slice }: { slice: HeroSlice }) {
  return (
    <section style={{ padding: "4rem 2rem", maxWidth: 48 + "rem", margin: "0 auto" }}>
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />
    </section>
  );
}
