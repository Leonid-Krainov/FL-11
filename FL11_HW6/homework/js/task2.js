let side1 = prompt('Enter first side of triangle');
let side2 = prompt('Enter second side of triangle');
let side3 = prompt('Enter third side of triangle');
let type = '';
let a = parseFloat(side1);
let b = parseFloat(side2);
let c = parseFloat(side3);
if (side1 && side2 && side3 && !side1.match(/[^0-9.,]/g) && !side2.match(/[^0-9.,]/g) && !side3.match(/[^0-9.,]/g)) {
  if (a === b && b === c) {
    type = 'Equivalent triangle';
  } else if (a === b || a === c || b === c) {
    type = 'Isosceles triangle';
  } else if (a < b + c && b < a + c && c < a + b && a + b + c > 0){
    type = 'Normal triangle';
  } else {
    console.log('Triangle doesn’t exist');
  }
  console.log(type);
} else {
  console.log('Incorrect data!');
}