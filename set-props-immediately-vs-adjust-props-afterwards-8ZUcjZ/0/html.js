// C: Build HTML string once and insert in a single operation
resetContainer();

const COUNT = 1000;
let html = '';
for (let i = 0; i < COUNT; i++) {
  // Pre-encoded props inline to avoid extra DOM API calls
  // Note: data-* and aria-* attributes are fine to inline
  html += `<div class="item" title="benchmark item" aria-label="hello" data-role="test" data-index="${i}">Hello</div>`;
}

// Use a temporary offscreen container to avoid layout cost
const tmp = document.createElement('div');
tmp.style.position = 'fixed';
tmp.style.left = '-9999px';
tmp.innerHTML = html;

// Move children to a fragment, then append once
const frag = document.createDocumentFragment();
while (tmp.firstChild) frag.appendChild(tmp.firstChild);
container.appendChild(frag);

container.childElementCount
