function mapArray(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = mapArray(numbers, function(number) {
    return number * number;
});
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
