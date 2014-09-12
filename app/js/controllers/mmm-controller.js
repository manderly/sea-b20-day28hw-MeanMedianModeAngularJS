'use strict';

module.exports = function(app) {
  app.controller('mmmController', function($scope, mathService) {

    $scope.processNums = function(nums) {
      $scope.meanResult = mathService.getMean(nums);
      $scope.medianResult = mathService.getMedian(nums);
      $scope.modeResult = mathService.getMode(nums);

      //from button, call 3 separate things from here
    };
  });
};
