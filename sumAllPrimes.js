function sumPrimes(num) {
  validateNum(num);
  const listOfConsecutiveIntegersFrom2 =
    generateConsecutiveIntegersFromTwo(num);
  const arrayOfPrimeNumbers = primeNumbersOfArray(
    listOfConsecutiveIntegersFrom2
  );
  const sumOfNumberFromArray = AddNumbersFromArray(arrayOfPrimeNumbers);
  return sumOfNumberFromArray;
}
function validateNum(num) {
  if (num <= 1) throw new Error("You must provide a number greater than one.");
  if (typeof num !== "number") throw new Error("You must provide a number.");
}

function generateConsecutiveIntegersFromTwo(num) {
  const listOfConsecutiveIntegersFrom2 = [];
  for (var i = 2; i <= num; i++) {
    listOfConsecutiveIntegersFrom2.push(i);
  }
  return listOfConsecutiveIntegersFrom2;
}

function isPrime(num) {
  const squareRoot = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= squareRoot; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function primeNumbersOfArray(array) {
  const arrayOfPrimeNumbers = [];
  array.forEach((number) => {
    if (isPrime(number)) arrayOfPrimeNumbers.push(number);
  });
  return arrayOfPrimeNumbers;
}

function AddNumbersFromArray(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
module.exports = {
  sumPrimes,
};
