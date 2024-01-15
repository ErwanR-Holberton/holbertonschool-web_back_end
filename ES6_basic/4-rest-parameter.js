export default function returnHowManyArguments(...theArgs) {
  let total = 0;
  theArgs.forEach(() => {
    total += 1;
  });
  return total;
}
