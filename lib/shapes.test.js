// Import shape classes
const { Square, Circle, Triangle } = require("./shapes.js");

// Test case for Square
describe("square", function () {
  test("render", function () {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<rect x="50" height="200" width="200" fill="blue"/>'
    );
  });
});

// Test case for Circle
describe("circle", function () {
  test("render", function () {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="green"/>'
    );
  });
});

// Test case for Triangle
describe("triangle", function () {
  test("render", function () {
    const shape = new Triangle();
    shape.setColor("pink");
    expect(shape.render()).toEqual(
      '<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="pink"/>'
    );
  });
});
