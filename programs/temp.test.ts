import { assertEquals } from "https://deno.land/std@0.138.0/testing/asserts.ts";
import { TempConverter } from "./temp.ts";

Deno.test("fahrenheit to celsius", () => {
  assertEquals(25, TempConverter(77).toC());
});

Deno.test("celsius to fahrenheit", () => {
  assertEquals(77, TempConverter(25).toF());
});
