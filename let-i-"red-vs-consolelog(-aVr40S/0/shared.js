const o = {"red": "merah", "blue": "biru", "green": "hijau"};
const x = new Map();
x.set("red", "merah");
x.set("blue", "biru");
x.set("green", "hijau");
let f = i => {
  if(i === "red"){
  console.log("merah");
} else if(i === "blue"){
  console.log("biru");
} else if(i === "green"){
  console.log("hijau");
}
}