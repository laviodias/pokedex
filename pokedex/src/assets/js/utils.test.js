import {
  formatName,
  getCardBgColor,
  getTypeBgColor,
  getContrastColor,
} from "./utils";

describe("formatName should return the expected results", () => {
  test("formatName should return the given name with first letter capitalized", () => {
    expect(formatName("pikachu")).toBe("Pikachu");
  });

  test("formatName should return null if name is not provided", () => {
    expect(formatName("")).toBe(null);
  });
});

describe("getCardBgColor should return the expected results", () => {
  test("getCardBgColor should return the expected color for all different types", () => {
    expect(getCardBgColor("normal")).toBe("rgba(168, 167, 122, 0.5)");
    expect(getCardBgColor("fire")).toBe("rgba(238, 129, 48, 0.5)");
    expect(getCardBgColor("water")).toBe("rgba(115, 144, 240, 0.5)");
    expect(getCardBgColor("electric")).toBe("rgba(247, 208, 44, 0.5)");
    expect(getCardBgColor("grass")).toBe("rgba(122, 199, 76, 0.5)");
    expect(getCardBgColor("ice")).toBe("rgba(150, 217, 214, 0.5)");
    expect(getCardBgColor("fighting")).toBe("rgba(194, 46, 40, 0.5)");
    expect(getCardBgColor("poison")).toBe("rgba(163, 62, 161, 0.5)");
    expect(getCardBgColor("ground")).toBe("rgba(226, 191, 101, 0.5)");
    expect(getCardBgColor("flying")).toBe("rgba(169, 143, 243, 0.5)");
    expect(getCardBgColor("psychic")).toBe("rgba(249, 85, 135, 0.5)");
    expect(getCardBgColor("bug")).toBe("rgba(166, 185, 26, 0.5)");
    expect(getCardBgColor("rock")).toBe("rgba(182, 161, 54, 0.5)");
    expect(getCardBgColor("ghost")).toBe("rgba(115, 87, 151, 0.5)");
    expect(getCardBgColor("dragon")).toBe("rgba(111, 53, 252, 0.5)");
    expect(getCardBgColor("dark")).toBe("rgba(112, 87, 70, 0.5)");
    expect(getCardBgColor("steel")).toBe("rgba(183, 183, 206, 0.5)");
    expect(getCardBgColor("fairy")).toBe("rgba(214, 133, 173, 0.5)");
  });

  test("getCardBgColor should return null if type is not provided", () => {
    expect(getCardBgColor("")).toBe(null);
  });

  test("getCardBgColor should return null if type is not supported", () => {
    expect(getCardBgColor("foo")).toBe(null);
  });
});

describe("getTypeBgColor should return the expected results", () => {
  test("getTypeBgColor should return the expected color for all different types", () => {
    expect(getTypeBgColor("normal")).toBe("#A8A77A");
    expect(getTypeBgColor("fire")).toBe("#EE8130");
    expect(getTypeBgColor("water")).toBe("#6390F0");
    expect(getTypeBgColor("electric")).toBe("#F7D02C");
    expect(getTypeBgColor("grass")).toBe("#7AC74C");
    expect(getTypeBgColor("ice")).toBe("#96D9D6");
    expect(getTypeBgColor("fighting")).toBe("#C22E28");
    expect(getTypeBgColor("poison")).toBe("#A33EA1");
    expect(getTypeBgColor("ground")).toBe("#E2BF65");
    expect(getTypeBgColor("flying")).toBe("#A98FF3");
    expect(getTypeBgColor("psychic")).toBe("#F95587");
    expect(getTypeBgColor("bug")).toBe("#A6B91A");
    expect(getTypeBgColor("rock")).toBe("#B6A136");
    expect(getTypeBgColor("ghost")).toBe("#735797");
    expect(getTypeBgColor("dragon")).toBe("#6F35FC");
    expect(getTypeBgColor("dark")).toBe("#705746");
    expect(getTypeBgColor("steel")).toBe("#B7B7CE");
    expect(getTypeBgColor("fairy")).toBe("#D685AD");
  });

  test("getTypeBgColor should return null if type is not provided", () => {
    expect(getTypeBgColor("")).toBe(null);
  });

  test("getTypeBgColor should return null if type is not supported", () => {
    expect(getCardBgColor("foo")).toBe(null);
  });
});

describe("getContrastColor should return the expected results", () => {
  test("getContrastColor should return the expected color for different types", () => {
    expect(getContrastColor("#FFFFFF")).toBe("#000000");
    expect(getContrastColor("#000000")).toBe("#FFFFFF");
    expect(getContrastColor("#F95587")).toBe("#000000");
  });

  test("getContrastColor should return null if color is not provided", () => {
    expect(getContrastColor("")).toBe(null);
    expect(getContrastColor()).toBe(null);
  });

  test("getContrastColor should return #FFFFFF if color is not supported", () => {
    expect(getContrastColor("foo")).toBe("#FFFFFF");
  });
});
