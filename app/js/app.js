'use strict';

require ('angular/angular');
require ('angular-route');

var mmmApp = angular.module('mmmApp', ['ngRoute']);

//controllers
require('./controllers/mmm-controller')(mmmApp);

//services
require('./services/math-service')(mmmApp);

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

