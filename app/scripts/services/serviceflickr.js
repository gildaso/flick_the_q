'use strict';

/**
 * @ngdoc service
 * @name flickTheQApp.serviceFlickr
 * @description
 * # serviceFlickr
 * Factory in the flickTheQApp.
 */
angular.module('flickTheQApp')
  .factory('serviceFlickr', function ($http) {
    // Public API
    return{
      search: function(query, page, perPage){
        return $http.get("/search/flickrapi?q=" + query + "&page=" + page + "&per_page=" + perPage);
      }
    };
  });
