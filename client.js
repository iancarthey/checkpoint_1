console.log('js');

$(document).ready(readyNow);
//global variable to use for click counter
let clickCount = 0;

function readyNow(){
  //checking to see if jquery linked
  console.log('jquery sourced');
  //generate click function
  $('#generateButton').on('click', addDiv);
}

function addDiv(){
  console.log('in add div');
  clickCount++;
  // create div for step 2
  $('#container').append('<div id="divNumba1"></div>');
  // create p within divNumba2 for step 3
  $('#divNumba1').append('<div class="divNumba2"><p>Number of Clicks: ' + clickCount + '</p></div>');
  // add switch button
  $('.switchButton').remove();
  $('.divNumba2').append('<button class="switchButton">switch</button>');
  // switch button event listener
  $('#divNumba1').on('click', '.switchButton' , switchColor);
  // add delete button
  $('.deleteButton').remove();
  $('.divNumba2').append('<button class="deleteButton">delete</delete>');
  // delete button event listener
  $('#divNumba1').on('click', '.deleteButton', deleteDiv);
}
// switch color function to toggle yellow and red
function switchColor(){
  $(this).parent().toggleClass('highlight');
}

//function to delete parent div
function deleteDiv(){
  $(this).parent().remove();
}
