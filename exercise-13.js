function xo(str) {
  // you can only write your code here!

  let countX = 0
  let countO = 0

  for (var i = 0; i < str.length; i++) {
    if(str[i] === 'x'){
      countX+=1
    }else{
      countO+=1
    }
  }
  return countO === countX

  // return str.split('o').length === str.split('x').length;


}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
