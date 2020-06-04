mod fractionated_morse;
mod rot13;

use crate::cipher::ExtraCipher;
use ciphers::*;
use fractionated_morse::FractionatedMorse;
use wasm_bindgen::prelude::wasm_bindgen;

pub mod alphabet;
pub mod cipher;
pub mod keygen;
pub mod morse;
pub mod substitute;

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
pub fn rot13(text: String) -> String {
    let ctext = rot13::encrypt(&text);
    ctext
}

#[wasm_bindgen]
pub fn from_rot13(text: String) -> String {
    let ctext = rot13::decrypt(&text);
    ctext
}

#[wasm_bindgen]
pub fn fractionatedmorse(key: String, text: String) -> String {
    let ctext = FractionatedMorse::new(key);
    ctext.encrypt(&text).unwrap()
}

#[wasm_bindgen]
pub fn from_fractionatedmorse(key: String, text: String) -> String {
    let ctext = FractionatedMorse::new(key);
    ctext.decrypt(&text).unwrap()
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

#[wasm_bindgen]
pub fn columnartransposition(key: String, text: String) -> String {
    let ciph = ColumnarTransposition::new(&key);
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_columnartransposition(key: String, text: String) -> String {
    let ciph = ColumnarTransposition::new(&key);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}

#[wasm_bindgen]
pub fn foursquare(key1: &str, key2: &str, alphabet: &str, pad: char, text: String) -> String {
    let ciph = FourSquare::new(key1, key2, alphabet, pad);
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_foursquare(key1: &str, key2: &str, alphabet: &str, pad: char, text: String) -> String {
    let ciph = FourSquare::new(key1, key2, alphabet, pad);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}

#[wasm_bindgen]
pub fn polybiussquare(key: String, chars: &str, text: String) -> String {
    let ciph = PolybiusSquare::new(&key, chars);
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_polybiussquare(key: String, chars: &str, text: String) -> String {
    let ciph = PolybiusSquare::new(&key, chars);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}

#[wasm_bindgen]
pub fn porta(key: String, text: String) -> String {
    let ciph = Porta::new(&key);
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_porta(key: String, text: String) -> String {
    let ciph = Porta::new(&key);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}

#[wasm_bindgen]
pub fn railfence(key: usize, text: String) -> String {
    let ciph = RailFence::new(key);
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_railfence(key: usize, text: String) -> String {
    let ciph = RailFence::new(key);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}

#[wasm_bindgen]
pub fn runningkey(key: String, text: String) -> String {
    let ciph = RunningKey::new(&key);
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_runningkey(key: String, text: String) -> String {
    let ciph = RunningKey::new(&key);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}

#[wasm_bindgen]
pub fn substitution(key: String, text: String) -> String {
    let ciph = Substitution::new(&key);
    // encipher
    let ctext = ciph.encipher(&text).unwrap();
    ctext
}

#[wasm_bindgen]
pub fn from_substitution(key: String, text: String) -> String {
    let ciph = Substitution::new(&key);
    // decipher
    let ptext = ciph.decipher(&text).unwrap();
    ptext
}
