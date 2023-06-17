const Validate = require("../validate.js");

// checks user inputs for validation 
describe("user entry validation", () => {
  // checks if the text from user is less than 3 characters, returns value of true if valid, false if not
  it("checks if logo text is valid", () => {
    const name = "ads";
    const validate = new Validate(name, "", "");
    expect(validate.validateText()).toEqual(true);
  });
  // checks if the color for text is color keyword or hexacode, returns value of true if valid, false if not
  it("checks if text color is valid or not", () => {
    const color = "red";
    const validate = new Validate("", color, "");
    expect(validate.validateTextColor()).toEqual(true);
  });
  // checks if the color for shape is color keyword or hexacode, returns value of true if valid, false if not
  it("checks if shape color is valid or not", () => {
    const color = "#00bfff";
    const validate = new Validate("", "", color);
    expect(validate.validateShapeColor()).toEqual(true);
  });
});

// sample hexacode value for testing usage
// #00bfff
