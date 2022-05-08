import { readLines } from "https://deno.land/std@0.138.0/io/buffer.ts";
export async function echoInput() {
  while (true) {
    const input = await getInput();
    if (input === undefined) {
      return false;
    }
    console.log(input);
  }
}

async function getInput() {
  for await (const input of readLines(Deno.stdin)) {
    return input;
  }
}
