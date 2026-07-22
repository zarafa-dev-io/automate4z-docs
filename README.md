# automate4z-docs

Documentation website for [automate4z](https://github.com/zarafa-dev-io/automate4z) — the open-source workflow orchestrator for COBOL developers bridging z/OS mainframe and modern DevOps.

**Live site:** https://zarafa-dev-io.github.io/automate4z-docs/

## Contents

```
docs/           # Documentation pages (Markdown/MDX)
  intro.mdx
  getting-started.mdx
  cli-reference.mdx
  task-reference/    # One page per built-in task
  workflow-spec/     # Formal YAML specification
static/         # Static assets served at the root of the site
  releases/          # Binary releases (copied automatically by CI)
  img/
src/            # React components, CSS
blog/           # Blog posts
```

## Local development

```bash
npm install
npm start
```

## Releases

Binary releases are published automatically to `static/releases/` by the [release workflow](https://github.com/zarafa-dev-io/automate4z/blob/master/.github/workflows/release.yml) in the main repo each time a new version tag is pushed.

Download links are served at:
```
https://zarafa-dev-io.github.io/automate4z-docs/releases/<filename>
```

## Contributing

PRs welcome for documentation improvements. Source of truth for the spec and task reference is the main [automate4z](https://github.com/zarafa-dev-io/automate4z) repo.

### Adding a new built-in task — checklist

Every page below is touched **every time** a task is added (or removed). The task count is hardcoded in each of them; grep for the current count (`grep -rn "<N> tâches\|<N> built-in\|the <N> tasks" docs src i18n`) to catch any location this list may have missed.

**1. New task page (FR + EN):**

- `docs/task-reference/NN-<task>.mdx` — pick the next free `NN` prefix and matching `sidebar_position`
- `i18n/en/docusaurus-plugin-content-docs/current/task-reference/NN-<task>.mdx` — same file name, English content

**2. Catalogue (FR + EN):** add the task row in the right group table and bump the group count in its heading:

- `docs/task-reference/00-overview.mdx`
- `i18n/en/docusaurus-plugin-content-docs/current/task-reference/00-overview.mdx`

**3. Total task count — all hardcoded occurrences:**

| File | Occurrences |
|------|-------------|
| `docs/task-reference/00-overview.mdx` | intro sentence ("embarque **N tâches built-in**") |
| `i18n/en/.../task-reference/00-overview.mdx` | intro sentence ("ships **N built-in tasks**") |
| `docs/intro.mdx` | features table, docs-map table, version footer |
| `i18n/en/.../intro.mdx` | features table, docs-map table, version footer |
| `docs/getting-started.mdx` | stability note, `a4z schema --list-tasks` comment, "next steps" table |
| `i18n/en/.../getting-started.mdx` | same three spots |
| `docs/plugins/01-utiliser-des-plugins.mdx` | intro sentence |
| `i18n/en/.../plugins/01-utiliser-des-plugins.mdx` | intro sentence |
| `src/pages/index.tsx` | homepage CTA (`homepage.cta.tasks`) |
| `src/components/HomepageFeatures/index.tsx` | feature card title (`homepage.feature.tasks.title`) |
| `i18n/en/code.json` | the two English translations of the strings above |

Historic mentions in `docs/changelog.md` are frozen — never edit them.

**4. Verify:** `npm run build` must pass for both locales before merging (no CI runs on PRs in this repo).

## License

Apache 2.0
