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

## License

Apache 2.0
