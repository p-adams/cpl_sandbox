import { readLines } from "https://deno.land/std@0.138.0/io/buffer.ts";
export async function echoInput() {
  let i;
  while ((i = await getInput())) {
    console.log(i);
  }
}

async function getInput() {
  for await (const input of readLines(Deno.stdin)) {
    return input;
  }
}
