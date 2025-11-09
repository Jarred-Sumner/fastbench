const el = document.createElement("div");
el.innerHTML = "Hello world!";

setProps2(el, {
  id: "foo",
  "data-custom": "test",
  style: {
    display: "block",
    color: "orange",
    background: "white",
  },
  onclick(e) {
    console.log("click", e);
  },
});

setProps2(el, {
  id: undefined,
  "data-custom": "test2",
  style: {
    display: "block",
    color: "red",
    background: undefined,
  },
  onclick(e) {
    console.log("click", e);
  },
});