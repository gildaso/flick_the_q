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
    // by default, we search all the photos tagged 'coffee'
    if (!$scope.query) {
      $scope.query = 'coffee';
    }
    $scope.pageNumber = 0;
    $scope.photos = [];
    $scope.loading = true;

    $scope.loadPhotos = function () {
      $scope.pageNumber++;
      $scope.loading = true;
      serviceFlickr.search($scope.query, $scope.pageNumber, 24).success(function (data) {
        $scope.loading = false;
        for (var i = 0; i < data.photos.photo.length; i++) {
          $scope.photos.push(data.photos.photo[i]);
        }
      });
    };

    $scope.loadPhotos();

  });
