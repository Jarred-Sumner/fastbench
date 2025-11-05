function getBenchContainer() {
  let container = document.getElementById("aaa");
  if (!container) {
    container = document.createElement('div');
    container.id = "aaa";
    // keep out of view to avoid layout work
    container.style.cssText = 'position:fixed;left:-9999px;top:-9999px;';
    document.body.appendChild(container);
  }
  return container;
};

function resetBenchContainer() {
  const container = getBenchContainer();
  // Remove all children efficiently
  while (container.firstChild) container.removeChild(container.firstChild);
};
