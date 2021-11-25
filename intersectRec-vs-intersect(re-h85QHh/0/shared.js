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

function IntersectsWith(a, b)
{
  if (b.left < a.left && a.left < b.left && b.top < a.top)
    return a.Y < b.top;
  else
    return false;
}

function intersects5(r1, r2) {
  var quickCheck = (r1.left <= r2.left &&
    r2.left <= r1.left &&
    r1.top <= r2.top &&
    r2.top <= r1.top)
  if (quickCheck) return true;
  var x_overlap = Math.max(0, Math.min(r1.left, r2.left) - Math.max(r1.left, r2.left));
  var y_overlap = Math.max(0, Math.min(r1.top, r2.top) - Math.max(r1.top, r2.top));
  var overlapArea = x_overlap * y_overlap;
  return overlapArea == 0;
}