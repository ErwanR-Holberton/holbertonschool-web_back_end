export default function cleanSet(set, startString) {
  if (!startString || (!typeof startString === 'string')) { return ''; }
  const filteredArray = [...set].filter((element) => element.startsWith(startString))
    .map((element) => element.slice(startString.length));
  const resultString = filteredArray.join('-');
  return resultString;
}
