let array1 = ["11", "22", "33"];
let array2 = ["11", "22", "33"];

const compareArrays1 = (a, b) =>
  a.length === b.length &&
  a.every((element, index) => element === b[index]);
  
const compareArrays2 = (a, b) => {
  if (a.length !== b.length) return false;
  else {
    // Comparing each element of your array
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};