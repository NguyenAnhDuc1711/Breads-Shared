export const encodedString = (input) => {
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

export const decodeString = (input) => {
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
