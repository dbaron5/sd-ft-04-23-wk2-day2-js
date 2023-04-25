function sumTwoNumbers(num1, num2) {
  console.log({ num1 });
  console.log({ num2 });
  return num1 + num2;
}

for (let index = 0; index < 11; index++) {
  console.log(sumTwoNumbers(30, -33));
}

// define a function that is called thisIsMyName
function thisIsMyName(myName) {
  console.log(myName.toUpperCase());
}

// invoke the function you just made
thisIsMyName("Daniel");

// change your original function to accept a name parameter by adding name in between parenthesis on line 12
