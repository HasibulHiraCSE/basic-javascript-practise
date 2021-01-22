//Using an Extra Variable Temp
var a = 5;
var b = 7;
console.log("Before Swap: A=",a,", B=",b);
var temp = a;
a = b;
b = a;
console.log("After Swap: A=",a,", B=",b);

//Using Mathematical Calculation
var x = 5;
var y = 7;
console.log("Before Swap: X=", x, ", Y=", y);
x = x + y;
y = x - y;
x = x - y;
console.log("After Swap: X=", x, ", Y=", y);

//Language Preference
var p = 5;
var q = 7;
console.log("Before Swap: P=", p, ", Q=", q);
[p, q] = [q, p];
console.log("After Swap: P=", p, ", Q=", q);
