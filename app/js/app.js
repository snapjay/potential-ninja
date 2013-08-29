'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).

  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/grid', {templateUrl: 'partials/grid.html', controller: 'MyCtrl1'});
    $routeProvider.when('/buttons', {templateUrl: 'partials/buttons.html', controller: 'MyCtrl2'});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html' });
    $routeProvider.otherwise({redirectTo: '/about'});
  }]);
