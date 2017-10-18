var Ewok = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="ewok alldancers"></span>');
  this.setPosition(top, left);
};
Ewok.prototype = Object.create(BlinkyDancer.prototype);
Ewok.prototype.constructor = Ewok;

Ewok.prototype.step = function() {
  BlinkyDancer.prototype.step.call(this);
  this.$node.toggle();
};


