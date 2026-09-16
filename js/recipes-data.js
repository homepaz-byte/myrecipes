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
    photoUrl: "https://lizapanelim.com/wp-content/uploads/2013/06/0fe43zy1hveygd9x6qsf.jpg.webp",
  },
  {
    name: "עוגת קפה ושוקולד",
    category: "עוגות בחושות",
    sourceLabel: "adikosh.co.il",
    url: "https://adikosh.co.il/pound-cake/%D7%A2%D7%95%D7%92%D7%AA-%D7%A7%D7%A4%D7%94-%D7%95%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93/",
    photoUrl: "https://adikosh.co.il/wp-content/uploads/2020/10/IMG-8896.jpg",
  },
  {
    name: "עוגת גזר וקרם גבינת שמנת",
    category: "עוגות בחושות",
    sourceLabel: "naamagaon.com",
    url: "https://www.naamagaon.com/%D7%9B%D7%9C-%D7%94%D7%9E%D7%AA%D7%9B%D7%95%D7%A0%D7%99%D7%9D/%D7%A2%D7%95%D7%92%D7%AA-%D7%92%D7%96%D7%A8-%D7%95%D7%A7%D7%A8%D7%9D-%D7%92%D7%91%D7%99%D7%A0%D7%AA-%D7%A9%D7%9E%D7%A0%D7%AA/",
    photoUrl: "assets/recipes/carrot-cake-naamagaon.jpg.webp",
  },
  {
    name: "מאפינס אוכמניות וקראמבל",
    category: "עוגות בחושות",
    sourceLabel: "naamagaon.com",
    url: "https://www.naamagaon.com/%D7%9B%D7%9C-%D7%94%D7%9E%D7%AA%D7%9B%D7%95%D7%A0%D7%99%D7%9D/%D7%9E%D7%90%D7%A4%D7%99%D7%A0%D7%A1-%D7%90%D7%95%D7%9B%D7%9E%D7%A0%D7%99%D7%95%D7%AA-%D7%95%D7%A7%D7%A8%D7%90%D7%9E%D7%91%D7%9C/",
    photoUrl: "assets/recipes/blueberry-muffins-naamagaon.jpg.webp",
  },
  {
    name: "עוגת יוגורט לימון",
    category: "עוגות בחושות",
    sourceLabel: "lizapanelim.com",
    url: "https://lizapanelim.com/%D7%A2%D7%95%D7%92%D7%AA-%D7%99%D7%95%D7%92%D7%95%D7%A8%D7%98-%D7%9C%D7%99%D7%9E%D7%95%D7%9F/",
    photoUrl: "https://lizapanelim.com/wp-content/uploads/2020/07/DSCF6119.jpg.webp",
  },
  {
    name: "עוגת תפוחים בחושה",
    category: "עוגות בחושות",
    sourceLabel: "naamagaon.com",
    url: "https://www.naamagaon.com/%D7%9B%D7%9C-%D7%94%D7%9E%D7%AA%D7%9B%D7%95%D7%A0%D7%99%D7%9D/%D7%A2%D7%95%D7%92%D7%AA-%D7%AA%D7%A4%D7%95%D7%97%D7%99%D7%9D-%D7%91%D7%97%D7%95%D7%A9%D7%94/",
    photoUrl: "assets/recipes/apple-cake-naamagaon.webp",
  },
  {
    name: "מיני בייגלה ירושלמי",
    category: "לחמים",
    sourceLabel: "kerenagam.co.il",
    url: "https://kerenagam.co.il/%D7%9E%D7%99%D7%A0%D7%99-%D7%91%D7%99%D7%99%D7%92%D7%9C%D7%94-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%9E%D7%99/",
    photoUrl: "https://kerenagam.co.il/wp-content/uploads/2019/09/IMG_4053.jpg",
  },
  {
    name: "לחם גרעינים דרום אפריקני",
    category: "לחמים",
    sourceLabel: "bazekalim.com",
    url: "https://www.bazekalim.com/2016/11/26/nelson-ish-bread/",
    photoUrl: "https://storage.googleapis.com/bazekalim-images/nelson/nelson.jpg",
  },
  {
    name: "פוקאצ'ה ללא לישה",
    category: "לחמים",
    sourceLabel: "naamagaon.com",
    url: "https://www.naamagaon.com/%D7%9B%D7%9C-%D7%94%D7%9E%D7%AA%D7%9B%D7%95%D7%A0%D7%99%D7%9D/%D7%A4%D7%95%D7%A7%D7%90%D7%A6%D7%94-%D7%9C%D7%9C%D7%90-%D7%9C%D7%99%D7%A9%D7%94/",
    photoUrl: "assets/foccacia.jpg",
  },
  {
    name: "לחם עדשים כתומות ושמחה בלב",
    category: "לחמים",
    sourceLabel: "essyroz.com",
    url: "https://www.essyroz.com/gluten-free-lentils-bread/",
    photoUrl: "https://www.essyroz.com/wp-content/uploads/2023/12/WhatsApp-Image-2024-04-16-at-21.40.33-1140x1520.jpeg",
  },
  {
    name: "מתכון לאורז ערבי עם בשר טחון",
    category: "בקר",
    sourceLabel: "mako.co.il",
    url: "https://www.mako.co.il/food-meals/one_pot_recipes/Recipe-6e20e6514f79a31006.htm",
    photoUrl: "https://img.mako.co.il/2023/10/14/rice_beef_after_autoOrient_w.jpg",
  },
  {
    name: "רוטב במבה קארי",
    category: "עוף",
    sourceLabel: "danamoyalreicher.com",
    url: "http://danamoyalreicher.com/products/%D7%A8%D7%95%D7%98%D7%91-%D7%91%D7%9E%D7%91%D7%94-%D7%A7%D7%90%D7%A8%D7%99/",
    photoUrl: "https://www.danamoyalreicher.com/assets/img/rotev-bamba-curry_ig.jpg",
  },
  {
    name: "פרגיות ואורז אדום בסיר אחד",
    category: "פרגית",
    sourceLabel: "lichtenstadt.com",
    url: "https://www.lichtenstadt.com/2026/01/%d7%a4%d7%a8%d7%92%d7%99%d7%95%d7%aa-%d7%95%d7%90%d7%95%d7%a8%d7%96-%d7%90%d7%93%d7%95%d7%9d-%d7%91%d7%a1%d7%99%d7%a8-%d7%90%d7%97%d7%93-%d7%90%d7%a8%d7%95%d7%97%d7%aa-%d7%a2%d7%a8%d7%91-%d7%9e/",
    photoUrl: "https://www.lichtenstadt.com/wp-content/uploads/2026/01/chicken_red_rice_03.jpg",
  },
  {
    name: "שווארמה פטנט",
    category: "פרגית",
    sourceLabel: "limortiroche.com",
    url: "https://limortiroche.com/2020/11/bakedshawarma/",
    photoUrl: "https://limortiroche.com/wp-content/uploads/2020/11/%D7%A9%D7%95%D7%95%D7%90%D7%A8%D7%9E%D7%94-%D7%A4%D7%98%D7%A0%D7%98-2.jpg",
  },
  {
    name: "עוגיות שוקולד צ'יפ של ז'אק טורס",
    category: "עוגיות",
    sourceLabel: "naamagaon.com",
    url: "https://www.naamagaon.com/%D7%9B%D7%9C-%D7%94%D7%9E%D7%AA%D7%9B%D7%95%D7%A0%D7%99%D7%9D/%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA-%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93-%D7%A6%D7%99%D7%A4-%D7%A9%D7%9C-%D7%96%D7%90%D7%A7-%D7%98%D7%95%D7%A8%D7%A1/",
    photoUrl: "assets/recipes/cookie.jpeg",
  },
  {
    name: "עוגיות שורטברד עם פצפוצי שוקולד וקצת מלח",
    category: "עוגיות",
    sourceLabel: "naamagaon.com",
    url: "https://www.naamagaon.com/%D7%9B%D7%9C-%D7%94%D7%9E%D7%AA%D7%9B%D7%95%D7%A0%D7%99%D7%9D/%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA-%D7%A9%D7%95%D7%A8%D7%98%D7%91%D7%A8%D7%93-%D7%A2%D7%9D-%D7%A4%D7%A6%D7%A4%D7%95%D7%A6%D7%99-%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93-%D7%95%D7%A7%D7%A6%D7%AA-%D7%9E%D7%9C%D7%97/",
    photoUrl: "assets/recipes/cookie2.webp",
  },
  {
    name: "בראוניז פרווה ב-10 דקות הכנה",
    category: "עוגיות",
    sourceLabel: "nikib.co.il",
    url: "https://nikib.co.il/cakes-dessert/15733/",
    photoUrl: "https://nikib.co.il/wp-content/uploads/IMG_35271-1.jpg?v=1637774026",
  },
];
