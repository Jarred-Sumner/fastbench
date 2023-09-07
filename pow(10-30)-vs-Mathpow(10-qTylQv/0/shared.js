function pow(num, pow) {
    var result = num;
    while (--pow) {
       result *= num;
    }
    return result;
}