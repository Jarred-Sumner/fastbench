Array.prototype.mapArray = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.mapArray(function(number) {
    return number * number;
});
///console.log(squaredNumbers); // [1, 4, 9, 16, 25]


