const input = `asd`

function trimIf(input) {
  const start = input[0];
  const end = input[input.length];
  if (start !== ' ' && start !== '\n' && start !== '\r' && start !== '\t' &&
  end !== ' ' && end !== '\n' && end !== '\r' && end !== '\t') {
    return input;
  }
  
  return input.trim();
}