// Task 1

const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

//Task 2

function oddEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4)); // result should be even
console.log(oddEven(3)); // result should be odd
console.log(oddEven(-1)); // result should be odd
console.log(oddEven(10)); // result should be even

//Task 3

function oldYoung(age) {
  sVar = "invalid parameter";

  if (age >= 0) {
    switch (true) {
      case age < 16:
        sVar = "children";
        break;
      case age < 50:
        sVar = "young person";
        break;
      case age >= 50:
        sVar = "elder person";
        break;
    }
  }

  return sVar;
}

// TODO: Implement the oldYoung function
console.clear();
console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person

console.log(oldYoung(86.7));

console.log(oldYoung("sechsundatchzig"));
