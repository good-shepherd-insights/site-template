import { PrismicRichText } from "@prismicio/react";
import type { RichTextField } from "@prismicio/client";

// Typed with the library's own exported RichTextField, NOT the generated `Content`
// namespace: that namespace only exists after `prismic gen` has run inside a project, which
// never happens in a template. Importing it compiles locally and fails the build with
// "Module '@prismicio/client' has no exported member 'Content'" — observed, not assumed.
type HeroSlice = {
  slice_type: "hero";
  variation: string;
  primary: { heading: RichTextField; body: RichTextField };
};

export default function Hero({ slice }: { slice: HeroSlice }) {
  return (
    <section style={{ padding: "4rem 2rem", maxWidth: 48 + "rem", margin: "0 auto" }}>
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />
    </section>
  );
}
