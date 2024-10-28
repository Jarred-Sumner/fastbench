const [headRow, alignmentsRow, ...tbody] = input.trim().split("\n");
const thead = headRow
    .split("|")
    .filter(c => c)
    .map((col) => col.trim());
  const alignments = alignmentsRow
    .split("|")
    .filter(c => c)
    .map((col) => {
      const trimmedCol = col.trim();
      if (trimmedCol.startsWith(":") && trimmedCol.endsWith(":"))
        return "center";
      if (trimmedCol.endsWith(":")) return "right";
      if (trimmedCol.startsWith(":")) return "left";
      return "";
    });
    
  const body = tbody.map((line) => ({
          type: "element",
          tagName: "tr",
          children: line
            .split("|")
            .filter(c => c)
            .map((col, index) => ({
              type: "element",
              tagName: "td",
              children: [],
              properties: new Map([["align", `${alignments[index]}`]]),
            })),
        }))