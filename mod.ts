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
} from "./wasm.js";

await init(source);

export function toVigenere(key: string, text: string): string {
  return wasm_to_vigenere(key, text);
}

export function fromVigenere(key: string, text: string): string {
  return wasm_from_vigenere(key, text);
}

export function toADFGVX(key: string, keyword: string, text: string): string {
  return wasm_to_adfgvx(key, keyword, text);
}

export function fromADFGVX(key: string, keyword: string, text: string): string {
  return wasm_from_adfgvx(key, keyword, text);
}

export function toADFGX(key: string, keyword: string, text: string): string {
  return wasm_to_adfgx(key, keyword, text);
}

export function fromADFGX(key: string, keyword: string, text: string): string {
  return wasm_from_adfgx(key, keyword, text);
}

export function toAffine(a: number, b: number, text: string): string {
  return wasm_to_affine(a, b, text);
}

export function fromAffine(a: number, b: number, text: string): string {
  return wasm_from_affine(a, b, text);
}

export function toAtbash(text: string): string {
  return wasm_to_atbash(text);
}

export function fromAtbash(text: string): string {
  return wasm_from_atbash(text);
}

export function toAutokey(key: string, text: string): string {
  return wasm_to_autokey(key, text);
}

export function fromAutokey(key: string, text: string): string {
  return wasm_from_autokey(key, text);
}

export function toBeaufort(key: string, text: string): string {
  return wasm_to_beaufort(key, text);
}

export function fromBeaufort(key: string, text: string): string {
  return wasm_from_beaufort(key, text);
}

export function toCaesar(key: string, text: string): string {
  return wasm_to_caesar(new TextEncoder().encode(key), text);
}

export function fromCaesar(key: string, text: string): string {
  return wasm_from_caesar(new TextEncoder().encode(key), text);
}

export function toColumnarTransposition(key: string, text: string): string {
  return wasm_to_columnartransposition(key, text);
}

export function fromColumnarTransposition(key: string, text: string): string {
  return wasm_from_columnartransposition(key, text);
}

export function toFourSquare(
  key1: string,
  key2: string,
  alphabet: string,
  pad: string,
  text: string,
): string {
  return wasm_to_foursquare(key1, key2, alphabet, pad, text);
}

export function fromFourSquare(
  key1: string,
  key2: string,
  alphabet: string,
  pad: string,
  text: string,
): string {
  return wasm_from_foursquare(key1, key2, alphabet, pad, text);
}
