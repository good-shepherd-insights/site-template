import CardGrid from "./CardGrid";
import Hero from "./Hero";

// Keyed by the slice model's `id`, which is what a document's `slice_type` carries — `hero`
// and `card_grid`, not the directory names. SliceZone looks components up by that key.
export const components = {
  hero: Hero,
  card_grid: CardGrid,
};
