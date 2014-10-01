'use strict';

module.exports = function(app) {
  app.directive('mmmDir', function() {
    var mmmView = {
      restrict: 'EAC', //EAC is common choice here
      templateUrl: 'views/mmm-view.html',
      scope: {
      },
      controller: function($scope, mathService) {
        //this directive now holds the controller, which was formerly contained in mmm-controller.js
        $scope.processNums = function(nums) {
          $scope.meanResult = mathService.getMean(nums);
          $scope.medianResult = mathService.getMedian(nums);
          $scope.modeResult = mathService.getMode(nums);
        };
      }
    };
    return mmmView;
  });
};
