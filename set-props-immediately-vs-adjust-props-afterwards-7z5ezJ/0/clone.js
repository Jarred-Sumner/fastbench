resetContainer();

const COUNT = 1000;
const template = document.createElement('div');

const frag = document.createDocumentFragment();
for (let i = 0; i < COUNT; i++) {
  const el = template.cloneNode(false);
el.className = 'item';
el.title = 'benchmark item';
el.setAttribute('aria-label', 'hello');
el.dataset.role = 'test';
  el.textContent = 'Hello';
  el.setAttribute('data-index', String(i));
  frag.appendChild(el);
}

container.appendChild(frag);
container.childElementCount
