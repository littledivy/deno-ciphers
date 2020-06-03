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

function inRange(start: number, end: number, key: number) {
  return key <= end && key >= start;
}

function Rules(fn: string, toCheck: any) {
  switch (fn.toLowerCase()) {
    case "vigenere":
      return isAlphabetical(toCheck);
      break;
    case "adfgvx":
      if (toCheck.length < 36) return !hasRepeatedCharacters(toCheck);
      return false;
      break;
    case "adfgx":
      if (toCheck.length < 25) return !hasRepeatedCharacters(toCheck);
      return false;
    case "affine":
      return inRange(1, 25, toCheck[0]) && inRange(1, 25, toCheck[1]);
    default:
      throw "Function not found";
      break;
  }
}

console.log(Rules("affine", [1, 1, 10]));

export default Rules;
