# מתכונים שיעל אוהבת במיוחד

A single-page, static, Hebrew (RTL) recipe-aggregation site. Every card links out
to the original recipe on the site it came from — this site stores no recipe
text of its own, only the pointer.

Built as plain HTML/CSS/JS — no build step, no framework, no dependencies
beyond two Google Fonts. Open `index.html` in a browser to preview, or deploy
the folder as-is to any static host (GitHub Pages, Netlify, Vercel, a plain
web server, etc.).

## Adding or editing recipes

Everything content-related lives in **`js/recipes-data.js`**. Open it and:

- Add a recipe by adding an object to the `RECIPES` array (see the comment at
  the top of the file for the exact shape).
- Add or rename a category by editing the `CATEGORIES` array — the order
  there is the order the pills appear in.

No other file needs to change for day-to-day updates.

## Adding recipe photos

Drop image files into `assets/recipes/` and point a recipe's `photoUrl` at
the file (e.g. `"assets/recipes/kubeh.jpg"`). Aim for at least 700×440px
(≈16:10) so the photo fills the card frame without upscaling. A recipe with
no `photoUrl` shows a soft placeholder with the category's emoji instead —
that's expected until you add a photo.

## The hero photo

`assets/hero.jpg` is the placeholder photo carried over from the design
handoff — it was cropped from an earlier screenshot of the site, so it's
lower-resolution than ideal and has no relation to the current design. Swap
in a real photo when you have one (name it `hero.jpg`, or update the path in
`index.html`), aiming for at least 2240×840px (~8:3) so it stays sharp at
full width.

## Structure

```
index.html            the page
css/organic.css        design-system tokens (colors, spacing, radius, shadow) — source of truth
css/site.css            page layout + recipe-card styling, built on those tokens
js/recipes-data.js      recipe & category content — edit this to update the site
js/app.js               filtering/search behavior
assets/hero.jpg          hero banner photo
assets/recipes/          put recipe photos here
```

## Notes on what's implemented

- Category filter (single-select, no "all") + live text search, combined
  (AND). Search matches recipe name, category name, and source label.
- Responsive: 3-column grid ≥1024px, 2 columns 640–1023px, 1 column below
  that; hero height reduces on phones; category pills scroll horizontally
  on narrow screens instead of wrapping into many rows.
- Empty state ("לא נמצאו מתכונים") when a filter + search combination
  matches nothing.
- Everything keyboard-focusable gets the design system's accent focus ring
  instead of the browser default.

Of the 21 seeded recipes, one has a real source link (a beef recipe from
lizapanelim.com); the rest have `url: "#"` and the label "הוסיפי לינק" as
placeholders for you to fill in via `js/recipes-data.js`.

## Publishing for free with GitHub Pages

This gets the site a real, permanent URL at no cost — no credit card, ever.

1. **Create a free GitHub account** at github.com, if you don't have one.
2. **Create a new repository**: click the **+** in the top-right corner →
   *New repository*. Give it a name (e.g. `recipes`), leave it **Public**,
   and click *Create repository*.
3. **Upload the site**: on the new repo's page, click *uploading an existing
   file* (or *Add file → Upload files*). Drag the whole `recipe-site` folder
   — the one this README is in — into the upload area. GitHub keeps the
   folder structure. Scroll down and click *Commit changes*.
4. **Turn on Pages**: in the repo, go to *Settings → Pages* (left sidebar).
   Under "Build and deployment", set **Source** to *Deploy from a branch*,
   pick the **main** branch and **/ (root)**, then *Save*.
5. Wait a minute or two, then refresh that Pages settings page — it will
   show your live URL: `https://<your-username>.github.io/<repo-name>/`.
   That's the link to share.

Any time you push a change (see below), the live site updates automatically
within a minute or two — no redeploy step.

### Updating recipes once it's live

You chose to keep editing `js/recipes-data.js` directly, and GitHub's own
web editor makes that possible with **no software to install**:

1. In the repo on github.com, click into `js/recipes-data.js`.
2. Click the pencil (✎) icon in the top-right of the file view to edit it
   in the browser.
3. Add your recipe to the `RECIPES` array (see the comment at the top of the
   file for the exact fields), or edit `CATEGORIES`.
4. Scroll down and click *Commit changes* — the live site picks it up
   automatically.

To add a recipe photo: open the `assets/recipes/` folder in the repo, use
*Add file → Upload files* to add the image, then reference its path (e.g.
`assets/recipes/kubeh.jpg`) in that recipe's `photoUrl` the same way.

### Staying at zero cost

GitHub Pages' free tier (a soft 100GB/month bandwidth guideline) is far more
than a personal recipe site will ever use, and there is no paid tier it
silently upgrades you into — nothing here can generate a bill. Just don't
add a custom domain name (that's the only part of this setup that costs
money, since domain names are purchased separately); the free
`github.io` address works perfectly well and costs nothing indefinitely.
