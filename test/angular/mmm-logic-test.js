'use strict';

require('../../app/js/app.js');
require('angular-mocks');

describe('Mean Median Mode service', function() {

  beforeEach(angular.mock.module('mmmApp'));

  it('should find the average', inject(function(mathService) {
    expect(mathService.getMean("1,2,3")).toBe(2);
  }));

});



  //more tests needed:
  //test mean
  //median in odd-numbered series
  //median in even-numbered series
  //mode in a set that has a mode
  //NO MODE in set that has no mode
