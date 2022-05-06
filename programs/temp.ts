export function TempConverter() {
  const toC = (temp: number): number => Math.round((temp - 32) / 1.8);
  const toF = (temp: number): number => Math.round(temp * 1.8 + 32);
  return {
    // export for test
    toC,
    toF,
    printTable: (
      header: string,
      step: number,
      limit: number,
      tableType: "F" | "C"
    ) => {
      console.log(header);
      let i;
      i = 0;
      const tableStr = (t: number) =>
        tableType === "F" ? `F: ${t} = C: ${toC(t)}` : `C: ${t} = F: ${toF(t)}`;
      for (; i <= limit; i += step) {
        console.log(tableStr(i));
      }
    },
  };
}

console.log(TempConverter().printTable("f to c", 20, 300, "F"));
