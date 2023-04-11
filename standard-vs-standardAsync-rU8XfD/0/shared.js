const AsyncFunction = async function () {}.constructor;

function standard(a) {
  return a * 2
}

async function standardAsync(a) {
  return a * 2
}

const generated = new Function("a", "return a * 2");

//const generatedAsync = new Function("a", "return Promise.resolve(a * 2)");
const generatedAsync = eval("(a) => a * 2");