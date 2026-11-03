import { PrismicRichText } from "@prismicio/react";
import type { Content } from "@prismicio/client";

type CardGridSlice = {
  slice_type: "card_grid";
  variation: string;
  primary: { heading: Content.RichTextField };
  items: { title: Content.RichTextField; text: Content.RichTextField }[];
};

export default function CardGrid({ slice }: { slice: CardGridSlice }) {
  return (
    <section style={{ padding: "2rem", maxWidth: 48 + "rem", margin: "0 auto" }}>
      <PrismicRichText field={slice.primary.heading} />
      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
        }}
      >
        {slice.items.map((item, index) => (
          <article key={index} style={{ border: "1px solid #e5e5e5", padding: "1.25rem" }}>
            <PrismicRichText field={item.title} />
            <PrismicRichText field={item.text} />
          </article>
        ))}
      </div>
    </section>
  );
}
