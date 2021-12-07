const subject = new rxjs.BehaviorSubject(0)

const pipedSubject = subject.pipe(
  rxjs.filter(a => a % 2 === 0),
  rxjs.map(b => ({value: b})),
);

pipedSubject.subscribe((value) => {
  // value
});

// Trigger value changes
for (const i of array) {
  subject.next(i);
}

subject.complete();
