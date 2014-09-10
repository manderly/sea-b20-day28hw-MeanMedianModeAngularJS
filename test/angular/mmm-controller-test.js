'use strict';

//question: can this be used to test the math logic?
require('../../app/js/app.js'); //using browserify, so we can pull things in with require
require('angular-mocks');

describe('Mean Median Mode in Angular Controller Tests', function() {
  var $controllerConstructor;
  var $httpBackend;
  var scope;

  beforeEach(angular.mock.module('mmmApp')); //need this because browserify

  //every scope in angular is a child of root scope
  //every child scope has access to parameters set on top of root scope
  beforeEach(angular.mock.inject(function($controller, $rootScope) {
    scope = $rootScope.$new(); //$new is creating a new object
    $controllerConstructor = $controller;
  }));

  it('should be able to create a new controller', function() {
    var mmmController = $controllerConstructor('mmmController', {$scope: scope});
    expect(typeof mmmController).toBe('object');
  });

  //where to test math?
  //test mean
  //median in odd-numbered series
  //median in even-numbered series
  //mode in a set that has a mode
  //NO MODE in set that has no mode

});
