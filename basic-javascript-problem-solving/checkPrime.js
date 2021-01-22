function checkPrime(n) {
  for (var i = 2; i < n - 1; i++) {
    if (n % i == 0) {
      return "Your Number is not a prime number";
    }
  }
  return "Your Number is a prime number";
}
var check = checkPrime(57);
console.log(check);
