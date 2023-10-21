const o = {3: "merah", 2: "biru", 1: "hijau", 5: "kuning", 4: "hitam"};
const x = new Map();
x.set(3, "merah");
x.set(2, "biru");
x.set(1, "hijau");
x.set(5, "kuning");
x.set(4, "hitam");
let f = i => {
  if(i === 3){
  console.log("merah");
} else if(i === 2){
  console.log("biru");
} else if(i === 1){
  console.log("hijau");
} else if(i === 5){
  console.log("kuning");
} else if(i === 4){
  console.log("hitam");
}
}