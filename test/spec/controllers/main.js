'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('flickTheQApp'));

  var MainCtrl,scope,serviceFlickr;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _serviceFlickr_) {
    scope = $rootScope.$new();
    serviceFlickr = _serviceFlickr_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $serviceFlickr: serviceFlickr
    });
  }));

  it('should set $scope.photos and $scope.page_number and $scope.loading and $scope.query', function () {
    spyOn(serviceFlickr, 'search').and.callFake(function () {
      return {
        success: function (callback) {
          callback({
            "photos": {
              "page": 1,
              "pages": 13871,
              "perpage": 24,
              "total": "5",
              "photo": [{
                "id": "1111111111",
                "owner": "110379517@N01",
                "secret": "cc40e0afdb",
                "server": "5443",
                "farm": 6,
                "title": "Photo1",
                "ispublic": 1,
                "isfriend": 0,
                "isfamily": 0
              },
                {
                  "id": "2222222222",
                  "owner": "33535417@N02",
                  "secret": "97518432f4",
                  "server": "8752",
                  "farm": 9,
                  "title": "Photo2",
                  "ispublic": 1,
                  "isfriend": 0,
                  "isfamily": 0
                },
                {
                  "id": "3333333333",
                  "owner": "33535417@N03",
                  "secret": "4479c31b70",
                  "server": "8849",
                  "farm": 9,
                  "title": "Photo3",
                  "ispublic": 1,
                  "isfriend": 0,
                  "isfamily": 0
                },
                {
                  "id": "4444444444",
                  "owner": "33585417@N04",
                  "secret": "bf4469d5c4",
                  "server": "5337",
                  "farm": 6,
                  "title": "Photo4",
                  "ispublic": 1,
                  "isfriend": 0,
                  "isfamily": 0
                },
                {
                  "id": "5555555555",
                  "owner": "33735417@N05",
                  "secret": "6b8bac9861",
                  "server": "7725",
                  "farm": 8,
                  "title": "Photo5",
                  "ispublic": 1,
                  "isfriend": 0,
                  "isfamily": 0
                }
              ]
            }
          });
        }
      }
    });
    scope.loadPhotos();
    expect(scope.photos.length).toEqual(5);
  });
});
