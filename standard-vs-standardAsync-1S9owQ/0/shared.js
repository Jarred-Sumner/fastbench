const AsyncFunction = async function () {}.constructor;

function standard(a) {
  return a * 2
}

async function standardAsync(a) {
  return a * 2
}

const generated = new Function("a", "return a * 2");

const generatedAsync = new AsyncFunction("a", "return a * 2");