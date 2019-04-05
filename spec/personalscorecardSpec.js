'use strict';

describe("PersonalScorecard", function() {

  var personalScorecard;

beforeEach(function() {
  personalScorecard = new PersonalScorecard("Jennifer");
  console.log(personalScorecard)
});

it("carries the name of its owner", function() {
  // spyOnProperty(personalScorecard, 'playerName', 'name').and.returnValue("Jennifer");
  expect(personalScorecard.playerName).toEqual("Jennifer");
});
});
