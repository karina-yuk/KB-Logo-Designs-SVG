// Class to represent a SVG logo.
class SVG {
  constructor(shape, text) {
    this.shape = shape;
    this.text = text;
  }
  render() {
    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape.render()}
        ${this.text.render()}
        </svg>
        `;
  }
}

// Class to represent SVG shapes
class Shape {
  constructor(color) {
    this.color = color;
  }
  setColor(color) {
    this.color = color;
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
  }
}

// Class to represent a SVG square that renders a SVG rect element.
class Square extends Shape {
  render() {
    return `<rect x="50" height="200" width="200" fill="${this.color}"/>`;
  }
}
// Class to represent a SVG circle that renders a SVG circle element.
class Circle extends Shape {
  render() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`;
  }
}
// Class to represent a SVG triangle that renders a SVG polygon element.
class Triangle extends Shape {
  render() {
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`;
  }
}

// Class to represent SVG text
class Text {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }
  // Renders a SVG text element
  render() {
    return `
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        `;
  }
}

// export { SVG, Circle, Triangle, Square, Text }
module.exports = { SVG, Circle, Triangle, Square, Text };
