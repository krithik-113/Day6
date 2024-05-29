class Person {
  constructor(
    name = "",
    age = 0,
    gender = "",
    qualification = "",
    status = "",
    mother_tongue = ""
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.qualification = qualification;
    this.status = status;
    this.mother_tongue = mother_tongue;
  }
}

const person1 = new Person("krithik", 24, "male", "B.C.A", "single", "tamil");
const person2 = new Person("roshan", 42, "male", "B.C.A", "married", "spanish");

console.log(person1);
console.log(person2);
