// IMPORT: runs before all benchmarks
// Create a container and helper functions for clean, reproducible DOM work.

const CONTAINER_ID = 'benchmark-container';
let container = document.getElementById(CONTAINER_ID);

if (!container) {
  container = document.createElement('div');
  container.id = CONTAINER_ID;
  // Keep the container offscreen to avoid layout thrash affecting timings
  container.style.position = 'fixed';
  container.style.left = '-9999px';
  container.style.top = '0';
  document.body.appendChild(container);
}

// Common props to apply to each element. Keep consistent across both tests.
const PROPS = {
  className: 'item',
  title: 'benchmark item',
  dataset: { role: 'test' },
  textContent: 'Hello',
  ariaLabel: 'hello',
};

// Helper to apply props to a newly created element.
// We avoid style/layout-heavy changes; keep operations comparable and cheap.
function applyProps(el, props) {
  el.className = props.className;
  el.title = props.title;
  el.textContent = props.textContent;
  el.setAttribute('aria-label', props.ariaLabel);
  // dataset is slightly different; set explicitly
  el.dataset.role = props.dataset.role;
}

// Ensure container is empty at the start of each benchmark run
function resetContainer() {
  // Fast clear: replace with a fresh element to avoid potential GC impact from innerHTML = ''
  const fresh = document.createElement('div');
  fresh.id = CONTAINER_ID;
  fresh.style.position = container.style.position;
  fresh.style.left = container.style.left;
  fresh.style.top = container.style.top;
  container.replaceWith(fresh);
  container = fresh;
}
