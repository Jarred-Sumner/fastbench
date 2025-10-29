function string() {
  const el = document.createElement("div");
  el.style = "background-color:red;color:orange;width:100px;"
}

function object() {
  const el = document.createElement("div");
  el.style.backgroundColor = "red";
  el.style.color = "orange";
  el.style.width = "100px";
}

function assign() {
  const el = document.createElement("div");
  Object.assign(el, {
    backgroundColor: "red",
    color: "orange",
    width: "100px",
  })
}