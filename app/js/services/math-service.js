'use strict'

module.exports = function(app) {
  app.factory('mathService', function($http) { //fixme: what is $http for here?

    //todo: make a service that parses the string to only be numbers

    var mathObj = {
      //helpers
      csvToArray: function(numsWithCommas) {
        var array = numsWithCommas.split(',');
        return array;
      },

      sortByAscending: function(nums) {
        //sorting the array - the function(a,b) trick ensures 19999 doesn't come before 2
        //thanks http://www.sitepoint.com/javascript-array-sorting/ for the help
        var sortedArray = nums.sort(function(a,b) {
          return a - b;
        });
        return sortedArray;
      },

      sum: function(nums) {
        var sum = 0;
        for (var i = 0; i < nums.length; i ++) {
          sum += Number(nums[i]);
        }
        return sum;
      },

      //*** MEAN *** Sum the numbers and divide by the quantity of numbers
      getMean: function(csvNums) {
        var numArray = this.csvToArray(csvNums);
        var sumNums = this.sum(numArray); //sum the numbers
        var mean = Math.floor(sumNums / (numArray.length)); //round off the long decimal
        console.log("mmm-math mean is " + mean);
        return mean;
      },


      //*** MEDIAN *** Sort into ascending order and return the number in the middle
      getMedian: function(csvNums) {
        var numArray = this.csvToArray(csvNums); //convert to array
        var sortedArray = this.sortByAscending(numArray);

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
        return median;
      },

      //*** MODE *** The most frequently occurring number in the set, if there is one.
      getMode: function(csvNums) {
        var numArray = this.csvToArray(csvNums); //convert to array
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

        return mode;
      }, //end mode function
    }; // end math object

    return mathObj;
  });
};
