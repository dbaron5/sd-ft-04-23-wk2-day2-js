const teacher = "Azam";

if (teacher === "Joe") {
  console.log("Joe is your teacher");
} else {
  console.log(`${teacher} is the teacher`);
}

const dog = "Rocky";
const cat = "Evie";
const day = "Wednesday";

if (day === "Monday") {
  console.log("Hello " + cat);
} else if (day === "Sunday") {
  console.log("Hello " + dog);
} else if (day === "Wednesday") {
  console.log(`Hello ${cat} and ${dog}`);
} else {
  console.log("No pets for you today");
}

const restaurant = "Chilis";

switch (restaurant) {
  case "Applebees":
    console.log("Man that's too greasy");
    break;
  case "Ruby Tuesday":
    console.log("Do these even exist anymore??");
    break;
  case "Red Lobster":
    console.log("How old are those things in the tanks anyways?");
    break;
  case "Chilis":
    console.log("Isn't this just more expensive Applebees?");
    break;
  default:
    console.log("I guess McDonalds is gonna be on the menu");
    break;
}
