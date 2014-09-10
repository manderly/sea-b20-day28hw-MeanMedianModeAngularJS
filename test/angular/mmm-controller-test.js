'use strict';

require('../../app/js/app.js');
require('angular-mocks');

describe('Mean Median Mode in Angular Controller Tests', function() {
  var $controllerConstructor;
  var $httpBackend;
  var scope;

  beforeEach(angular.mock.module('mmmApp')); //need this because browserify

  beforeEach(angular.mock.inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create a new controller', function() {
    var mmmController = $controllerConstructor('mmmController', {$scope: scope});
    expect(typeof mmmController).toBe('object');
  });

  //more tests needed:
  //test mean
  //median in odd-numbered series
  //median in even-numbered series
  //mode in a set that has a mode
  //NO MODE in set that has no mode

});
