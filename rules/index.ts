const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
  "",
);

function isAlphabetical(str: string): string | null | undefined {
  return str.split("").find((x) => !ALPHABETS.includes(x));
}

function hasRepeatedCharacters(str: string) {
  let letters: string[] = str.split("");
  let occurance: { [key: string]: number } = {};
  let repeated: boolean = false;
  for (const el in letters) {
    if (occurance[letters[el]]) {
      repeated = true;
      break;
    } else {
      occurance[letters[el]] = 1;
    }
  }
  return repeated;
}

function Rules(fn: string, toCheck: string) {
  switch (fn.toLowerCase()) {
    case "vigenere":
      return isAlphabetical(toCheck);
      break;
    case "adfgvx":
      if (toCheck.length < 36) return !hasRepeatedCharacters(toCheck);
      return true;
      break;
    default:
      throw "Function not found";
      break;
  }
}

console.log(Rules("adfgvx", "1aasdkj"));

export default Rules;
