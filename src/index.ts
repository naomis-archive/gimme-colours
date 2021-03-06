import chalk from "chalk";

type ColourList =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white"
  | "blackBright"
  | "redBright"
  | "greenBright"
  | "yellowBright"
  | "blueBright"
  | "magentaBright"
  | "cyanBright"
  | "whiteBright";

const generateChalk = (color: ColourList) => {
  return chalk[color](`This is ${color} text.`);
};

const gimmecolours = () => {
  console.log(generateChalk("black"));
  console.log(generateChalk("red"));
  console.log(generateChalk("green"));
  console.log(generateChalk("yellow"));
  console.log(generateChalk("blue"));
  console.log(generateChalk("magenta"));
  console.log(generateChalk("cyan"));
  console.log(generateChalk("white"));

  console.log(generateChalk("blackBright"));
  console.log(generateChalk("redBright"));
  console.log(generateChalk("greenBright"));
  console.log(generateChalk("yellowBright"));
  console.log(generateChalk("blueBright"));
  console.log(generateChalk("magentaBright"));
  console.log(generateChalk("cyanBright"));
  console.log(generateChalk("whiteBright"));
};

gimmecolours();
