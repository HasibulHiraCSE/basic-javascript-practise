var marks = [81, 56, 33, 27, 89, 96];
var min = marks[0];
for (var i = 0; i <= marks.length; i++) {
  var element = marks[i];
  if (element < min) {
    min = element;
  }
}
console.log("Smallest Number is: ", min);