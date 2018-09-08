function calculateRectangleArea(length, width){
  if (length > 0 && width > 0){
    return length * width;
  } else {
    return undefined;
  }
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(-1, 0));    // should print undefined

function calculateCircleArea(radius){
  if (radius >= 0){
    return Math.PI * (radius * radius);
  } else {
    return "undefined";
  }
}
console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined