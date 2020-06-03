use ciphers::*;
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
pub fn from_adfgx(key: String, keyword: String, text: String) -> String {
    let ciph = ADFGX::new(&key, &keyword);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}

#[wasm_bindgen]
pub fn affine(a: i32, b: i32, text: String) -> String {
    let ciph = Affine::new(a, b);
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_affine(a: i32, b: i32, text: String) -> String {
    let ciph = Affine::new(a, b);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}

#[wasm_bindgen]
pub fn atbash(text: String) -> String {
    let ciph = Atbash::new();
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_atbash(text: String) -> String {
    let ciph = Atbash::new();
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}

#[wasm_bindgen]
pub fn autokey(key: String, text: String) -> String {
    let ciph = Autokey::new(&key);
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_autokey(key: String, text: String) -> String {
    let ciph = Autokey::new(&key);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}

#[wasm_bindgen]
pub fn beaufort(key: String, text: String) -> String {
    let ciph = Beaufort::new(&key);
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_beaufort(key: String, text: String) -> String {
    let ciph = Beaufort::new(&key);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}

#[wasm_bindgen]
pub fn caesar(key: u8, text: String) -> String {
    let ciph = Caesar::new(key);
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_caesar(key: u8, text: String) -> String {
    let ciph = Caesar::new(key);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}
