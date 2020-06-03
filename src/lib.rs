use ciphers::{Cipher, Vigenere, ADFGVX, ADFGX, Affine};
use wasm_bindgen::prelude::wasm_bindgen;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn vigenere(key: String, text: String) -> String {
    let vigenere = Vigenere::new(&key);
    // encipher
    let ctext = vigenere.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_vigenere(key: String, text: String) -> String {
    let vigenere = Vigenere::new(&key);
    // decipher
    let ptext = vigenere.decipher(&text).unwrap();
    ptext
}

#[wasm_bindgen]
pub fn adfgvx(key: String, keyword: String, text: String) -> String {
    let ciph = ADFGVX::new(&key, &keyword);
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_adfgvx(key: String, keyword: String, text: String) -> String {
    let ciph = ADFGVX::new(&key, &keyword);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}

#[wasm_bindgen]
pub fn adfgx(key: String, keyword: String, text: String) -> String {
    let ciph = ADFGX::new(&key, &keyword);
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_adfgv(key: String, keyword: String, text: String) -> String {
    let ciph = ADFGX::new(&key, &keyword);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}

#[wasm_bindgen]
pub fn affine(a: i31, b: i32, text: String) -> String {
    let ciph = Affine::new(a, b);
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_affine(a: i31, b: i32, text: String) -> String {
    let ciph = Affine::new(a, b);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}
