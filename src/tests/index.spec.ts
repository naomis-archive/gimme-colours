import { assert } from "chai";
import { gimmecolours } from "../index";
import { stdout } from "test-console";

const getColourString = (
  colour: string,
  list: string[]
): string | undefined => {
  return list.find((string) => string.includes(`This is ${colour} text.`));
};

const coloursArray = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "blackBright",
  "redBright",
  "greenBright",
  "yellowBright",
  "blueBright",
  "magentaBright",
  "cyanBright",
  "whiteBright",
];

suite("Console logging", () => {
  const output = stdout.inspectSync(() => {
    gimmecolours();
  });
  const outputArray = output.map((el) => el);

  test("should display 16 colours", () => {
    assert.equal(output.length, 16, "does not display 16 colours");
  });

  coloursArray.forEach((colour) => {
    test(`should display ${colour} text`, () => {
      assert.isString(getColourString(colour, outputArray));
    });
  });
});
