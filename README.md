# DECaF UCSD Site

Site for the [Disciplines of Engineering Career Fair](https://decafatucsd.com) at UC San Diego, run by [TESC](https://tesc.ucsd.edu). Built with Vite + React and hosted on [AWS Amplify](https://aws.amazon.com/amplify/).

Repo: [UCSDTESC/decafatucsd.com](https://github.com/UCSDTESC/decafatucsd.com)

## Commands

```bash
npm install          # install dependencies
npm run dev          # start the dev server at http://localhost:3000
npm run build        # production build (outputs to build/)
npm run preview      # preview the production build locally
```

Node.js and npm are required. Use the versions that ship with a current LTS Node install.

## Folder structure

```
decafatucsd.com/
├── index.html              # HTML entry; page title, fonts, favicon
├── vite.config.js          # Vite + React + Tailwind plugins; build/ output
├── package.json            # scripts and dependencies
├── public/                 # static files served from the site root
│   ├── logos/              # sponsor logos (referenced as /logos/...)
│   ├── CoffeeMug.svg       # favicon
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── index.jsx           # React mount point
    ├── index.css           # Tailwind import + global styles
    ├── App.jsx             # page order: Home → About → Sponsor → FAQ → Footer
    ├── assets/             # bundled SVGs (CoffeeMug, SaxGuy, TESC logo, etc.)
    └── pages/
        ├── Home/           # hero, header, registration CTAs
        ├── About/          # “What is DECaF?”
        ├── Sponsor/        # sponsor grid; data in Sponsors.json
        ├── FAQ/            # FAQ copy lives in FAQ.jsx
        └── Footer/         # social links and TESC branding
```

The site is a single-page layout. Sections are stacked in `src/App.jsx` and the header scrolls to element IDs (`about`, `sponsor`, `faq`).

### Where to edit common content

| Change | File(s) |
| --- | --- |
| Event name, date, venue, registration links | `src/pages/Home/Home.jsx` |
| About copy | `src/pages/About/About.jsx` |
| Sponsors | `src/pages/Sponsor/Sponsors.json` + logo files in `public/logos/` |
| FAQ questions and answers | `src/pages/FAQ/FAQ.jsx` |
| Footer / social links | `src/pages/Footer/Footer.jsx` |
| Page title and meta description | `index.html` |
| Global CSS / Tailwind | `src/index.css` |

Static assets in `public/` are available at the site root (for example `/logos/TSMC-logo.png`). SVGs imported from `src/assets/` are bundled by Vite.

## Editing workflow (branch → PR → deploy)

Production deploys from `main`. Amplify watches the GitHub repo and rebuilds the site when `main` updates. Do not commit directly to `main`.

1. **Update `main` locally**

   ```bash
   git checkout main
   git pull origin main
   ```

2. **Create a branch** using a prefix from [Branch naming](#branch-naming)

   ```bash
   git checkout -b feat/winter-2027-homepage
   ```

3. **Edit and verify locally**

   ```bash
   npm run dev
   ```

   Confirm the change in the browser, then commit with a short message that explains why.

4. **Push and open a pull request**

   ```bash
   git push -u origin HEAD
   ```

   Open a PR into `main` on GitHub. Amplify typically builds a **preview** of the PR so reviewers can check the live result before merge.

5. **Review, merge, deploy**

   After approval, merge the PR. Amplify builds `npm run build` and publishes the `build/` output to production ([decafatucsd.com](https://decafatucsd.com)). Check the Amplify console if a deploy fails.

Build settings (install command, `npm run build`, artifact folder `build/`) live in the Amplify app console. There is no `amplify.yml` in this repo.

## Branch naming

Use lowercase, hyphenated names with a type prefix:

| Prefix | Use for |
| --- | --- |
| `feat/` | New content or features (`feat/winter-2027-homepage`) |
| `fix/` | Bug fixes (`fix/mobile-header-overflow`) |
| `docs/` | README or comments only (`docs/update-readme`) |
| `style/` | Visual / Tailwind tweaks with no behavior change |
| `refactor/` | Internal cleanup with no user-facing change |
| `chore/` | Dependencies, config, or tooling |

Keep branches short and scoped to one change. Example: `feat/add-gold-sponsors`, not `update-website`.

## Dependencies

Install with `npm install`. The lockfile is `package-lock.json`.

### Runtime

| Package | Role | Docs |
| --- | --- | --- |
| [react](https://www.npmjs.com/package/react) / [react-dom](https://www.npmjs.com/package/react-dom) | UI library | [react.dev](https://react.dev/) |
| [tailwindcss](https://www.npmjs.com/package/tailwindcss) | Utility CSS (v4) | [Tailwind docs](https://tailwindcss.com/docs) |
| [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite) | Tailwind Vite plugin | [Install with Vite](https://tailwindcss.com/docs/installation/using-vite) |
| [react-icons](https://www.npmjs.com/package/react-icons) | Footer social icons | [react-icons](https://react-icons.github.io/react-icons/) |

### Build / tooling

| Package | Role | Docs |
| --- | --- | --- |
| [vite](https://www.npmjs.com/package/vite) | Dev server and production bundler | [vite.dev](https://vite.dev/) |
| [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react) | JSX / React Fast Refresh | [plugin-react](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react) |

Vite config: [vite.config.js](vite.config.js). Dev server runs on port 3000. Production output is `build/` so it matches Amplify’s publish directory.

### Hosting

| Service | Role | Docs |
| --- | --- | --- |
| AWS Amplify Hosting | CI/CD from GitHub → production | [Amplify Hosting](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html), [deploy a Vite app](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-vite-app.html) |
| GitHub | Source control and pull requests | [Creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) |
