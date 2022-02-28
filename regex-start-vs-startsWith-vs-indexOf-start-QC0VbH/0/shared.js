const regexStart = /^test/;
const regexEnd = /test$/;
const match = 'test';
const matchLength = match.length;

var data = [];
const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var TOTAL_STRINGS = 100000;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function makeRandomString(len) {
  var text = "";
  for( var i=0; i < len; i++ ) {
    text += possible.charAt(getRandomInt(possible.length));
  }
  return text;
}

while (data.length < TOTAL_STRINGS) {
  data.push(makeRandomString(getRandomInt(20)));
}