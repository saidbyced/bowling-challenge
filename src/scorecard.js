function Scorecard() {
  this._score = [[,],[,],[,],[,],[,],[,],[,],[,],[,],[,,]];
};

Scorecard.prototype = {
  enterScore : function(frame, bowl, score) {
    this._score[frame][bowl] = score;
    return "Score saved";
  },
  returnScore : function(frame, bowl) {
    return this._score[frame][bowl];
  }
};
