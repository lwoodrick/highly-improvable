//= require_tree .

var taglines = ['always cleans up after themselves.',
                'makes the shoodle whoop doop.',
                'will avenge you, by Grabthar\'s hammer',
                'eats Skittles exclusively.',
                'insists its children fight to build character.',];

var taglineSelect = function() {
  var selector = Math.random();
  console.log(selector);
  var counter = 0;
  while (counter < taglines.length) {
    var taglineSelector = (counter+1)/taglines.length;
    if (selector < taglineSelector) {
       var taglineInsert = document.getElementById('random-tagline');
      taglineInsert.innerHTML = taglineInsert.innerHTML + taglines[counter];

      break;
    }
    else {
      counter++;
    }
  }
};

document.addEventListener("DOMContentLoaded", function(event) {
  taglineSelect();
});