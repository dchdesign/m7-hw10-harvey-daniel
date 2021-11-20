// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE

 
  var nameSpan = localStorage.getItem('span')
  var textarea = localStorage.getItem('notes')


formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()

  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE

  var span = span.value
  var textarea = textarea.value
  console.log ({span, textarea})
  localStorage.setItem('span')
  localStorage.setItem('notes')

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value

  // Clear localstorage's content
  // YOUR CODE HERE

  var clear = textarea.value
  var clear = localStorage.value

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp
