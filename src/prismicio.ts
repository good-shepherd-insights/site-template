import { createClient as createPrismicClient } from "@prismicio/client";

// Which Prismic repository this tenant reads. There is no per-tenant copy of this repository,
// so it cannot be a committed config file: every tenant deploys THIS template and differs only
// in this value, which is set as an environment variable on their own Vercel project.
//
// createClient takes the repository name as an argument and derives the endpoint from it, so
// the value is the subdomain of https://<name>.cdn.prismic.io/api/v2 and nothing more.
export const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY;

export function createClient() {
  if (!repositoryName) {
    throw new Error(
      "NEXT_PUBLIC_PRISMIC_REPOSITORY is not set. Provisioning sets it on the tenant's Vercel project.",
    );
  }
  return createPrismicClient(repositoryName);
}
