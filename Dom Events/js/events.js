console.log('external file');

//option 2 to handle event
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
function makeRad() {
    document.body.style.backgroundColor = 'red';
}

//option 3: get element by id and then set onclick
const btnMakeBlue = document.getElementById("btn-make-blue");
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function btnMakeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//option 3 : different 
const btnMakePurple = document.getElementById('btn-make-purple');
// console.log(btnMakePurple);
btnMakePurple.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}