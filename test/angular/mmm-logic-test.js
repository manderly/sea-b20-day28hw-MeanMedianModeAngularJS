'use strict';

require('../../app/js/app.js');
require('angular-mocks');

describe('Mean Median Mode service', function() {

  beforeEach(angular.mock.module('mmmApp'));

  it('should have a working math service', inject(function(mathService) {
    expect(mathService).toBeDefined();
  }));

  it('should find the mean', inject(function(mathService) {
    expect(mathService.getMean("1,2,3")).toBe(2);
  }));

  it('should find the median', inject(function(mathService){
    expect(mathService.getMedian("1,2,3")).toBe(2);
  }));

  it('should find the mode where there is a mode', inject(function(mathService) {
    expect(mathService.getMode("1,2,2,3")).toBe(2);
  }));

  it('should find NO MODE where there is no mode', inject(function(mathService) {
    expect(mathService.getMode("1,2,3")).toBe("NO MODE");
  }));

});



  //more tests needed:
  //test mean
  //median in odd-numbered series
  //median in even-numbered series
  //mode in a set that has a mode
  //NO MODE in set that has no mode
