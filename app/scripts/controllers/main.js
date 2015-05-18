'use strict';

/**
 * @ngdoc function
 * @name flickTheQApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickTheQApp
 */
angular.module('flickTheQApp')
  .controller('MainCtrl', function ($scope, $routeParams, serviceFlickr) {
    $scope.query = $routeParams.query;
    if (!$scope.query){
      $scope.query = "coffee";
    }
    $scope.pageNumber = 0;
    $scope.photos = [];
    $scope.loading = true;

    $scope.loadPhotos = function(){
      $scope.pageNumber++;
      if ($scope.pageNumber == 1) {
        $scope.loading = true;
      }
      serviceFlickr.search($scope.query, $scope.pageNumber, 15).success(function(data){
        $scope.loading = false;
        for(var i =0; i<data.photos.photo.length; i++){
          $scope.photos.push(data.photos.photo[i]);
        }
      });
    };

    $scope.loadPhotos();

  });
