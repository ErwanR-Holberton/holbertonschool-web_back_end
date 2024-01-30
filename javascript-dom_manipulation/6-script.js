document.addEventListener('DOMContentLoaded', function () {
  const character = document.querySelector('#character');
  fetch('https://swapi-api.hbtn.io/api/people/5/?format=json')
    .then(response => { return response.json(); })
    .then(data => { character.textContent = data.name; })
    .catch(error => { console.error('Error fetching data:', error); });
});
