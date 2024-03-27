let queries = [];
const partner = [
  {id: 0, languageRegion: [['deu', 'de'], ['eng', 'en']]},
  {id: 1, languageRegion: [['deu', 'de']]},
  {id: 2, languageRegion: [['eng', 'en']]},
  {id: 3, languageRegion: [['deu', 'de'], ['eng', 'en']]},
  {id: 4, languageRegion: [['deu', 'de'], ['eng', 'en']]},
  {id: 5, languageRegion: [['eng', 'en']]},
  {id: 6, languageRegion: [['eng', 'en']]},
  {id: 7, languageRegion: [['deu', 'de']]},
  {id: 8, languageRegion: [['deu', 'de']]},
  {id: 9, languageRegion: [['deu', 'de'], ['eng', 'en']]},
];

const trigger = [
  {id: 0, language: "deu"},
  {id: 1, language: "deu"},
  {id: 2, language: "deu"},
  {id: 3, language: "eng"},
  {id: 4, language: "eng"},
  {id: 5, language: "deu"},
  {id: 6, language: "eng"},
  {id: 7, language: "deu"},
  {id: 8, language: "deu"},
  {id: 9, language: "deu"},
];
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