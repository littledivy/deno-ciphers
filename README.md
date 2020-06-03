# deno-cihpers

Encihper and Decipher implementation for Deno.

## Implementations

- [x] Vigenere
- [x] ADFGVX
- [x] ADFGX
- [x] Affine
- [x] Atbash
- [x] Autokey
- [ ] Beaufort
- [ ] Caesar
- [ ] ColumnarTransposition
- [ ] FourSquare
- [ ] PlayFair
- [ ] PolybiusSqaure
- [ ] Porta
- [ ] RailFence
- [ ] RunningKey
- [ ] Substitution

## Example

```typescript
import { toVigenere, fromVigenere } from 'mod.ts';

toVigenere("key", "string"); // "CXPSRE"
fromVigenere("key", "CXPSRE"); // "string"
```

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
