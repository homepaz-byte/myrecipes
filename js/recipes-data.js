/* ============================================================================
   מתכונים שיעל אוהבת במיוחד — recipe & category data
   ============================================================================
   This is the only file you should need to touch to keep the site up to date.
   No build step, no server — just edit this file and refresh the page.

   ── Adding a recipe ──────────────────────────────────────────────────────
   Add an object to the RECIPES array below:

     {
       name: "שם המתכון",              // shown as the card title
       category: "עוף",                // must match a CATEGORIES name exactly
       sourceLabel: "example.com",     // shown on the button, e.g. the site's domain
       url: "https://example.com/...", // opens in a new tab when clicked
       photoUrl: "assets/recipes/my-photo.jpg"  // optional — omit or set to null
                                                 // to show a placeholder instead
     }

   Recipe photos: drop image files into assets/recipes/ and point photoUrl at
   them (or use any external image URL). Target size ≥ 700×440px (about 16:10)
   so they fill the 340×210 card frame cleanly without upscaling.

   ── Adding/renaming a category ───────────────────────────────────────────
   Edit the CATEGORIES array. Order here is the order the pills are shown in.
   ========================================================================== */

const CATEGORIES = [
  { name: "עוף", emoji: "🍗" },
  { name: "בקר", emoji: "🥩" },
  { name: "פרגית", emoji: "🍢" },
  { name: "תוספות חמות", emoji: "🥘" },
  { name: "מאפים", emoji: "🥐" },
  { name: "פשטידות", emoji: "🥧" },
  { name: "לחמים", emoji: "🍞" },
  { name: "עוגות בחושות", emoji: "🍰" },
  { name: "עוגיות", emoji: "🍪" },
  { name: "קינוחים קרים", emoji: "🍨" },
];

const RECIPES = [
  {
    name: "קציצות ברוטב אדום עם פירה",
    category: "בקר",
    sourceLabel: "lizapanelim.com",
    url: "https://lizapanelim.com/%D7%A7%D7%A6%D7%99%D7%A6%D7%95%D7%AA-%D7%91%D7%A8%D7%95%D7%98%D7%91-%D7%90%D7%93%D7%95%D7%9D-%D7%A2%D7%9D-%D7%A4%D7%99%D7%A8%D7%94/",
      photoUrl: https://lizapanelim.com/wp-content/uploads/2013/06/0fe43zy1hveygd9x6qsf.jpg.webp
  },
];
