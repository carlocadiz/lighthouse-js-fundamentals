function range(start, end, step){
  var lightHouseRange = [];
  if (start == undefined || end == undefined || step == undefined){  //console.log("fail");
    return lightHouseRange;
  } else if (start > end){
    return lightHouseRange;
  } else if (step < 0){
    return lightHouseRange;
  } else{
    for ( var i = start; i <= end; i += step){
      lightHouseRange.push(i);
    }
    return lightHouseRange;
  }
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
