const exits = document.querySelectorAll('img');
const blocks = document.querySelectorAll('.block');
var shadow1 = document.getElementById('shadow1');
var shadow2 = document.getElementById('shadow2');
var shadow3 = document.getElementById('shadow3');

var btn1 = document.querySelector('.btn1');
var book1 = document.querySelector('.book1');

var btn2 = document.querySelector('.btn2');
var book2 = document.querySelector('.book2');

var btn3 = document.querySelector('.btn3');
var book3 = document.querySelector('.book3');

exits.forEach((exit) => {
  exit.addEventListener('click', (event) => {
    console.log('sfsdf');
    blocks.forEach((b) => (b.style.display = 'none'));

    shadow1.style.display = 'none';
    shadow2.style.display = 'none';
    shadow3.style.display = 'none';

    btn1.style.zIndex = 1;
    book1.style.zIndex = 1;
    btn2.style.zIndex = 1;
    book2.style.zIndex = 1;
    btn3.style.zIndex = 1;
    book3.style.zIndex = 1;
  });
});
