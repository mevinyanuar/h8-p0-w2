
//1.Let's Form a Sentence

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word + ' ' + second + ' ' + third + '' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);

console.log('\n');
//2.Index Accessing - 1 by 1


var word1 = 'wow JavaScript is so cool';
var exampleFirstWord = word1[0] + word1[1] + word1[2];
var secondWord = word1[4] + word1[5] + word1[6] + word1[7] + word1[8] + word1[9] + word1[10] + word1[11] + word1[12] + word1[13]
var thirdWord = word1[15] + word1[16]
var fourthWord = word1[18] + word1[19]
var fifthWord = word1[21] + word1[22] + word1[23] + word1[24]

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

console.log('\n');
//3.Breaking Sentence (Again) using Substring

var word2 = 'wow JavaScript is so cool';
var exampleFirstWord1 = word2.substring(0, 3);
var secondWord1 = word2.substring(4, 14)
var thirdWord1 =word2.substring(15, 17)
var fourthWord1 =word2.substring(18, 20)
var fifthWord1 =word2.substring(21, 25)

console.log('First Word: ' + exampleFirstWord1);
console.log('Second Word: ' + secondWord1);
console.log('Third Word: ' + thirdWord1);
console.log('Fourth Word: ' + fourthWord1);
console.log('Fifth Word: ' + fifthWord1);

console.log('\n');

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14);
var thirdWord4 = word4.substring(15, 17);
var fourthWord4 = word4.substring(18, 20);
var fifthWord4 = word4.substring(21, 25);

var firstWordLength = exampleFirstWord4.length;
var secondWordLength = secondWord4.length
var thirdWordLength = thirdWord4.length
var fourthWordLength = fourthWord4.length
var fifthWordLength = fifthWord4.length

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4+ ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4+ ', with length: ' + fifthWordLength);
