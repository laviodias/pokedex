export const formatName = (name) => {
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : null;
};

export const getCardBgColor = (type) => {
  switch (type) {
    case "normal":
      return "rgba(168, 167, 122, 0.5)";
    case "fire":
      return "rgba(238, 129, 48, 0.5)";
    case "water":
      return "rgba(115, 144, 240, 0.5)";
    case "electric":
      return "rgba(247, 208, 44, 0.5)";
    case "grass":
      return "rgba(122, 199, 76, 0.5)";
    case "ice":
      return "rgba(150, 217, 214, 0.5)";
    case "fighting":
      return "rgba(194, 46, 40, 0.5)";
    case "poison":
      return "rgba(163, 62, 161, 0.5)";
    case "ground":
      return "rgba(226, 191, 101, 0.5)";
    case "flying":
      return "rgba(169, 143, 243, 0.5)";
    case "psychic":
      return "rgba(249, 85, 135, 0.5)";
    case "bug":
      return "rgba(166, 185, 26, 0.5)";
    case "rock":
      return "rgba(182, 161, 54, 0.5)";
    case "ghost":
      return "rgba(115, 87, 151, 0.5)";
    case "dragon":
      return "rgba(111, 53, 252, 0.5)";
    case "dark":
      return "rgba(112, 87, 70, 0.5)";
    case "steel":
      return "rgba(183, 183, 206, 0.5)";
    case "fairy":
      return "rgba(214, 133, 173, 0.5)";
    default:
      return null;
  }
};

export const getTypeBgColor = (type) => {
  switch (type) {
    case "normal":
      return "#A8A77A";
    case "fire":
      return "#EE8130";
    case "water":
      return "#6390F0";
    case "grass":
      return "#7AC74C";
    case "electric":
      return "#F7D02C";
    case "ice":
      return "#96D9D6";
    case "fighting":
      return "#C22E28";
    case "poison":
      return "#A33EA1";
    case "ground":
      return "#E2BF65";
    case "flying":
      return "#A98FF3";
    case "psychic":
      return "#F95587";
    case "bug":
      return "#A6B91A";
    case "rock":
      return "#B6A136";
    case "ghost":
      return "#735797";
    case "dragon":
      return "#6F35FC";
    case "dark":
      return "#705746";
    case "steel":
      return "#B7B7CE";
    case "fairy":
      return "#D685AD";
    default:
      return null;
  }
};

const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const getContrastColor = (color) => {
  if (!color || color === "") {
    return null;
  }
  const rgb = hexToRgb(color);
  const yiq = (rgb?.r * 299 + rgb?.g * 587 + rgb?.b * 114) / 1000;
  return yiq >= 128 ? "#000000" : "#FFFFFF";
};

export const getTypes = [
  "normal",
  "fire",
  "water",
  "grass",
  "electric",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];
