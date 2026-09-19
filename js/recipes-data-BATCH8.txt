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
  { name: "דג", emoji: "🐟" },
  { name: "מרק", emoji: "🍲" },
  { name: "פסטה", emoji: "🍝" },
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
  {
    name: "קרקר גרעינים ללא גלוטן",
    category: "מאפים",
    sourceLabel: "limortiroche.com",
    url: "https://limortiroche.com/2018/01/cracked-sunflower-seeds/",
    photoUrl: "https://limortiroche.com/wp-content/uploads/2018/01/%D7%A7%D7%A8%D7%A7%D7%A8-%D7%96%D7%A8%D7%A2%D7%99%D7%9D-3-2-1.jpg",
  },
  {
    name: "אורז עם פטריות וערמונים",
    category: "תוספות חמות",
    sourceLabel: "haaretz.co.il",
    url: "https://www.haaretz.co.il/food/touchfood/2018-06-18/ty-article/0000017f-f8e5-d460-afff-fbe70e5a0000",
    photoUrl: "https://img.haarets.co.il/bs/0000017f-f8e5-d460-afff-fbe70e5a0000/3e/c7/1a01eedccf92e3d98eff318f73b5/2471966236.jpg?precrop=1194%2C694%2Cx6%2Cy11&width=1200&height=630&cmsprod=&watermark=htz-2018",
  },
  {
    name: "כמוג'דרה",
    category: "תוספות חמות",
    sourceLabel: "lizapanelim.com",
    url: "https://lizapanelim.com/%D7%9B%D7%9E%D7%95%D7%92%D7%93%D7%A8%D7%94/",
    photoUrl: "https://lizapanelim.com/wp-content/uploads/2019/05/DSCF6276.jpg.webp",
  },
  {
    name: "מאפה סמרטוטים ב-10 דקות",
    category: "פשטידות",
    sourceLabel: "lizapanelim.com",
    url: "https://lizapanelim.com/%D7%9E%D7%90%D7%A4%D7%94-%D7%A1%D7%9E%D7%A8%D7%98%D7%95%D7%98%D7%99%D7%9D-%D7%91-10-%D7%93%D7%A7%D7%95%D7%AA/",
    photoUrl: "https://lizapanelim.com/wp-content/uploads/2020/07/DSCF2111-1200x800.jpg.webp",
  },
  {
    name: "קיש כרשה דל פחמימה",
    category: "פשטידות",
    sourceLabel: "hatafrit.co.il",
    url: "https://www.hatafrit.co.il/lunch-recipes/%D7%A7%D7%99%D7%A9-%D7%9B%D7%A8%D7%A9%D7%94-%D7%93%D7%9C-%D7%A4%D7%97%D7%9E%D7%99%D7%9E%D7%94/",
    photoUrl: "https://static.wixstatic.com/media/c2e503_b4580d53edd04275b6defd18c589d01c~mv2.jpeg/v1/fill/w_1024,h_767,al_c,q_85/WhatsApp%20Image%202023-03-26%20at%2013.03.06.jpeg",
  },
  {
    name: "מרק עדשים ועגבניות טריות",
    category: "מרק",
    sourceLabel: "lichtenstadt.com",
    url: "https://www.lichtenstadt.com/2013/01/blog-pos-12/",
    photoUrl: "https://www.lichtenstadt.com/wp-content/uploads/2013/01/000112.jpg",
  },
  {
    name: "מרק עגבניות צלויות עם קוביות חלומי פריכות",
    category: "מרק",
    sourceLabel: "foody.co.il",
    url: "https://foody.co.il/foody_recipe/%D7%A9%D7%99-%D7%9C%D7%99-%D7%97%D7%95%D7%92%D7%92%D7%AA-%D7%90%D7%AA-%D7%94%D7%97%D7%95%D7%A8%D7%A3-%D7%A2%D7%9D-%D7%9E%D7%A8%D7%A7-%D7%A2%D7%92%D7%91%D7%A0%D7%99%D7%95%D7%AA-%D7%A6%D7%9C%D7%95%D7%99/",
    photoUrl: "assets/recipes/tomato.jpg",
  },
  {
    name: "סלמון שחור",
    category: "דג",
    sourceLabel: "limortiroche.com",
    url: "https://limortiroche.com/2013/04/black-salmon/",
    photoUrl: "https://www.limortiroche.com/wp-content/uploads/2013/04/%D7%A1%D7%9C%D7%9E%D7%95%D7%9F-%D7%A9%D7%97%D7%95%D7%A8.png",
  },
  {
    name: "נודלס וואפו",
    category: "פסטה",
    sourceLabel: "danamoyalreicher.com",
    url: "https://www.danamoyalreicher.com/products/%D7%95%D7%95%D7%90%D7%A4%D7%95-%D7%A0%D7%95%D7%93%D7%9C%D7%A1/",
    photoUrl: "https://www.danamoyalreicher.com/assets/img/IMG_6826_1ec380ae-f245-4d38-abc6-021aff883cdc_f9500571.jpg",
  },
  {
    name: "קציצות עוף רכות ברוטב לימון, דבש וצ'ילי",
    category: "עוף",
    sourceLabel: "krutit.co.il",
    url: "https://www.krutit.co.il/%D7%A7%D7%A6%D7%99%D7%A6%D7%95%D7%AA-%D7%A2%D7%95%D7%A3-%D7%A8%D7%9B%D7%95%D7%AA-%D7%91%D7%A8%D7%95%D7%98%D7%91-%D7%9C%D7%99%D7%9E%D7%95%D7%9F-%D7%93%D7%91%D7%A9-%D7%95%D7%A6%D7%99%D7%9C%D7%99/",
    photoUrl: "https://www.krutit.co.il/wp-content/uploads/2017/03/DSC_0585.jpg",
  },
  {
    name: "ריזוטו דלעת סיציליאני",
    category: "תוספות חמות",
    sourceLabel: "michalwaxman.com",
    url: "https://www.michalwaxman.com/%D7%96%D7%99%D7%9B%D7%A8%D7%95%D7%9F-%D7%A9%D7%9C-%D7%93%D7%9C%D7%A2%D7%AA-%D7%A8%D7%99%D7%96%D7%95%D7%98%D7%95-%D7%93%D7%9C%D7%A2%D7%AA-%D7%A1%D7%99%D7%A6%D7%99%D7%9C%D7%99%D7%90%D7%A0%D7%99/",
    photoUrl: "https://www.michalwaxman.com/wp-content/uploads/2015/10/MG_4690_Fotor.jpg",
  },
  {
    name: "בשר מפורק בבישול ארוך",
    category: "בקר",
    sourceLabel: "elitaofek.co.il",
    url: "https://elitaofek.co.il/%d7%91%d7%a9%d7%a8-%d7%9e%d7%a4%d7%95%d7%a8%d7%a7-%d7%91%d7%91%d7%99%d7%a9%d7%95%d7%9c-%d7%90%d7%a8%d7%95%d7%9a/",
    photoUrl: "https://elitaofek.co.il/wp-content/uploads/2021/08/%D7%91%D7%A9%D7%A8-%D7%9E%D7%A4%D7%95%D7%A8%D7%A7-%D7%91%D7%91%D7%99%D7%A9%D7%95%D7%9C-%D7%90%D7%A8%D7%95%D7%9A2.webp",
  },
  {
    name: "עוגת גבינה באסקית של קפה נורדוי",
    category: "קינוחים קרים",
    sourceLabel: "hashulchan.co.il",
    url: "https://www.hashulchan.co.il/%D7%9E%D7%AA%D7%9B%D7%95%D7%A0%D7%99%D7%9D/%D7%A2%D7%95%D7%92%D7%AA-%D7%92%D7%91%D7%99%D7%A0%D7%94-%D7%91%D7%A1%D7%A7%D7%99%D7%AA-%D7%A9%D7%9C-%D7%A7%D7%A4%D7%94-%D7%A0%D7%95%D7%A8%D7%93%D7%95%D7%99/",
    photoUrl: "https://medias.hashulchan.co.il/www/uploads/2020/05/ha-shulhan0845-1140x641-1594805181.jpg",
  },
  {
    name: "פסטה שמנת, אפונה ובייקון",
    category: "פסטה",
    sourceLabel: "hashulchan.co.il",
    url: "https://www.hashulchan.co.il/%D7%9E%D7%AA%D7%9B%D7%95%D7%A0%D7%99%D7%9D/%D7%A4%D7%A1%D7%98%D7%94-%D7%A9%D7%9E%D7%A0%D7%AA-%D7%90%D7%A4%D7%95%D7%A0%D7%94-%D7%95%D7%91%D7%99%D7%99%D7%A7%D7%95%D7%9F/",
    photoUrl: "https://medias.hashulchan.co.il/www/uploads/2019/07/sarit_goffen-0059-1140x641.jpg",
  },
];
