let mulai = 2

while(mulai <= 20) {

  console.log(mulai + ' - I love coding');
  mulai+=2
}



while(mulai > 2) {

  mulai-=2
  console.log(mulai + ' - I will become fullstack developer' );

}

console.log('\n');

for(var i = 1; i <= 20; i++) {

  console.log(i + ' - I love coding');

}

for(var j = 20; j > 0; j--) {

  console.log(j + ' - I will become fullstack developer');

}

console.log('\n');

for(var k = 1; k<= 100; k++) {

  if(k % 2 === 0) {
    console.log(k + ' adalah angka genap');
  }else {
    console.log(k + ' adalah angka ganjil');
  }

}

console.log('\n');

for(var l = 1; l<= 100; l+=2) {

  if(l % 3 === 0) {
    console.log(l + ' kelipatan 3');
  }

}

console.log('\n');

for(var m = 1; m<= 100; m+=5) {

  if(m % 6 === 0) {
    console.log(m + ' kelipatan 6');
  }

}

console.log('\n');

for(var n = 1; n<=100; n+=9) {

  if(n % 10 === 0) {
    console.log(n + ' kelipatan 10');
  }

}
