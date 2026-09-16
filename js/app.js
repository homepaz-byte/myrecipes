/* מתכונים שיעל אוהבת במיוחד — direction 2a behavior.
   Single-select category filter + live text search, AND-combined.
   No build step: reads CATEGORIES / RECIPES from js/recipes-data.js. */
(function () {
  "use strict";

  var state = {
    category: CATEGORIES[0].name,
    query: "",
  };

  var categoryRow = document.getElementById("category-row");
  var grid = document.getElementById("recipe-grid");
  var countEl = document.getElementById("result-count");
  var searchInput = document.getElementById("search-input");

  function emojiFor(categoryName) {
    for (var i = 0; i < CATEGORIES.length; i++) {
      if (CATEGORIES[i].name === categoryName) return CATEGORIES[i].emoji;
    }
    return "";
  }

  function matchesQuery(recipe, query) {
    if (!query) return true;
    var q = query.toLowerCase();
    return (
      recipe.name.toLowerCase().indexOf(q) > -1 ||
      recipe.category.toLowerCase().indexOf(q) > -1 ||
      (recipe.sourceLabel || "").toLowerCase().indexOf(q) > -1
    );
  }

  function getVisible() {
    var query = state.query.trim();
    return RECIPES.filter(function (r) {
      return r.category === state.category && matchesQuery(r, query);
    });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
      );
    });
  }

  function renderCategories() {
    categoryRow.innerHTML = "";
    CATEGORIES.forEach(function (cat) {
      var btn = document.createElement("button");
      var isActive = cat.name === state.category;
      btn.type = "button";
      btn.className = "pill" + (isActive ? " is-active" : "");
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      btn.textContent = cat.emoji + " " + cat.name;
      btn.addEventListener("click", function () {
        if (state.category === cat.name) return;
        state.category = cat.name;
        render();
      });
      categoryRow.appendChild(btn);
    });
  }

  function cardHtml(recipe) {
    var photoHtml = recipe.photoUrl
      ? '<img src="' + escapeHtml(recipe.photoUrl) + '" alt="' + escapeHtml(recipe.name) + '">'
      : '<div class="recipe-card__photo-placeholder" role="img" aria-label="אין עדיין תמונה למתכון זה">' +
        emojiFor(recipe.category) +
        "</div>";

    return (
      '<article class="recipe-card">' +
        '<div class="recipe-card__photo">' +
          photoHtml +
          '<span class="recipe-card__badge">' + emojiFor(recipe.category) + " " + escapeHtml(recipe.category) + "</span>" +
        "</div>" +
        '<div class="recipe-card__body">' +
          '<h3 class="recipe-card__title">' + escapeHtml(recipe.name) + "</h3>" +
          '<a class="recipe-card__source" href="' + escapeHtml(recipe.url) + '" target="_blank" rel="noopener">' +
            escapeHtml(recipe.sourceLabel) + ' <span aria-hidden="true">↗</span>' +
          "</a>" +
        "</div>" +
      "</article>"
    );
  }

  function render() {
    renderCategories();
    var visible = getVisible();
    countEl.textContent = "מציג " + visible.length + " מתכונים";
    grid.innerHTML = visible.length
      ? visible.map(cardHtml).join("")
      : '<p class="empty-state">לא נמצאו מתכונים</p>';
  }

  searchInput.addEventListener("input", function (e) {
    state.query = e.target.value;
    render();
  });

  render();
})();
