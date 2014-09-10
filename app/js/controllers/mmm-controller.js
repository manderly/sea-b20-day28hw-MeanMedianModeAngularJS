'use strict';

module.exports = function(app) {
  app.controller('mmmController', function($scope, $http) {

    $scope.calc = function() { //test
      var currentNums = $scope.currentNums;
      $scope.mean(currentNums);
      $scope.median(currentNums);
      $scope.mode(currentNums);
    };

    $scope.csvToArray = function(numsWithCommas) {
      var array = numsWithCommas.split(',');
      return array;
    };

    $scope.sortByAscending = function(nums) {
      //sorting the array - the function(a,b) trick ensures 19999 doesn't come before 2
      //thanks http://www.sitepoint.com/javascript-array-sorting/ for the help
      var sortedArray = nums.sort(function(a,b) {
        return a - b;
      });
      return sortedArray;
    };

    $scope.sum = function(nums) {
      var sum = 0;
      for (var i = 0; i < nums.length; i ++) {
        sum += Number(nums[i]);
      }
      return sum;
    };

    //*** MEAN *** Sum the numbers and divide by the quantity of numbers
    $scope.mean = function(csvNums) {
      var numArray = $scope.csvToArray(csvNums); //convert to array
      var sumNums = $scope.sum(numArray); //sum the numbers
      var mean = Math.floor(sumNums / (numArray.length)); //round off the long decimal
      console.log("mmm-math mean is " + mean);
      $scope.meanOutput = mean;
    };


    //*** MEDIAN *** Sort into ascending order and return the number in the middle
    $scope.median = function(csvNums) {
      var numArray = $scope.csvToArray(csvNums); //convert to array
      var sortedArray = $scope.sortByAscending(numArray);

      var length = sortedArray.length;
      var midpoint = length / 2;

      if (length % 2 !== 0) { //when it's an oddly numbered array, floor the result
        midpoint = Math.floor(midpoint);
      } else {
        midpoint = midpoint - 1;
      }
      var median = Number(sortedArray[midpoint]);
      console.log("The index of the midpoint is " + midpoint);
      console.log("The sorted array value at that index is " + Number(sortedArray[midpoint]));
      console.log("mmm-median is " + median);
      $scope.medianOutput = median;
    },


    //*** MODE *** The most frequently occurring number in the set, if there is one.
    $scope.mode = function(csvNums) {
      var numArray = $scope.csvToArray(csvNums); //convert to array
      var num = 0;
      var modeMap = {};
      var mostFrequentNum;
      var numOccurrences = 0;
      var mode = 0;
      //loop through the numbers array and build a map
      //the key is the number itself
      //the value is how many times that number is found in the array
      for (var i = 0; i < numArray.length; i ++) {
        num = numArray[i];
        if (modeMap[num] == null) {
          modeMap[num] = 1;
        } else {
          modeMap[num]++;
          if (modeMap[num] > numOccurrences) {
            mode = num;
            numOccurrences = modeMap[num];
          }
        }
      }

      mode = Number(mode);

      if (mode == 0) {
        mode = "NO MODE";
      }

      console.log("mmm-mode is " + mode);
      $scope.modeOutput = mode;
    };

  });
};
