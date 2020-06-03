const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
  "",
);

function isAlphabetical(str: string): string | null | undefined {
  return str.split("").find((x) => !ALPHABETS.includes(x));
}

function hasSameCharacters(x: string, y: string) {
  let occurance: { [key: string]: number } = {};
  let xArr = x.split("");
  let yArr = y.split("");
  let sameChars: boolean = false;
  for (const el in yArr) {
    occurance[xArr[el]] = 1;
  }
  for (const el in xArr) {
    for (const k in occurance) {
      if (!occurance[xArr[el]]) {
        sameChars = true;
        break;
      }
    }
  }
  return sameChars;
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

// Example: FourSquare
/**
console.log(
  Rules(
    "foursquare",
    [
      "ABCDEFGHIJKLMNOPQRSTUVWXY",
      "ABCDEFGHIJKLMNOPQRSTUVWXY",
      "ABCDEFGHIJKLMNOPQRSTUVWXY",
      "ABCDEF",
    ],
  ),
);
**/

function Rules(fn: string, toCheck: any) {
  switch (fn.toLowerCase()) {
    case "vigenere":
      return isAlphabetical(toCheck);
      break;
    case "adfgvx":
      // TODO: ascii check for toCheck[1]
      if (toCheck[0].length < 36) return !hasRepeatedCharacters(toCheck[0]);
      return false;
      break;
    case "adfgx":
      if (toCheck.length < 25) return !hasRepeatedCharacters(toCheck);
      return false;
    case "affine":
      return inRange(1, 25, toCheck[0]) && inRange(1, 25, toCheck[1]);
    case "autokey":
      return isAlphabetical(toCheck);
      break;
    case "beaufort":
      return isAlphabetical(toCheck);
      break;
    case "columnartransposition":
      // TODO: valid ascii check
      return true;
      break;
    case "foursquare":
      if (
        toCheck[0].length == 25 && toCheck[1].length == 25 &&
        toCheck[1].length == 25
      ) {
        // TODO: alphabet should be a valid ascii
        return (
          !hasRepeatedCharacters(toCheck[0]) &&
          !hasRepeatedCharacters(toCheck[1]) &&
          !hasRepeatedCharacters(toCheck[2]) &&
          !hasSameCharacters(toCheck[1], toCheck[0]) &&
          !hasSameCharacters(toCheck[2], toCheck[0]) &&
          !hasSameCharacters(toCheck[3], toCheck[0])
        );
      }
      return false;
      break;
    case "playfair":
      // TODO: alphabet should be a valid ascii
      return (
        toCheck[0].length == 25 &&
        !hasRepeatedCharacters(toCheck[0]) &&
        hasSameCharacters(toCheck[1], toCheck[0])
      );
      break;
    case "polybiusqaure":
      return (
        toCheck[0].length == 25 &&
        !hasRepeatedCharacters(toCheck[0]) &&
        !hasRepeatedCharacters(toCheck[1]) &&
        toCheck[1].length == Math.sqrt(toCheck[0].length)
      );
      break;
    case "porta":
      return isAlphabetical(toCheck);
      break;
    case "railfence":
      return !(toCheck <= 0);
      break;
    case "substitution":
      return (
        toCheck.length == 26 &&
        !hasRepeatedCharacters(toCheck) &&
        isAlphabetical(toCheck)
      );
      break;
    default:
      throw "Function not found";
      break;
  }
}

export default Rules;
