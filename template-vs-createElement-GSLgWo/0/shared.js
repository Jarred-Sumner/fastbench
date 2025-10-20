function template(html) {
  let node;
  const create = () => {
    const t = document.createElement('template')
    t.innerHTML = html
    return t.content.firstChild
  }
  return () => (node || (node = create())).cloneNode(true);
}
let h1Template= template(`<h1></h1>`);