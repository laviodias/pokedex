export const formatName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const getCardBgColor = (type) => {
  /*
  normal
fighting
flying
poison
ground
rock
bug
ghost
steel
fire
water
grass
electric
psychic
ice
dragon
dark
fairy
unknown
shadow
  */
  switch (type) {
    case "normal":
      return "rgba(168, 168, 120, 0.3)";
    case "fire":
      return "rgba(255, 64, 64, 0.3)";
    case "water":
      return "rgba(64, 64, 255, 0.3)";
    case "grass":
      return "rgba(64, 255, 64, 0.3)";
    case "electric":
      return "rgba(255, 255, 64, 0.3)";
    case "ice":
      return "rgba(64, 255, 255, 0.3)";
    case "fighting":
      return "rgba(255, 64, 255, 0.3)";
    case "poison":
      return "rgba(64, 64, 64, 0.3)";
    case "ground":
      return "rgba(255, 255, 64, 0.3)";
    case "flying":
      return "rgba(64, 255, 255, 0.3)";
    case "psychic":
      return "rgba(255, 64, 255, 0.3)";
    case "bug":
      return "rgba(64, 64, 64, 0.3)";
    case "rock":
      return "rgba(255, 255, 64, 0.3)";
    case "ghost":
      return "rgba(64, 255, 255, 0.3)";
    case "dragon":
      return "rgba(255, 64, 255, 0.3)";
    case "dark":
      return "rgba(64, 64, 64, 0.3)";
    case "steel":
      return "rgba(255, 255, 64, 0.3)";
    case "fairy":
      return "rgba(64, 255, 255, 0.3)";
    default:
      return null;
  }
};

export const getTypeBgColor = (type) => {
  switch (type) {
    case "normal":
      return "rgb(168, 168, 120)";
    case "fire":
      return "rgb(255, 64, 64)";
    case "water":
      return "rgb(64, 64, 255)";
    case "grass":
      return "rgb(64, 255, 64)";
    case "electric":
      return "rgb(255, 255, 64)";
    case "ice":
      return "rgb(64, 255, 255)";
    case "fighting":
      return "rgb(255, 64, 255)";
    case "poison":
      return "rgb(64, 64, 64)";
    case "ground":
      return "rgb(255, 255, 64)";
    case "flying":
      return "rgb(64, 255, 255)";
    case "psychic":
      return "rgb(255, 64, 255)";
    case "bug":
      return "rgb(64, 64, 64)";
    case "rock":
      return "rgb(255, 255, 64)";
    case "ghost":
      return "rgb(64, 255, 255)";
    case "dragon":
      return "rgb(255, 64, 255)";
    case "dark":
      return "rgb(64, 64, 64)";
    case "steel":
      return "rgb(255, 255, 64)";
    case "fairy":
      return "rgb(64, 255, 255)";
    default:
      return null;
  }
};
