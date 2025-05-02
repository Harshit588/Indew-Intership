let Person = {
  name: "Harshit",
  age: 21,
  isDeveloper: true,
  company: "Indew",
  hello: () => console.log("hello"),
  color: [
    "red",
    "yellow",
    "Orange",
    (person2 = {
      name: "Kanita",
      age: 22,
    }),
  ],
};

Person.company = "Indew Technology";

// console.log(Person.color[1]);



// Object Distruction
// nested Object
// seperate Operator