let queries = [];

for (const p of partner) {
  const { languageRegion } = p;

  for (const lr of p.languageRegion) {
    const [language] = lr;

    for (const t of trigger) {
      if (t.language == language) {
        queries.push({p, t})
      }
    }   
  }
}