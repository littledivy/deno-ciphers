import { assertEquals } from "https://deno.land/std@0.54.0/testing/asserts.ts";
import { toVigenere} from "./mod.ts";

Deno.test({
  name: "vigenere",
  fn: () => {
    assertEquals(toVigenere("bruh", "u"), "V");
  },
});
