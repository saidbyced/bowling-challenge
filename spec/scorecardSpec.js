'use strict';

describe('Scorecard', function(){

  let scorecard;
  beforeEach(function(){
    scorecard = new Scorecard;
  });

  it('receives a score', function(){
    expect(scorecard.enterScore(0,0,5)).toEqual("Score saved");
  });

  it('returns a score previously entered', function(){
    scorecard.enterScore(0,0,5);
    scorecard.enterScore(3,1,9);

    expect(scorecard.returnScore(0,0)).toEqual(5);
    expect(scorecard.returnScore(3,1)).toEqual(9);
  });

});
