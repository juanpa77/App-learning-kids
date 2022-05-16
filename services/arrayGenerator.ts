
export const stepsGenerator = (n: number) => {
  return [...new Array(n)].map((e, i) => i + 1)
}
