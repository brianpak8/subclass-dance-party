var Marble = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="marble"></span>');
  this.setPosition(top, left);
};
Marble.prototype = Object.create(Dancer.prototype);
Marble.prototype.constructor = Marble;

Marble.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
};

Marble.prototype.lineUp = function() {
  
};
Marble.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};