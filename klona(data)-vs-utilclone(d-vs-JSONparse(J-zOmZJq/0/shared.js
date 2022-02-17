import { klona } from "https://cdn.skypack.dev/klona@2.0.4/lite";

let uniqueId = 0;
const util = {
  type(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
  },
  objId(obj) {
    if (!obj["__id"]) {
      Object.defineProperty(obj, "__id", { value: ++uniqueId });
    }
    return obj["__id"];
  },
  clone(o, visited) {
    visited = visited || {};
    var clone;
    var id;
    switch (util.type(o)) {
      case "Object":
        id = util.objId(o);
        if (visited[id]) {
          return visited[id];
        }
        clone = {};
        visited[id] = clone;
        for (var key in o) {
          if (o.hasOwnProperty(key)) {
            clone[key] = util.clone(o[key], visited);
          }
        }
        return clone;
      case "Array":
        id = util.objId(o);
        if (visited[id]) {
          return visited[id];
        }
        clone = [];
        visited[id] = clone;
        o.forEach(function(v, i) {
          clone[i] = util.clone(v, visited);
        });
        return clone;
      default:
        return o;
    }
  }
};

const data = {
  a: 123,
  b: {
    name: "John"
  },
};