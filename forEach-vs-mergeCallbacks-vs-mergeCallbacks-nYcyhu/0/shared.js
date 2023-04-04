function mergeCallbacks(arr) {
  const merger = eval(`(function (collection) {
    ${arr.map((_, i) => `var f${i} = collection[${i}];`).join(" ")}
    return (function () {
      ${arr.map((_, i) => `f${i}();`).join(" ")}
    });
  })`);
  const baked = merger(arr);
  return baked;
}

function mergeCallbacks2(arr) {
  const merger = new Function(
    ...arr.map((_, i) => `f${i}`),
    'return () => {' + arr.map((_, i) => `f${i}();`).join(" ") + '}'
  );
  const baked = merger(...arr);
  return baked;
}

const callbacks = [() => 1, () => 2, () => 3, () => 4];

const mergedCallbacks = mergeCallbacks(callbacks)
const mergedCallbacks2 = mergeCallbacks2(callbacks)