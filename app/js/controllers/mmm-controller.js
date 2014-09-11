'use strict';

module.exports = function(app) {
  app.controller('mmmController', function($scope, mathService) {

    $scope.processNums = function(nums) {
      mathService.getMean(nums);
      mathService.getMedian(nums);
      mathService.getMode(nums);

      //from button, call 3 separate things from here
    };
  });
};
