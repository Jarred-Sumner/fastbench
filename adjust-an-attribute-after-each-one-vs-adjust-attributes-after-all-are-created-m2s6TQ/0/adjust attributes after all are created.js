// B

// Create 1000 elements, append to container, and adjust attributes after all are created.
resetBenchContainer();
const container = getBenchContainer();
const COUNT = 1000;

const frag = document.createDocumentFragment();
const elements = new Array(COUNT);

for (let i = 0; i < COUNT; i++) {
  const el = document.createElement('div');
  el.textContent = 'item ' + i;
  frag.appendChild(el);
  elements[i] = el;
}

container.appendChild(frag);

// Batch adjust attributes after all are in the DOM
for (let i = 0; i < COUNT; i++) {
  const el = elements[i];
  el.setAttribute('data-ready', '1');
  el.classList.toggle('flag', (i % 2) === 0);
}
