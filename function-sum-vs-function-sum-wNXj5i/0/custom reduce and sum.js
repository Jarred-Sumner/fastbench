function reduce(array, callbackfn, initialValue = undefined) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callbackfn(accumulator, array[i], i, array);
    }
    return accumulator;
}

function sum(array) {
return reduce(array, (a, b) => a + b, 0);
}
const s = sum(array);
console.log(s);