'use strict';

/**
 * @ngdoc function
 * @name flickTheQApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the flickTheQApp
 */
angular.module('flickTheQApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.query="";
    $scope.searchAction= function(){
      $location.path("/search/" + $scope.query );
    }
  });
