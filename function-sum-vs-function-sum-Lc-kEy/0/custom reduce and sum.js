function reduce(array, callbackfnx, initialValue = undefined) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callbackfn(accumulator, array[i], i, array);
    }
    return accumulator;
}

function sum(array) {
      let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const s = sum(array);
console.log(s);