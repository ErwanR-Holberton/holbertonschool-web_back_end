export default function updateUniqueItems(map) {
  return map.forEach((quantity, item) => {
    if (quantity === 1) {
      map.set(item, 100);
    } else {
      map.set(item, quantity);
    }
  });
}
