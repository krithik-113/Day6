class Circle {
  constructor(radius = 0, color = "red") {
    this.radius = radius.toFixed(1);
    this.color = color;
  }
  getradius() {
    return this.radius;
  }
  getcolor() {
    return this.color;
  }
  setradius(radius = " ") {
    return (this.radius = radius.toFixed(1));
  }
  setcolor(color = "red") {
    return (this.color = color);
  }
  toString(str = []) {
    let string = [];
    str.map((str1) => {
      string.push(str1);
    });
    return string;
  }
  getArea(radius = 0) {
    return (this.radius = (Math.PI * Math.pow(radius, 2)).toFixed(1));
  }
  getCircumference(radius) {
    return (this.radius = (2 * Math.PI * radius).toFixed(1));
  }
}
const circle1 = new Circle(1.0);
const circle2 = new Circle(5.0, "orange");
console.log(circle1, circle2);
console.log(circle1.getradius());
console.log(circle1.setradius(3.0));
console.log(circle2.getcolor());
console.log(circle1.setcolor("green"));
console.log(circle1.toString([circle1, circle2]));
console.log(circle1.getArea(6.0));
console.log(circle2.getCircumference(11.4));
