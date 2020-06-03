import init, {
  source,
  vigenere as wasm_to_vigenere,
  from_vigenere as wasm_from_vigenere,
  adfgvx as wasm_to_adfgvx,
  from_adfgvx as wasm_from_adfgvx,
  adfgx as wasm_to_adfgx,
  from_adfgx as wasm_from_adfgx,
  affine as wasm_to_affine,
  from_affine as wasm_from_affine,
  atbash as wasm_to_atbash,
  from_atbash as wasm_from_atbash,
  autokey as wasm_to_autokey,
  from_autokey as wasm_from_autokey,
  beaufort as wasm_to_beaufort,
  from_beaufort as wasm_from_beaufort,
  caesar as wasm_to_caesar,
  from_caesar as wasm_from_caesar,
  columnartransposition as wasm_to_columnartransposition,
  from_columnartransposition as wasm_from_columnartransposition,
  foursquare as wasm_to_foursquare,
  from_foursquare as wasm_from_foursquare,
  polybiussquare as wasm_to_polybiussquare,
  from_polybiussquare as wasm_from_polybiussquare,
  porta as wasm_to_porta,
  from_porta as wasm_from_porta,
  railfence as wasm_to_railfence,
  from_railfence as wasm_from_railfence,
  runningkey as wasm_to_runningkey,
  from_runningkey as wasm_from_runningkey,
  substitution as wasm_to_substitution,
  from_substitution as wasm_from_substitution,
} from "./wasm.js";

import abides from "./rules/index.ts";

await init(source);

export function toVigenere(key: string, text: string): string {
  if (!abides("vigenere", key)) throw "Invalid key";
  return wasm_to_vigenere(key, text);
}

export function fromVigenere(key: string, text: string): string {
  if (!abides("vigenere", key)) throw "Invalid key";
  return wasm_from_vigenere(key, text);
}

export function toADFGVX(key: string, keyword: string, text: string): string {
  if (!abides("adfgvx", [key])) throw "Invalid key";
  return wasm_to_adfgvx(key, keyword, text);
}

export function fromADFGVX(key: string, keyword: string, text: string): string {
  if (!abides("adfgvx", [key])) throw "Invalid key";
  return wasm_from_adfgvx(key, keyword, text);
}

export function toADFGX(key: string, keyword: string, text: string): string {
  if (!abides("adfgx", [key])) throw "Invalid key";
  return wasm_to_adfgx(key, keyword, text);
}

export function fromADFGX(key: string, keyword: string, text: string): string {
  if (!abides("adfgx", [key])) throw "Invalid key";
  return wasm_from_adfgx(key, keyword, text);
}

export function toAffine(a: number, b: number, text: string): string {
  if (!abides("affine", [a, b])) throw "Invalid key(s)";
  return wasm_to_affine(a, b, text);
}

export function fromAffine(a: number, b: number, text: string): string {
  if (!abides("affine", [a, b])) throw "Invalid key(s)";
  return wasm_from_affine(a, b, text);
}

export function toAtbash(text: string): string {
  return wasm_to_atbash(text);
}

export function fromAtbash(text: string): string {
  return wasm_from_atbash(text);
}

export function toAutokey(key: string, text: string): string {
  if (!abides("autokey", key)) throw "Invalid key";
  return wasm_to_autokey(key, text);
}

export function fromAutokey(key: string, text: string): string {
  if (!abides("autokey", key)) throw "Invalid key";
  return wasm_from_autokey(key, text);
}

export function toBeaufort(key: string, text: string): string {
  if (!abides("beaufort", key)) throw "Invalid key";
  return wasm_to_beaufort(key, text);
}

export function fromBeaufort(key: string, text: string): string {
  if (!abides("beaufort", key)) throw "Invalid key";
  return wasm_from_beaufort(key, text);
}

export function toCaesar(key: string, text: string): string {
  return wasm_to_caesar(new TextEncoder().encode(key), text);
}

export function fromCaesar(key: string, text: string): string {
  return wasm_from_caesar(new TextEncoder().encode(key), text);
}

export function toColumnarTransposition(key: string, text: string): string {
  if (!abides("columnartransposition", key)) throw "Invalid key";
  return wasm_to_columnartransposition(key, text);
}

export function fromColumnarTransposition(key: string, text: string): string {
  if (!abides("columnartransposition", key)) throw "Invalid key";
  return wasm_from_columnartransposition(key, text);
}

export function toFourSquare(
  key1: string,
  key2: string,
  alphabet: string,
  pad: string,
  text: string,
): string {
  if (!abides("foursquare", [key1, key2, alphabet, pad])) throw "Invalid key";
  return wasm_to_foursquare(key1, key2, alphabet, pad, text);
}

export function fromFourSquare(
  key1: string,
  key2: string,
  alphabet: string,
  pad: string,
  text: string,
): string {
  if (!abides("foursquare", [key1, key2, alphabet, pad])) throw "Invalid key";
  return wasm_from_foursquare(key1, key2, alphabet, pad, text);
}

export function toPolybiusSquare(
  key: string,
  chars: string,
  text: string,
): string {
  if (!abides("polybiusqaure", [key, chars])) throw "Invalid key";
  return wasm_to_polybiussquare(key, chars, text);
}

export function fromPolybiusSquare(
  key: string,
  chars: string,
  text: string,
): string {
  if (!abides("polybiusqaure", [key, chars])) throw "Invalid key";
  return wasm_from_polybiussquare(key, chars, text);
}

export function toPorta(key: string, text: string): string {
  if (!abides("porta", key)) throw "Invalid key";
  return wasm_to_porta(key, text);
}

export function fromPorta(key: string, text: string): string {
  if (!abides("porta", key)) throw "Invalid key";
  return wasm_from_porta(key, text);
}

export function toRailFence(key: number, text: string): string {
  if (!abides("railfence", key)) throw "Invalid key";
  return wasm_to_railfence(key, text);
}

export function fromRailFence(key: string, text: string): string {
  if (!abides("railfence", key)) throw "Invalid key";
  return wasm_from_railfence(new TextEncoder().encode(key), text);
}

export function toRunningKey(key: string, text: string): string {
  if (!abides("runningkey", key)) throw "Invalid key";
  return wasm_to_runningkey(key, text);
}

export function fromRunningKey(key: string, text: string): string {
  if (!abides("runningkey", key)) throw "Invalid key";
  return wasm_from_runningkey(key, text);
}

export function toSubstitution(key: string, text: string): string {
  if (!abides("substitution", key)) throw "Invalid key";
  return wasm_to_substitution(key, text);
}

export function fromSubstitution(key: string, text: string): string {
  if (!abides("substitution", key)) throw "Invalid key";
  return wasm_from_substitution(key, text);
}
