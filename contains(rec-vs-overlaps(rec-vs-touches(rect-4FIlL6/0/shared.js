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

// Check if rectangle a contains rectangle b
// Each object (a and b) should have 2 properties to represent the
// top-left corner (x1, y1) and 2 for the bottom-right corner (x2, y2).
function contains(a, b) {
  return !(
    b.left < a.left ||
    b.top < a.top ||
    b.right > a.right ||
    b.bottom > a.bottom
  );
}

// Check if rectangle a overlaps rectangle b
// Each object (a and b) should have 2 properties to represent the
// top-left corner (x1, y1) and 2 for the bottom-right corner (x2, y2).
function overlaps(a, b) {
  // no horizontal overlap
  if (a.left >= b.right || b.left >= a.right) return false;

  // no vertical overlap
  if (a.top >= b.bottom || b.top >= a.bottom) return false;

  return true;
}

// Check if rectangle a touches rectangle b
// Each object (a and b) should have 2 properties to represent the
// top-left corner (x1, y1) and 2 for the bottom-right corner (x2, y2).
function touches(a, b) {
  // has horizontal gap
  if (a.left > b.right || b.left > a.right) return false;

  // has vertical gap
  if (a.top > b.bottom || b.top > a.bottom) return false;

  return true;
}