/* global $ */
$(document).ready(function(){

// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
$('body').css('background', 'red')

// testing jquery url
$('body').css('background', 'red')
//declare variable
var bDep = $('#checking .deposit')
var bWith = $('#checking .withdraw')

var activity = function (){
  console.log('Hello Customr!')
  $('#checking .balance').text($('#checking .input') .val())
}

bDep.on('click', activity)
bWith.on('click', activity)

var bDep= $('#checking .deposit')
var bWith = $('#checking .withdraw')

  })
