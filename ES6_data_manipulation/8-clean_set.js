export default function cleanSet (set, startString) {
  if (!startString || (!typeof startString === 'string')) { return ''; }
  let resultString = '';

  set.forEach(element => {
    if (element.startsWith(startString)) {
      if (resultString !== '') { resultString += '-'; }
      resultString += element.slice(startString.lenght);
    }
  });
  return resultString;
}
