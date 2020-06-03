export default function createImportScript(name: string) {
  return `
  ${name.toLowerCase()} as wasm_to_${name.toLowerCase()},
  from_${name.toLowerCase()} as wasm_from_${name.toLowerCase()},

  export function to${name}(a: number, b: number, text: string): string {
    return wasm_to_${name.toLowerCase()}(a, b, text);
  }

  export function from${name}(a: number, b: number, text: string): string {
    return wasm_from_${name.toLowerCase()}(a, b, text);
  }`;
}

console.log(createImportScript(Deno.args[0]));
