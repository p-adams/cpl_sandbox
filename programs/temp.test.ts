import { assertEquals } from "https://deno.land/std@0.138.0/testing/asserts.ts";
import { TempConverter } from "./temp.ts";

Deno.test("fahrenheit to celsius", () => {
  assertEquals(25, TempConverter().toC(77));
});

Deno.test("celsius to fahrenheit", () => {
  assertEquals(77, TempConverter().toF(25));
});
