'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('flickTheQApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _serviceFlickr_) {
    scope = $rootScope.$new();
    serviceFlickr = _serviceFlickr_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $serviceFlickr: serviceFlickr
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
