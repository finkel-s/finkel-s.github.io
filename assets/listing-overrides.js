window.addEventListener("DOMContentLoaded", function () {
  window.filterListingCategory = function (category) {
    const listingIds = Object.keys(window["quarto-listings"]);
    for (const listingId of listingIds) {
      const list = window["quarto-listings"][listingId];
      if (list) {
        if (category === "") {
          list.filter();
        } else {
          list.filter(function (item) {
            const itemValues = item.values();
            if (itemValues.categories !== null) {
              const categories = itemValues.categories;
              return categories.includes(category);
            } else {
              return false; // <- minimal fix: don't reference an undefined variable
            }
          });
        }
      }
    }
  };
});

// minimal: apply filter if URL has #category=... (works on paste/load)
window.addEventListener("load", function () {
  if (!location.hash) return;
  const params = new URLSearchParams(location.hash.slice(1));
  const raw = params.get("category");
  if (!raw) return;
  const decoded = decodeURIComponent(raw).replace(/\+/g, " ");
  window.filterListingCategory(decoded);
});