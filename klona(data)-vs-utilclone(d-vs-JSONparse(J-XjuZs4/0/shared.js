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
  'comment': [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: true,
      greedy: true
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true
    }
  ],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\]/
    }
  },
  'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  'boolean': /\b(?:false|true)\b/,
  'function': /\b\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  'punctuation': /[{}[\];(),.:]/
};