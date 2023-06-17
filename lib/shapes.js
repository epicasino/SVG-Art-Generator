class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  shapeColor() {
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (regex.test(shapeColor)) {
      
    };
  }
};

module.exports = Shape;