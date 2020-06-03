# deno-ciphers

Encipher and Decipher implementation for Deno.

## Implementations

- [x] Vigenere
- [x] ADFGVX
- [x] ADFGX
- [x] Affine
- [x] Atbash
- [x] Autokey
- [x] Beaufort
- [x] Caesar
- [x] ColumnarTransposition
- [x] FourSquare
- [x] PlayFair
- [x] PolybiusSqaure
- [x] Porta
- [x] RailFence
- [x] RunningKey
- [x] Substitution

## Example

```typescript
import { toVigenere, fromVigenere } from 'mod.ts';

toVigenere("key", "string"); // "CXPSRE"
fromVigenere("key", "CXPSRE"); // "string"
```

## Rules

* __Vigenere__
  * key should be alphabetic.

* __ADFGVX__
  * key < 36 in length.
  * key should not contain repeated chars.
  * key and keyword should be a valid ascii.

* __ADFGX__
  * key < 25 in length.
  * key should not contain repeated chars.
  * key and keyword should be a valid ascii.

* __Affine__
  * `a` should be in the range [1, 25].
  * `b` should be in the range [1, 25].
  * `a` should not be relatively prime to 26.

* __Atbase__
  * no rules

* __AutoKey__
  * key should be alphabetic.

* __Beaufort__
  * key should be alphabetic.

* __Caesar__
  * no rules

* __ColumnarTransposition__
  * key should be a valid ascii.

* __FourSquare__
  * alphabet, key1, key2 should be 25 chars in length.
  * alphabet should be a valid ascii.
  * alphabet, key1, key2 should not contain repeated chars.
  * All of the chars in key1 and key2 should be in alphabet.
  * pad should be contained in alphabet.

* __Playfair__
  * key should 25 chars in length.
  * key should be a valid ascii.
  * key should not contain repeated characters.
  * pad should not be contained within key.

## Building from source

### Prerequisites

- [deno](https://deno.land/)
- [rust](https://www.rust-lang.org/)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/)

## Building
```bash
$ deno run -A scripts/build.ts
```

## Testing

Requires `wasm.js` to be built first.

```bash
$ deno test
```

### Contribution

Pull request, issues and feedback are very welcome. Code style is formatted with `deno fmt` and commit messages are done following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) spec.

### Licence

Copyright 2020, Divy Srivastava. All rights reserved. MIT license.
