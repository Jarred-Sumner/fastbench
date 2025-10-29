function create() {
  const el = document.createElement("div")
  el.style.backgroundColor = "red"
  el.innerText = "test"
  return el
}

const tmp = document.createElement("div")
function clone() {
  const el = tmp.cloneNode()
  el.style.backgroundColor = "red"
  el.innerText = "test"
  return el
}

function t(html) {
  let node;
  const create = () => {
    const t = document.createElement('template')
    t.innerHTML = html
    return t.content.firstChild
  }
  return () => (node || (node = create())).cloneNode(true);
}
const template = t("<div style='background-color:red'>test</div>")
