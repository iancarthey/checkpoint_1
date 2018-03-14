console.log('js');

$(document).ready(readyNow);
//global variable to use for click counter
let clickCount = 0;


function readyNow(){
  //checking to see if jquery linked
  console.log('jquery sourced');
  //generate click function
  $('#generateButton').on('click', addDiv);
  $('#container').on('click', '.switchButton' , switchColor);
  $('#container').on('click', '.delete', deleteDiv);
}

function addDiv(){
  console.log('in add div');
  // click count increase
  clickCount++;
  //variable to append to dom
  let firstDiv = $('#container').append('<div class="divNumba1"><p>Number of Clicks: '
  + clickCount + '<button class="switchButton">switch</button><button class="delete">delete</button></p></div>');


}
// switch color function to toggle yellow and red
function switchColor(){
  $(this).parent().toggleClass('highlight');

}

//function to delete parent div
function deleteDiv(){
  //$(this).prev().remove();
  //$(this).prev().remove();
  $(this).parent().remove();
}
