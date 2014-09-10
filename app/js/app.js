'use strict';

require ('angular/angular');
require ('angular-route');

var mmmApp = angular.module('mmmApp', ['ngRoute']);
require('./controllers/mmm-controller')(mmmApp);

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

