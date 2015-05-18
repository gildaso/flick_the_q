'use strict';

/**
 * @ngdoc overview
 * @name flickTheQApp
 * @description
 * # flickTheQApp
 *
 * Main module of the application.
 */
angular
  .module('flickTheQApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ui.bootstrap',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/search/:query', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
