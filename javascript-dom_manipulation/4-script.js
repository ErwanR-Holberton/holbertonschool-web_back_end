document.addEventListener('DOMContentLoaded', function () {
  const addItemElement = document.querySelector('#add_item');
  const myListElement = document.querySelector('.my_list');
  addItemElement.addEventListener('click', function () {
    const newListItem = document.createElement('li');
    newListItem.textContent = 'Item';
    myListElement.appendChild(newListItem);
  });
});
