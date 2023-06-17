// Main shape class
class Shape {
  // constructor will take the user's logo text, logo text color, shape color, and shape type as arguments
  constructor(text, textColor, shapeColor, shape) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.shape = shape;
  }
  // method that will return shape type and color for rendering SVG file
  renderShape() {
    return `<${this.shape} fill="${this.shapeColor}"/>`;
  }
  // method that will return text and color for rendering SVG file
  renderText() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
};

class Triangle extends Shape {
  constructor(text, textColor, shapeColor, shape) {
    super(text, textColor, shapeColor, shape);
  }
  
};

class Circle extends Shape {
  constructor(text, textColor, shapeColor, shape) {
    super(text, textColor, shapeColor, shape);
  }
};

class Square extends Shape {
  constructor(text, textColor, shapeColor, shape) {
    super(text, textColor, shapeColor, shape);
  }
};

module.exports = Shape;
module.exports = Triangle;
module.exports = Circle;
module.exports = Square;