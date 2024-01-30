export default function cleanSet(set, startString) {
  if (!startString) { return ''; }
  const filteredArray = [...set].filter((element) => element.startsWith(startString))
    .map((element) => element.slice(startString.length));
  const resultString = filteredArray.join('-');
  return resultString;
}
