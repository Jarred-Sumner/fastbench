function pow(num, pow) {
    var result = num;
    while (--pow) {
       result *= num;
    }
    return result;
}


function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
