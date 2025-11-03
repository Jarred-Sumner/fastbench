const out = [];
for (const child of array) {
  const built = build(child, parent);
  if (Array.isArray(built)) {
    for (const nested of built) out.push(nested);
  } else {
    out.push(built);
  }
}