export function TempConverter() {
  const toC = (temp: number): number => Math.round((temp - 32) / 1.8);
  const toF = (temp: number): number => Math.round(temp * 1.8 + 32);
  return {
    toC,
    toF,
    printToCTable: (header: string, step: number, limit: number) => {
      console.log(header);
      let i;
      i = 0;
      for (; i <= limit; i += step) {
        console.log(`F: ${i} = C: ${toC(i)}`);
      }
    },
  };
}

console.log(TempConverter().printToCTable("f to c", 20, 300));
