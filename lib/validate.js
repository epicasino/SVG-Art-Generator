class Validate {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    // defining hexcode regex & colors for validation
    this.regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    this.colorKeywords = [
      "mediumvioletred",
      "deeppink",
      "palevioletred",
      "hotpink",
      "lightpink",
      "pink",
      "darkred",
      "red",
      "firebrick",
      "crimson",
      "indianred",
      "lightcoral",
      "salmon",
      "darksalmon",
      "lightsalmon",
      "orangered",
      "tomato",
      "darkorange",
      "coral",
      "orange",
      "darkkhaki",
      "gold",
      "khaki",
      "peachpuff",
      "yellow",
      "palegoldenrod",
      "moccasin",
      "papayawhip",
      "lightgoldenrodyellow",
      "lemonchiffon",
      "lightyellow",
      "maroon",
      "brown",
      "saddlebrown",
      "sienna",
      "chocolate",
      "darkgoldenrod",
      "peru",
      "rosybrown",
      "goldenrod",
      "sandybrown",
      "tan",
      "burlywood",
      "wheat",
      "navajowhite",
      "bisque",
      "blanchedalmond",
      "cornsilk",
      "darkgreen",
      "green",
      "darkolivegreen",
      "forestgreen",
      "seagreen",
      "olive",
      "olivedrab",
      "mediumseagreen",
      "limegreen",
      "lime",
      "springgreen",
      "mediumspringgreen",
      "darkseagreen",
      "mediumaquamarine",
      "yellowgreen",
      "lawngreen",
      "chartreuse",
      "lightgreen",
      "greenyellow",
      "palegreen",
      "teal",
      "darkcyan",
      "lightseagreen",
      "cadelblue",
      "darkturquoise",
      "mediumturquoise",
      "turquoise",
      "aqua",
      "cyan",
      "aquamarine",
      "paleturquoise",
      "lightcyan",
      "navy",
      "darkblue",
      "mediumblue",
      "blue",
      "midnightblue",
      "royalblue",
      "steelblue",
      "dodgerblue",
      "deepskyblue",
      "cornflowerblue",
      "skyblue",
      "lightskyblue",
      "lightsteelblue",
      "lightblue",
      "powderblue",
      "indigo",
      "purple",
      "darkmagenta",
      "darkviolet",
      "darkslateblue",
      "blueviolet",
      "darkorchid",
      "fuchsia",
      "magenta",
      "slateblue",
      "mediumslateblue",
      "mediumorchid",
      "mediumpurple",
      "orchid",
      "violet",
      "plum",
      "thistle",
      "lavender",
      "mistyrose",
      "antiquewhite",
      "linen",
      "beige",
      "whitesmoke",
      "lavenderblush",
      "oldlace",
      "aliceblue",
      "seashell",
      "ghostwhite",
      "honeydew",
      "foralwhite",
      "azure",
      "mintcream",
      "snow",
      "ivory",
      "white",
      "black",
      "darkslategray",
      "dimgray",
      "slategrey",
      "gray",
      "lightslategray",
      "darkgray",
      "silver",
      "lightgray",
      "gainsboro",
    ];
  }

  validateText() {
    if (this.text.length <= 3) {
      return true;
    } else return false;
  }

  validateTextColor() {
    if (
      this.regex.test(this.textColor) ||
      this.colorKeywords.includes(this.textColor)
    ) {
      return true;
    } else return false;
  }

  validateShapeColor() {
    if (
      this.regex.test(this.shapeColor) ||
      this.colorKeywords.includes(this.shapeColor)
    ) {
      return true;
    } else return false;
  }


};

module.exports = Validate;
