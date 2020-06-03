export default function createOP(fn: string) {
  return `
  #[wasm_bindgen]
  pub fn ${fn.toLowerCase()}(key: String, text: String) -> String {
      let ciph = ${fn}::new(&key, &keyword);
      // encipher
      let ctext = ciph.encipher(&text).unwrap();
      ctext
  }

  #[wasm_bindgen]
  pub fn from_${fn.toLowerCase()}(key: String, text: String) -> String {
      let ciph = ${fn}::new(&key, &keyword);
      // decipher
      let ptext = ciph.decipher(&text).unwrap();
      ptext
  }
  `;
}

createOP(Deno.args[0]);
