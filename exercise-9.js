function shoutOut (words){

return words

}

console.log(shoutOut('halo function')) // Menampilkan "Halo Function!" di console


console.log('\n');


function calculateMultiply (num1, num2){
  return num1 * num2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

console.log('\n');

function processSentence(name,age,address,hobby){
  // return 'nama saya ' + name +" umur saya " + age + ' tahun, alamat saya di '+ address + ' dan saya punya hobby yaitu' + hobby
  return `nama saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`
}




var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby)
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
