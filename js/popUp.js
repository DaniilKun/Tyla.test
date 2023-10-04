// const shadow = document.querySelector('.shadow')
// const book = document.querySelector('.book1')
// const btn = document.querySelector('.btn')

// function toggleBlock() {
//   var block = document.getElementById('block');
//   block.style.display = (block.style.display === 'none' || block.style.display === '') ? 'block' : 'none';
//   shadow.style.display = 'block'
//   book.style.zIndex = '10'
//   btn.style.zIndex = '10'

// }

// document.addEventListener('click', function (event) {
//   var block = document.getElementById('block');
//   var button = document.querySelector('.btn1');
//   var book = document.querySelector('.book1');
//   if (event.target !== block && event.target !== button && event.target !== book && !block.contains(event.target)) {
//     // Клик произошел вне блока, вне кнопки и вне book, скрываем блок
//    block.style.display = 'none';
//   shadow.style.display = 'none'
// }
// });

function toggleBlock() {
  var block = document.getElementById('block1');
  var shadow = document.getElementById('shadow1');
  var btn = document.querySelector('.btn1');
  var book = document.querySelector('.book1')

  if (block.style.display === 'none' || block.style.display === '') {
      block.style.display = 'block';
      shadow.style.display = 'block';
      btn.style.zIndex = 10;
      book.style.zIndex = 10;
  } else {
      block.style.display = 'none';
      shadow.style.display = 'none';
      btn.style.zIndex = 1;
      book.style.zIndex = 1;
  }
}

function toggleBlock2() {
  var block = document.getElementById('block2');
  var shadow = document.getElementById('shadow2');
  var btn = document.querySelector('.btn2');
  var book = document.querySelector('.book2')

  if (block.style.display === 'none' || block.style.display === '') {
      block.style.display = 'block';
      shadow.style.display = 'block';
      btn.style.zIndex = 10;
      book.style.zIndex = 10;
  } else {
      block.style.display = 'none';
      shadow.style.display = 'none';
      btn.style.zIndex = 1;
      book.style.zIndex = 1;
  }
}
function toggleBlock3() {
  var block = document.getElementById('block3');
  var shadow = document.getElementById('shadow3');
  var btn = document.querySelector('.btn3');
  var book = document.querySelector('.book3')

  if (block.style.display === 'none' || block.style.display === '') {
      block.style.display = 'block';
      shadow.style.display = 'block';
      btn.style.zIndex = 10;
      book.style.zIndex = 10;
  } else {
      block.style.display = 'none';
      shadow.style.display = 'none';
      btn.style.zIndex = 1;
      book.style.zIndex = 1;
  }
}

