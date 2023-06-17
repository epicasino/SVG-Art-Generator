const Shape = require("../shapes");
const Triangle = require("../shapes");
const Circle = require("../shapes");
const Square = require("../shapes");

// shape tests - validates proper value inserts
describe("Shape class checks", () => {
  // tests if text and text color are properly set in .renderText() method result
  it("will check svg text code snippet", () => {
    const text = "svg";
    const textColor = "blue";
    const shape = new Shape(text, textColor, "", "");
    expect(shape.renderText()).toEqual(
      '<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">svg</text>'
    );
  });
  // tests if shape and shape color are properly set in .renderShape() method result
  it("will check shape code snippet", () => {
    const shapeColor = "red";
    const shapeType = 'rect width="100%" width="100%"';
    const shape = new Shape("", "", shapeColor, shapeType);
    expect(shape.renderShape()).toEqual(
      '<rect width="100%" width="100%" fill="red"/>'
    );
  });
});

// triangle shape tests - validates proper value inserts
describe("Triangle class checks", () => {
  // tests if text and text color are properly set in .renderText() method result
  it("will check svg text code snippet", () => {
    const text = "svg";
    const textColor = "blue";
    const triangle = new Triangle(text, textColor, "", "");
    expect(triangle.renderText()).toEqual(
      '<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">svg</text>'
    );
  });
  // tests if shape and shape color are properly set in .renderShape() method result
  it("will check triangle shape code snippet", () => {
    const shapeColor = "blue";
    const shapeType = 'polygon points="150, 18 244, 182 56, 182"';
    const triangle = new Triangle("", "", shapeColor, shapeType);
    expect(triangle.renderShape()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
    );
  });
});

// circle shape tests - validates proper value inserts
describe("Circle class checks", () => {
  // tests if text and text color are properly set in .renderText() method result
  it("will check svg text code snippet", () => {
    const text = "svg";
    const textColor = "blue";
    const circle = new Circle(text, textColor, "", "");
    expect(circle.renderText()).toEqual(
      '<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">svg</text>'
    );
  });
  // tests if shape and shape color are properly set in .renderShape() method result
  it("will check circle shape code snippet", () => {
    const shapeColor = "blue";
    const shapeType = 'circle cx="50" cy="50" r="40"';
    const circle = new Circle("", "", shapeColor, shapeType);
    expect(circle.renderShape()).toEqual(
      '<circle cx="50" cy="50" r="40" fill="blue"/>'
    );
  });
});

// circle shape tests - validates proper value inserts
describe("Square class checks", () => {
  // tests if text and text color are properly set in .renderText() method result
  it("will check svg text code snippet", () => {
    const text = "svg";
    const textColor = "blue";
    const square = new Square(text, textColor, "", "");
    expect(square.renderText()).toEqual(
      '<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">svg</text>'
    );
  });
  // tests if shape and shape color are properly set in .renderShape() method result
  it("will check circle shape code snippet", () => {
    const shapeColor = "blue";
    const shapeType = 'rect width="100%" height="100%"';
    const square = new Square("", "", shapeColor, shapeType);
    expect(square.renderShape()).toEqual(
      '<rect width="100%" height="100%" fill="blue"/>'
    );
  });
});
