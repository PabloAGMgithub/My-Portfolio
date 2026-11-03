# Pablo Alvarez Garcia — Developer Portfolio (2026)

A research-informed, **project-first** personal site intended for GitHub Pages.

## What it includes

- An editorial homepage with four documented case studies based on the supplied CV.
- A project-detail view explaining context, personal contribution, and actual functionality.
- A searchable, sortable archive of **public** GitHub repositories fetched from `PabloAGMgithub` using GitHub's REST API. Forks are hidden by default, but can be shown.
- Responsive layout, skip link, keyboard focus states, and reduced-motion handling.
- Graceful archive fallback when the GitHub API is unavailable; no invented repository data.
- No framework, API key, tracking scripts, or build step required.

**Evidence policy:** Only `My-Portfolio` is linked to a source repository because that repository was independently visible in public GitHub search. `ResumeForge` links to the demo shown in the supplied CV. Other documented projects are shown as case studies without invented GitHub source URLs or fabricated screenshots.

## Edit the content

Open **`content.js`**. The `projects` list is the master source for featured case studies. You can update existing details, provide a verified `sourceUrl` or `demoUrl`, or append more objects with a unique `id`, `title`, `short`, `context`, `contribution`, `features`, and `tags`.

The project archive is automatically populated from public GitHub data once the site is online; it will reflect repo descriptions, languages, homepage links, and topics as you maintain them on GitHub.

## Preview

Opening `index.html` directly works for featured projects. The GitHub API may be inaccessible in some environments. For a local server:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000`.

## Publish to the existing repository

1. Back up the original `PabloAGMgithub/My-Portfolio` repository before replacing files.
2. Upload the **contents** of this site folder into the repository's `main` branch root (`index.html`, `project.html`, `style.css`, `content.js`, `main.js`, `project.js`, `assets/`, `.nojekyll`). You must preserve the nested assets folder.
3. In GitHub → **Settings → Pages**, select the appropriate source; for branch deployment use **Deploy from a branch**, `main`, `/(root)`.
4. Check GitHub Actions/Pages deployment result and select its actual published link. The prior 404 must be resolved separately.
5. Verify the CSS, photo, project pages, and public repository list on the published site.

The archive reads `https://api.github.com/users/PabloAGMgithub/repos`. GitHub documents an unauthenticated REST API rate limit of 60 requests/hour per source IP. To limit repeated requests, successful data is cached in the browser for two hours. For a production upgrade, a scheduled GitHub Actions job could generate a static repository snapshot to eliminate client-side dependency on the API.

## Notes

This package does **not** modify the GitHub account or automatically publish. The `github-profile/` materials in the companion toolkit belong in a *different* special repository named exactly `PabloAGMgithub`, not in this site repo.
