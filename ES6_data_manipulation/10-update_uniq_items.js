export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) { throw new Error('Cannot process'); }
  return map.forEach((quantity, item) => {
    if (quantity === 1) {
      map.set(item, 100);
    } else {
      map.set(item, quantity);
    }
  });
}
