'use strict';

require('../../app/js/app.js'); //using browserify, so we can pull things in with require
require('angular-mocks');

describe('MMMController', function() {
  var $controllerConstructor;
  var $httpBackend;
  var scope; //why no $ here? scope is just an object, no angular functionality

  beforeEach(angular.mock.module('mmmApp')); //need this because browserify

  //every scope in angular is a child of root scope
  //every child scope has access to parameters set on top of root scope
  beforeEach(angular.mock.inject(function($controller, $rootScope) {
    scope = $rootScope.$new(); //$new is creating a new object
    $controllerConstructor = $controller;
  }));

  it('should be able to create a new controller', function() {
    var notesController = $controllerConstructor('mmmController', {$scope: scope});
    expect(typeof notesController).toBe('object');
  });

});
