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

// write a function that accepts 3 parameters
// the parameters are as follows
// height
// weight
// age

function heightWeightAge(height, weight, age) {
  // for height, write a message that says "Your Height is height"
  // for weight, convert to kilos
  // print a message that says "You weight approx this many kilos" (remove decimal/convert to whole number - hint: built it)
  // for age, convert into seconds
  console.log(height("My height is 5'11"));
  console.log(weight.toKilos());
  console.log(age);
}

function convertPoundsToKilograms(pounds) {
  var kilograms = pounds * 0.453592;
  return kilograms;
}

convertPoundsToKilograms(230);
