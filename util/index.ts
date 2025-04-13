export const encodedString = (input: string): string => {
  const key = Math.floor(Math.random() * 10);
  let encoded = "";
  for (let i = 0; i < input.length; i++) {
    let unicodeNum = input.charCodeAt(i) + key;
    let unicodeCharac = String.fromCharCode(unicodeNum);
    encoded += unicodeCharac;
  }
  encoded += key;
  return encoded;
};

export const decodeString = (input: string): string => {
  let key = Number(input[input.length - 1]);
  let encoded = input.slice(0, input.length - 1);
  let decoded = "";
  for (let i = 0; i < encoded.length; i++) {
    let unicodeNum = encoded.charCodeAt(i) - key;
    let unicodeCharac = String.fromCharCode(unicodeNum);
    decoded += unicodeCharac;
  }
  return decoded;
};

export const previewLinkKey: string[] = [
  "f1ba2a6f15e4ba82e53067bb44ae6b60",
  "88f7dcd0ef857e78969437f80a1f78c2",
  "52f6692b2e2b5ead92037eb93d2d3632",
  "280ca9ad2e16ceca142388c482a1466e",
  "da5e1b0b166d3982d5bde515c38ad270",
  "bdc21ef213a8b0cf4ff535de3ae5823a",
  "374b72a6eed7a685dd05bd3605fa974f",
  "08f9c84fdab1b82b31f65298cd277a5e",
  "2f23034142ee1013140b3e12312f7efd",
  "91a09db85e34a278909ce88d062378a7",
];

export const listCharacter = () => {
  const characters: string[] = [];
  for (let i = 65; i <= 90; i++) {
    characters.push(String.fromCharCode(i));
  }
  return characters;
};

export const genRandomCode = () => {
  const characters = listCharacter();
  let code = "";
  for (let i = 0; i < 6; i++) {
    let numOrCharac = Math.floor(Math.random() * 2);
    if (numOrCharac === 0) {
      //Code random num
      let numChose = Math.floor(Math.random() * 10).toString();
      code += numChose;
    } else {
      //Code random character
      let upperOrlower = Math.floor(Math.random() * 2);
      let characChose =
        upperOrlower === 0
          ? characters[
              Math.floor(Math.random() * characters.length)
            ].toLowerCase()
          : characters[Math.floor(Math.random() * characters.length)];
      code += characChose;
    }
  }
  return code;
};
