const Validate = require("../validate.js");

describe("user entry validation", () => {
  it("checks if logo text is valid", () => {
    const name = "ads";
    const validate = new Validate(name, "", "");
    expect(validate.validateText()).toEqual(true);
  });

  it("checks if text color is valid or not", () => {
    const color = "red";
    const validate = new Validate("", color, "");
    expect(validate.validateTextColor()).toEqual(true);
  });

  it("checks if shape color is valid or not", () => {
    const color = "#00bfff";
    const validate = new Validate("", "", color);
    expect(validate.validateShapeColor()).toEqual(true);
  });
});

// #00bfff
