let a1 = prompt('Enter x-coordinate of A');
let a2 = prompt('Enter y-coordinate of A');
let b1 = prompt('Enter x-coordinate of B');
let b2 = prompt('Enter y-coordinate of B');
let c1 = prompt('Enter x-coordinate of C');
let c2 = prompt('Enter y-coordinate of C');
let result = '';
if (a1 && a2 && b1 && b2 && c1 && c2 &&!a1.match(/[^0-9].,-/g) && !a2.match(/[^0-9.,-]/g) 
&& !b1.match(/[^0-9.,-]/g) && !b2.match(/[^0-9.,-]/g) && !c1.match(/[^0-9.,-]/g) && !c2.match(/[^0-9.,-]/g)) {
  if (b1-c1 === c1-a1 && b2-c2 === c2-a2) {
    console.log('true');
  } else {
    console.log('false');
  }
} else {
  console.log('Incorrect data!');
}