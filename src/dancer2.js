var Ewok = function () {
  blinkyDancer.call(this, top, left, timeBetweenSteps);
};
Ewok.prototype = Object.create(BlinkyDancer.prototype);
Ewok.prototype.constructor = Ewok;
Ewok.prototype.step = function() {
  BlinkyDancer.prototype.step.call(this);
  this.$node.toggle();
};
Ewok.prototype.lineUp = function() {
  
};