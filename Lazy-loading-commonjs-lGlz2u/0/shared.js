let i = 0;

const mod = {
  fn() {
    ++i;
  }
};

const fakeRequireCache = new Map()

function fakeRequire(n) {
  if (fakeRequireCache.has(n)) {
    return fakeRequireCache.get(n);
  }

  fakeRequireCache.set(n, mod);
  return fakeRequireCache.get(n);
}

function getLazy(f) {
  let cache;
  return () => (cache ??= f());
}

const mod2 = getLazy(() => mod);