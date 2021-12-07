const iterative = new dxjs.Iterative()

const pipedIterative = iterative.pipe(
  dxjs.filter(a => a % 2 === 0),
  dxjs.map(b => ({value: b})),
);

(async () => {
  for await (const value of pipedIterative) {
    // value
  }
})();

// Trigger value changes
for (const i of array) {
  iterative.next(i);
}

iterative.complete();
