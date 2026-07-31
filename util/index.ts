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
