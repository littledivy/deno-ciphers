use wasm_bindgen::prelude::wasm_bindgen;
use ciphers::{Cipher, Vigenere};

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
