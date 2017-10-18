$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new BlinkyDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addMarbleButton').on('click', function(event) {
  
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log(dancerMakerFunctionName);
    console.log(dancerMakerFunction);
    
    var marble = new Marble(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(marble.$node);
    window.dancers.push(marble);
  });

  $('.addEwokButton').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    var ewok = new Ewok(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(ewok.$node);
    window.dancers.push(ewok);

  });
  
  $('.makeDancersLineUp').on('click', function(event) {
    console.log('button clicked');
    console.log(window.dancers);
    for (var i = 0; i < window.dancers.length; i++) {
      //window.dancers[i].setPosition(50, 50);
      window.dancers[i].setPosition($('body').height() * .5, ((i) * (($('body').width()) 
      / (window.dancers.length + 1))));
    }
  });
  
  $('body').on('click', '.marble', function(event) {

    var top = Math.round($(this)[0].offsetTop);
    var left = Math.round($(this)[0].offsetLeft);
    
    for (var i = 0; i < window.dancers.length; i++) {
      let currentTop = Math.round(window.dancers[i].top);
      let currentLeft = Math.round(window.dancers[i].left);
      // if (Math.round(left) === currentLeft && Math.round(top) === currentTop) {
      //   console.log(window.dancers);
      //   window.dancers.splice(i, 1);
      //   console.log(window.dancers);
      // }  
    }
    
    var farthest;
    var farthestDistance = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      let currentTop = window.dancers[i].top;
      let currentLeft = window.dancers[i].left;
      let currentDistance = Math.sqrt(Math.pow(left - currentLeft, 2) + Math.pow(top - currentTop, 2));
      if (currentDistance > farthestDistance) {
        farthestDistance = currentDistance;
        farthest = window.dancers[i];
      }
    }
    var newTop = (farthest.top + top) / 2;
    var newLeft = (farthest.left + left) / 2;
    var marble = new Marble(newTop, newLeft, Math.random() * 1000);
    $('body').append(marble.$node);
    window.dancers.push(marble);
    
    $(this)[0].offsetTop = 0;
    $(this)[0].offsetLeft = 0;
  });
  
  $('body').on('click', '.ewok', function(event) {
    console.log($(this));
    var top = Math.round($(this)[0].offsetTop);
    var left = Math.round($(this)[0].offsetLeft);
    
    for (var i = 0; i < window.dancers.length; i++) {
      let currentTop = Math.round(window.dancers[i].top);
      let currentLeft = Math.round(window.dancers[i].left);
      // if (Math.round(left) === currentLeft && Math.round(top) === currentTop) {
      //   console.log(window.dancers);
      //   window.dancers.splice(i, 1);
      //   console.log(window.dancers);
      // }  
    }
    
    var farthest;
    var farthestDistance = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      let currentTop = window.dancers[i].top;
      let currentLeft = window.dancers[i].left;
      let currentDistance = Math.sqrt(Math.pow(left - currentLeft, 2) + Math.pow(top - currentTop, 2));
      if (currentDistance > farthestDistance) {
        farthestDistance = currentDistance;
        farthest = window.dancers[i];
      }
    }
    var newTop = (farthest.top + top) / 2;
    var newLeft = (farthest.left + left) / 2;
    
    var ewok = new Ewok(newTop, newLeft, Math.random() * 1000);
    $('body').append(ewok.$node);
    window.dancers.push(ewok);
  });
  
});

