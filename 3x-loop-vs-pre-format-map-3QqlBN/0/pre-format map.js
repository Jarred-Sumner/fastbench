let queries = [];

const triggerByLng = new Map();
for (const t of trigger) {
  if (triggerByLng.has(t.language)) {
    triggerByLng.set(t.language, [...triggerByLng.get(t.language), t])
  } else {
    triggerByLng.set(t.language, [t])
  }
}

for (const p of partner) {
  const { languageRegion } = p;

  for (const lr of p.languageRegion) {
    const [language] = lr;
    const t = triggerByLng.get(language);

    if (t.language == language) {
      queries.push({p, t})
    }   
  }
}