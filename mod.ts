import init, {
  source,
  vigenere as wasm_to_vigenere,
  from_vigenere as wasm_from_vigenere
  adfgvx as wasm_to_adfgvx
  from_adfgvx as wasm_from_adfgvx
} from "./wasm.js";

await init(source);

export function toVigenere(key: string, text: string): string {
  return wasm_to_vigenere(key, text);
}

export function fromVigenere(key: string, text: string): string {
  return wasm_from_vigenere(key, text);
}

export function toADFGVX(key: string, text: string): string {
  return wasm_to_adfgvx(key, text);
}

export function fromADFGVX(key: string, text: string): string {
  return wasm_from_adfgvx(key, text);
}
