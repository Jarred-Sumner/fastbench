const rectA = {
  left:   10,
  top:    10,
  right:  30,
  bottom: 30
};

const rectB = {
  left:   20,
  top:    20,
  right:  50,
  bottom: 50
};

const rectC = {
  left:   70,
  top:    70,
  right:  90,
  bottom: 90
};

function intersectRect(r1, r2) {
  return !(r2.left > r1.right || 
           r2.right < r1.left || 
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}

function intersect(a, b) {
  return (a.left <= b.right &&
          b.left <= a.right &&
          a.top <= b.bottom &&
          b.top <= a.bottom)
}

function intersect3(a, b) {
  return Math.max(a.left, b.left) < Math.min(a.right, b.right) &&
          Math.max(a.top, b.top) < Math.min(a.bottom, b.bottom);
}