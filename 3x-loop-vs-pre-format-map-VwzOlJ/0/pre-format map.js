let queries = [];

for (const p of partner) {
  const { languageRegion } = p;

  for (const lr of p.languageRegion) {
    const [language] = lr;
    const tList = triggerByLngMap.get(language);
    
    for (const t of tList) {
      if (t.language == language) {
        queries.push({p, t})
      } 
    }
  }
}