console.log('js');

$(document).ready(readyNow);
let clickCount = 0;

function readyNow(){
  console.log('jquery sourced');
  $('#generateButton').on('click', addDiv);
}

function addDiv(){
  console.log('in add div');
  clickCount++;
  $('body').append('<div id="divNumba1"></div>');
  $('#divNumba1').append('<p class="background">Number of Clicks: ' + clickCount + '</p>');
  $('#divNumba1').append('<button class="swapButton">Swap</button><button class="deleteButton">Delete</button>');
  // $('.background').css('background-color', 'red');
  $('.swapButton').on('click', function(){
  });
  $('.deleteButton').on('click', deleteDiv);
}

// function switchColor(){
//   $(this).prev().css('background-color', 'yellow');
// }

function deleteDiv(){
  $(this).prev().remove();
  $(this).prev().remove();
  $(this).remove();
}
