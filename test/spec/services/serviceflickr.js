'use strict';

describe('Service: serviceFlickr', function () {

  // load the service's module
  beforeEach(module('flickTheQApp'));

  // instantiate service
  var serviceFlickr, httpBackend;
  beforeEach(inject(function (_serviceFlickr_, _$httpBackend_) {
    serviceFlickr = _serviceFlickr_;
    httpBackend = _$httpBackend_;
  }));

  it('should send a request to the right URL when calling the search function', function () {
    serviceFlickr.search("coffee",1,30);
    httpBackend.expectGET('https://localhost:3000/search?q=coffee&page=1&per_page=30').respond({});
    //httpBackend.expectGET('/search/flickrapi?q=coffee&page=1&per_page=30').respond({});
    httpBackend.flush();
  });

});
