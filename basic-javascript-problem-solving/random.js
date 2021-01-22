var num = 2.49999;
//Cut to the lowest
var result1 = Math.floor(num);
//console.log(result1);
//Up to the highest
var result2 = Math.ceil(num);
//console.log(result2);
//Round table
var result3 = Math.round(num);
//console.log(result3);

//Ball Dice
var randomNumber = Math.random() * 6;
var output = Math.round(randomNumber);
console.log(output);

for (var i = 0; i <= 10; i++) {
  var randomNumber = Math.random() * 6;
  var output = Math.round(randomNumber);
  console.log(output);
}
