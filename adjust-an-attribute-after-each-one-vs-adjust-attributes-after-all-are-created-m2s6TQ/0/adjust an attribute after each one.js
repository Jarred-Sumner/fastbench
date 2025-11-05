// A

// Create 1000 elements, append to container, and adjust an attribute after each one.
resetBenchContainer();
const container = getBenchContainer();
const COUNT = 1000;

// Use a DocumentFragment to minimize reflow during appends
const frag = document.createDocumentFragment();

for (let i = 0; i < COUNT; i++) {
  const el = document.createElement('div');
  el.textContent = 'item ' + i;
  // Append first
  frag.appendChild(el);
  // Adjust attribute after creation (per-element)
  // Using setAttribute touches the attribute map; also flips a class to simulate common work
  el.setAttribute('data-ready', '1');
  el.classList.toggle('flag', (i % 2) === 0);
}

container.appendChild(frag);
