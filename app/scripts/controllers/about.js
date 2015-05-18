'use strict';

/**
 * @ngdoc function
 * @name flickTheQApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flickTheQApp
 */
angular.module('flickTheQApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
