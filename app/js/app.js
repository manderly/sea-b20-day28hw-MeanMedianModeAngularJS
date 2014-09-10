'use strict';

require ('angular/angular');
require ('angular-route');

var mmmApp = angular.module('mmmApp', ['ngRoute']);
require('./controllers/mmm-controller')(mmmApp);

//Question: At least one route seems to be needed
mmmApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/mmm-view.html',
      controller: 'mmmController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

//fresh angular app from nothing
//make a github repo
//clone to local
//create a branch
//make folder structure
//bring over server.js file
//copy over package.json
//$ npm install
//create a gruntfile to handle refreshing
//need browserify, debowerify,etc?
//npm install bower --save-dev
//bower install angular, angular-route
//bower install --save-dev angular-mocks

