// create element and set innerText or innerHTML
const newChild = document.createElement('li');
newChild.innerText = 'New born footballer here, and I am hare';

// find the parent where you will add the Child
const playersList = document.getElementById('player-list');

// append the child to the parent
playersList.appendChild(newChild);