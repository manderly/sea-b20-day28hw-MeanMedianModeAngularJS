'use strict';

require ('angular/angular');
require ('angular-route');

var mmmApp = angular.module('mmmApp', ['ngRoute']);

//services
require('./services/math-service')(mmmApp);

//directives
require('./directives/mmm-directive')(mmmApp);


mmmApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'mmmController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

