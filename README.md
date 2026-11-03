# site-template

A template every tenant site is deployed from. It is **read, never copied** — provisioning
pulls the three directories below and pushes their contents into that tenant's own Prismic
repository, then deploys this repository to the tenant's own Vercel project.

## What provisioning reads

| Path | Pushed to Prismic as |
|---|---|
| `customtypes/<id>/index.json` | a custom type |
| `slices/<Name>/model.json` | a shared slice |
| `content/<name>.json` | a seed document, then published |

The three path patterns are matched exactly by `github.readTemplate`; nothing else in this
repository is read by the backend.

A seed document's keys are the arguments of `prismic.createPage` — `type`, `uid`, `lang`,
`title`, `data` — so it is spread straight into that call.

## What each tenant supplies

`NEXT_PUBLIC_PRISMIC_REPOSITORY`, set on the tenant's own Vercel project. Every tenant
deploys this same code and differs only in which Prismic repository it reads.

## Caveat

`content/home.json` carries `"lang": "en-us"`. A Prismic repository whose master locale is
something else will reject it — the locale is a property of the repository, and a template
cannot know it.
