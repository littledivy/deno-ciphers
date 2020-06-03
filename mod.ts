import init, {
  source,
  vigenere as wasm_vigenere
} from "./wasm.js";

await init(source);

export function toVigenere(a: string, b: string): string {
  return wasm_vigenere(a, b);
}
