function getArraySum(number) {
  var sum = 0;
  for (var i = 0; i < number.length; i++) {
    var element = number[i];
    sum = sum + element;
  }
  return sum;
}

var number = [45, 65, 78, 12, 3, 54, 65];
var result = getArraySum(number);
console.log("Sum of the array: ", result);
var total = getArraySum([45, 65, 78, 12, 3, 54, 65]);
console.log("Sum of the array: ", total);
