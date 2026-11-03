import { SliceZone } from "@prismicio/react";
import type { SliceZone as SliceZoneType } from "@prismicio/client";

import { components } from "../slices";
import { createClient, repositoryName } from "../src/prismicio";

// Reads Prismic at build time: this is an async server component, so provisioning must push
// the template's models and seed content BEFORE the first deployment or the build renders the
// not-published branch below with nothing to rebuild it.
export default async function Page() {
  const page = await createClient()
    .getByUID("page", "home")
    .catch(() => null);

  if (!page) {
    return (
      <main style={{ padding: "4rem 2rem" }}>
        <h1>Not published yet</h1>
        <p>
          Reading Prismic repository <code>{repositoryName}</code>. No <code>page</code>{" "}
          document with uid <code>home</code> is published there.
        </p>
      </main>
    );
  }

  return <SliceZone slices={page.data.slices as SliceZoneType} components={components} />;
}
