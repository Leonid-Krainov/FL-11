//0
function getNumbers(str) {
  let numbers = str.match(/\d/g);
  if (!numbers) {
    return [];
  } else {
    return numbers.map(Number);
  }
}
getNumbers('string');
getNumbers('n1um3ber95');
//1
function findTypes() {
  let result = new Object();
  for (var i = 0; i < arguments.length; i++) {
    let type = typeof arguments[i];
    if (!result.hasOwnProperty(type)) {
      result[type] = 1;
    } else {
      result[type]++;
    }
  }
  return result;
}
findTypes('number');
findTypes(null, 5, 'hello');
//2
function executeforEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}
executeforEach([1, 2, 3], function (el) {
  console.log(el);
});
//3
function mapArray(arr, func) {
  let newArr = [];
  executeforEach(arr, function (i) {
    newArr.push(func(i));
  });
  return newArr;
}
mapArray([2, 5, 8], function (el) {
  return el + 3;
});
//4
function filterArray(arr, func) {
  var changedArr = [];
  executeforEach(arr, function (i) {
    if (func(i)) {
      changedArr.push(i);
    }
  });
  return changedArr;
}
filterArray([2, 5, 8], function (el) {
  return el > 3;
});
//5
function showFormattedDate(date) {
  let month = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
  return `Date: ${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));
//6
function canConvertToDate(date) {
  return !!Date.parse(date);
}
canConvertToDate('2016-13-18T00:00:00');
canConvertToDate('2016-03-18T00:00:00');
//7
function daysBetween(date1, date2) {
  return Math.ceil((Date.parse(date2) - Date.parse(date1)) / (1000 * 60 * 60 * 24));
}
daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));
//8
let data = [{
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];

function getAmountOfAdultPeople(data) {
  function older(el) {
    let currentDate = new Date().toISOString();
    let age = daysBetween(el.birthday,currentDate);
    return age > 18 * 365;
  }
  return filterArray(data, older).length;
}
getAmountOfAdultPeople(data);
//9
function keys(obj) {
  var arr = [];
  for (var prop in obj) {
    arr.push(prop);
  }
  return arr;
}
keys({
  keyOne: 1,
  keyTwo: 2,
  keyThree: 3
});
//10
function values(obj) {
  var arr = [];
  for (var prop in obj) {
    arr.push(obj[prop]);
  }
  return arr;
}
values({
  keyOne: 1,
  keyTwo: 2,
  keyThree: 3
});