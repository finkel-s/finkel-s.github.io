document.querySelectorAll('div.listing-category').forEach(el => {
  el.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      node.textContent = '';
    }
  });
});
