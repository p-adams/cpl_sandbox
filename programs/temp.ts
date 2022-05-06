export function TempConverter(temp: number) {
  return {
    toC: () => (temp - 32) / 1.8,
    toF: () => temp * 1.8 + 32.0,
  };
}
