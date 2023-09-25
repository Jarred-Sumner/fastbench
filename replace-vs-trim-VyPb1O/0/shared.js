const input = `asd`

function trimIf(input) {
  if (input[0] !== ' ') {
    return input;
  }
  
  return input.trim();
}