const regex1 = /(foo)/g;
const str1 = 'table football, foosball';


function split() {
  return str1.split(regex1);
}

function exec() {
  let array1;
  
  let output = [];
  let lastIndex = 0;
  while ((array1 = regex1.exec(str1)) !== null) {
    output.push(str1.slice(lastIndex, regex1.lastIndex - array1[0].length));
    lastIndex = regex1.lastIndex;
    output.push(array1[0]);
  }
  
  output.push(str1.slice(lastIndex));
  return output;
}