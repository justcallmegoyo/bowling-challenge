'use strict';

describe("Frame", function() {

  var frame;

beforeEach(function() {
  frame = new Frame();
});

it("knows that it is the first frame", function() {
  expect(frame.frameNumber).toEqual(1);
  });

it("calculates the score of the first ball", function() {
  expect(frame.firstBallScore).toEqual(5);
});

it("calculates the score of the second ball", function() {
  expect(frame.secondBallScore).toEqual(5);
});
});
