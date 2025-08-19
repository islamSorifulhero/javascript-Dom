//1. parent node
const mainContainer = document.getElementById("main-container");
console.log(mainContainer);

//2. create child node
const placeSection = document.createElement("section");

// create h1
const h1 = document.createElement('h1');
h1.innerText = "Please I want to visit";
placeSection.appendChild(h1);

const ul = document.createElement('ul');
placeSection.appendChild(ul);
const li1 = document.createElement('li');
li1.innerText = 'bandorbon';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'sundarbon';
ul.appendChild(li2)

mainContainer.appendChild(placeSection);



// easier to create html 
const booksSection = document.createElement('section');
booksSection.innerHTML = `
<h1>Books I need to read</h1>
<ul>
    <li>Physics</li>
    <li>Chemistry</li>
    <li>Biology</li>
</ul>
`
mainContainer.appendChild(booksSection);

