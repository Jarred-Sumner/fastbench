// B: Create 1000 elements first; then adjust props afterwards; append via fragment
resetContainer();

const COUNT = 1000;
const elements = new Array(COUNT);
const frag = document.createDocumentFragment();

// Phase 1: create elements only
for (let i = 0; i < COUNT; i++) {
  elements[i] = document.createElement('div');
}

// Phase 2: adjust props for all elements
for (let i = 0; i < COUNT; i++) {
  const el = elements[i];
  applyProps(el, PROPS);
  el.setAttribute('data-index', String(i));
  frag.appendChild(el);
}

container.appendChild(frag);

// Return number of children to confirm work done
container.childElementCount
