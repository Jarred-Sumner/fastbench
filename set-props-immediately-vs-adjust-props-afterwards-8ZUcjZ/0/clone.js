resetContainer();

const COUNT = 1000;
const template = document.createElement('div');
template.className = 'item';
template.title = 'benchmark item';
template.setAttribute('aria-label', 'hello');
template.dataset.role = 'test';

const frag = document.createDocumentFragment();
for (let i = 0; i < COUNT; i++) {
  const el = template.cloneNode(false);
  el.textContent = 'Hello';
  el.setAttribute('data-index', String(i));
  frag.appendChild(el);
}

container.appendChild(frag);
container.childElementCount
