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
              return false;
            }
          });
        }
      }
    }
  };
});