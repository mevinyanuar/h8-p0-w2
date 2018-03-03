function balikKata(kata) {

let tempBalikkata = ''

  for (var i = kata.length-1; i>=0; i--) {

    tempBalikkata+=kata[i]

  }
  
return tempBalikkata

}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS


// let nama = 'mevin'
// let tempBalikkata = ''
//
// for(var i = nama.length-1; i>=0; i--){
// tempBalikkata+=nama[i]
//
// }
// console.log(tempBalikkata);


// return kata.split('').reverse().join('')
