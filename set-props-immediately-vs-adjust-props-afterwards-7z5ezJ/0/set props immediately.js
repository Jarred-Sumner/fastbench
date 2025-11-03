// A: Create 1000 elements; set props immediately after each creation; append via fragment
resetContainer();

const COUNT = 1000;
const frag = document.createDocumentFragment();

for (let i = 0; i < COUNT; i++) {
  const el = document.createElement('div');
  applyProps(el, PROPS); // adjust props right after creation
  // Add a few attribute tweaks to simulate typical post-creation adjustments
  el.setAttribute('data-index', String(i));
  frag.appendChild(el);
}

container.appendChild(frag);

// Return number of children to confirm work done
container.childElementCount
