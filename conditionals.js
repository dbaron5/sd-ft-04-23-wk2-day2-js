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
